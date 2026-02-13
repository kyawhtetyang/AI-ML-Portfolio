
import { GoogleGenAI, Type } from "@google/genai";
import { AppInfo, Review } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAppInsights(app: AppInfo): Promise<{ editorial: string; reviews: Review[] }> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short editorial "Why We Love This" (max 50 words) and 3 realistic user reviews for the app "${app.name}". 
                 The app is described as: ${app.subtitle}.
                 Return the response in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            editorial: { type: Type.STRING },
            reviews: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  author: { type: Type.STRING },
                  rating: { type: Type.NUMBER },
                  title: { type: Type.STRING },
                  content: { type: Type.STRING },
                  date: { type: Type.STRING }
                },
                required: ["author", "rating", "title", "content", "date"]
              }
            }
          },
          required: ["editorial", "reviews"]
        }
      }
    });

    const data = JSON.parse(response.text);
    return data;
  } catch (error) {
    console.error("Gemini Insight Generation Failed:", error);
    return {
      editorial: "An essential tool for your digital life, offering unparalleled performance and a beautiful interface.",
      reviews: [
        { author: "PowerUser99", rating: 5, title: "Life Changing", content: "Absolutely love the intuitive design and how it fits into my workflow.", date: "2 days ago" },
        { author: "DesignCritic", rating: 4, title: "Nearly Perfect", content: "Beautiful UI, though I'd love more customization options.", date: "1 week ago" }
      ]
    };
  }
}
