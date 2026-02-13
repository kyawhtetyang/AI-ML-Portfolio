
import React, { useState, useMemo } from 'react';
import { Category, AppInfo } from './types';
import { APPS } from './constants';
import { AppCard } from './components/AppCard';
import { AppDetailModal } from './components/AppDetailModal';
import profilePhoto from './docs/kyawhtet.jpg';

const SidebarItem: React.FC<{ 
  category: Category; 
  active: boolean; 
  onClick: (cat: Category) => void;
  icon: React.ReactNode;
}> = ({ category, active, onClick, icon }) => (
  <button 
    onClick={() => onClick(category)}
    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
      active 
        ? 'bg-[#fa233b] text-white shadow-lg shadow-red-200' 
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
    }`}
  >
    <span className={`${active ? 'text-white' : 'text-gray-400 group-hover:text-[#fa233b]'}`}>
      {icon}
    </span>
    <span className="text-sm font-semibold">{category}</span>
  </button>
);

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Discover);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);
  const isDiscoverPage = selectedCategory === Category.Discover;
  const isContactPage = selectedCategory === Category.Contact;
  const isChatPage = selectedCategory === Category.Chat;

  const chatSeedMessages = [
    {
      role: 'assistant',
      text: 'Hi, I am Kyaw Htet’s assistant. Ask me about AI/ML projects, web apps, or collaboration.'
    },
    {
      role: 'user',
      text: 'I want to build an AI-powered dashboard for my startup.'
    },
    {
      role: 'assistant',
      text: 'Great. Share your data sources, target users, and launch timeline. I can suggest a build plan and tech stack.'
    }
  ];

  const portfolioSkills = [
    'AI/ML Engineering',
    'LLM Applications',
    'Python + FastAPI',
    'React + TypeScript',
    'Prompt Engineering',
    'Model Deployment'
  ];

  const featuredWork = [
    {
      title: 'Resume Intelligence Platform',
      summary: 'Built an AI-powered platform that ranks candidates against job descriptions using semantic similarity and structured scoring.',
      stack: 'Python, FastAPI, PostgreSQL, OpenAI'
    },
    {
      title: 'Customer Support Copilot',
      summary: 'Developed a retrieval-augmented assistant that drafts accurate support replies from internal docs and prior tickets.',
      stack: 'React, Node.js, Vector DB, LLM APIs'
    },
    {
      title: 'Vision-based Defect Detector',
      summary: 'Trained and deployed a computer-vision pipeline to detect manufacturing defects with real-time dashboard reporting.',
      stack: 'PyTorch, OpenCV, Docker, Grafana'
    }
  ];

  const filteredApps = useMemo(() => {
    let list = APPS;
    if (selectedCategory === Category.Projects) {
      list = APPS;
    } else if (
      selectedCategory !== Category.Discover &&
      selectedCategory !== Category.Contact &&
      selectedCategory !== Category.Chat
    ) {
      list = list.filter(app => app.category === selectedCategory);
    }
    if (searchQuery) {
      list = list.filter(app => 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  const handleAppClick = (app: AppInfo) => {
    setSelectedApp(app);
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f7]">
      {/* Sidebar - Desktop Only */}
      <aside className="hidden lg:flex flex-col w-64 glass border-r border-black/5 p-6 fixed inset-y-0 z-20">
        <div className="mb-10 pl-2">
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <img
              src={profilePhoto}
              alt="Kyaw Htet"
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
            Kyaw Htet
          </h1>
        </div>

        <nav className="space-y-1">
          <SidebarItem 
            category={Category.Discover} 
            active={selectedCategory === Category.Discover} 
            onClick={setSelectedCategory}
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
          />
          <SidebarItem 
            category={Category.Projects} 
            active={selectedCategory === Category.Projects} 
            onClick={setSelectedCategory}
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h8v13H3V7zm10-3h8v16h-8V4z" /></svg>}
          />
          <SidebarItem 
            category={Category.Contact} 
            active={selectedCategory === Category.Contact} 
            onClick={setSelectedCategory}
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          />
          <button
            onClick={() => setSelectedCategory(Category.Chat)}
            className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
              selectedCategory === Category.Chat
                ? 'bg-[#fa233b] text-white shadow-lg shadow-red-200'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className={`${selectedCategory === Category.Chat ? 'text-white' : 'text-gray-400 group-hover:text-[#fa233b]'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5m8-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-sm font-semibold truncate">{Category.Chat}</span>
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              selectedCategory === Category.Chat
                ? 'bg-white text-[#fa233b]'
                : 'bg-[#fa233b]/10 text-[#fa233b]'
            }`}>
              Beta
            </span>
          </button>
        </nav>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-4 md:p-8 lg:p-12">
        <header className="sticky top-4 z-10 glass border border-black/5 rounded-2xl px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight">{selectedCategory}</h2>
              {isChatPage && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#fa233b]/10 text-[#fa233b]">
                  Beta
                </span>
              )}
            </div>
            <p className="text-[#6e6e73] text-sm mt-1">
              {isDiscoverPage
                ? 'Intro, skills, featured work, and ways to contact me.'
                : isContactPage
                  ? 'Choose a quick way to reach me or send a short message.'
                  : isChatPage
                    ? 'Beta preview of a conversational assistant interface.'
                    : 'Browse all projects in one place.'}
            </p>
          </div>
          
          {!isDiscoverPage && !isContactPage && !isChatPage && (
            <div className="relative">
              <input 
                type="text"
                placeholder="Search Apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 lg:w-80 bg-black/5 border-none rounded-xl py-2 px-10 focus:ring-2 focus:ring-[#fa233b] transition-all outline-none text-sm"
              />
              <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          )}
        </header>

        {isDiscoverPage ? (
          <div className="space-y-8 pb-24">
            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b] mb-2">Intro</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Hi, I build AI and software products that solve real business problems.
              </h3>
              <p className="mt-4 text-sm md:text-base text-gray-600 max-w-3xl">
                I focus on practical machine learning systems, full-stack product delivery, and clean user experiences.
                This page highlights my core skills and selected projects.
              </p>
            </section>

            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Skills</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {portfolioSkills.map((skill) => (
                  <div key={skill} className="bg-white/90 border border-black/5 rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Featured Work</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredWork.map((project) => (
                  <article key={project.title} className="glass border border-black/5 rounded-2xl p-5">
                    <h4 className="text-base font-bold text-gray-900">{project.title}</h4>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.summary}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">{project.stack}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b] mb-2">Next</p>
              <h3 className="text-2xl font-bold text-gray-900">Want to work together?</h3>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Open the Contact tab to send your project details.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(Category.Contact)}
                  className="inline-flex items-center rounded-xl bg-[#fa233b] text-white text-sm font-semibold px-4 py-2 hover:bg-[#d91e33] transition-colors"
                >
                  Go to Contact
                </button>
              </div>
            </section>
          </div>
        ) : isContactPage ? (
          <div className="space-y-8 pb-24">
            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b] mb-2">Contact</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Let&apos;s build something useful together.
              </h3>
              <p className="mt-3 text-sm md:text-base text-gray-600 max-w-3xl">
                I usually reply within 24 hours. Use a quick action below or send your project details with the form.
              </p>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <a href="mailto:yourname@example.com" className="glass border border-black/5 rounded-2xl p-5 hover:border-[#fa233b]/40 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b]">Email</p>
                  <p className="mt-2 text-base font-semibold text-[#1d1d1f]">yourname@example.com</p>
                </a>
                <a href="#" className="glass border border-black/5 rounded-2xl p-5 hover:border-[#fa233b]/40 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b]">LinkedIn</p>
                  <p className="mt-2 text-base font-semibold text-[#1d1d1f]">Connect professionally</p>
                </a>
                <a href="#" className="glass border border-black/5 rounded-2xl p-5 hover:border-[#fa233b]/40 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b]">GitHub</p>
                  <p className="mt-2 text-base font-semibold text-[#1d1d1f]">View source projects</p>
                </a>
                <a href="#" className="glass border border-black/5 rounded-2xl p-5 hover:border-[#fa233b]/40 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#fa233b]">Book a Call</p>
                  <p className="mt-2 text-base font-semibold text-[#1d1d1f]">Schedule a 30-min chat</p>
                </a>
              </div>
            </section>

            <section className="glass border border-black/5 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#1d1d1f]">Send a Message</h3>
              <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#1d1d1f]">Name</span>
                  <input type="text" placeholder="Your name" className="bg-white/90 border border-black/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#fa233b]" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#1d1d1f]">Email</span>
                  <input type="email" placeholder="you@example.com" className="bg-white/90 border border-black/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#fa233b]" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-[#1d1d1f]">Project Type</span>
                  <select className="bg-white/90 border border-black/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#fa233b]">
                    <option>AI/ML App</option>
                    <option>Web Application</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-[#1d1d1f]">Message</span>
                  <textarea rows={5} placeholder="Tell me about your goals, timeline, and requirements." className="bg-white/90 border border-black/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#fa233b] resize-y" />
                </label>
                <div className="md:col-span-2">
                  <button type="button" className="inline-flex items-center rounded-xl bg-[#fa233b] text-white text-sm font-semibold px-5 py-2.5 hover:bg-[#d91e33] transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </div>
        ) : isChatPage ? (
          <div className="pb-40 lg:pb-32">
            <section className="glass border border-black/5 rounded-3xl h-[68vh] min-h-[520px] flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto p-5 pb-28 space-y-4 bg-white/40">
                {chatSeedMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-[#fa233b] text-white'
                          : 'bg-white border border-black/10 text-[#1d1d1f]'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="fixed left-0 right-0 bottom-16 lg:bottom-0 lg:left-64 z-40 px-4 md:px-8 lg:px-12 pb-3 lg:pb-4">
              <div className="glass border border-black/10 rounded-2xl p-3 md:p-4">
                <div className="flex items-end gap-3">
                  <textarea
                    rows={1}
                    placeholder="Type your message..."
                    className="flex-1 bg-white border border-black/10 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#fa233b] resize-none"
                  />
                  <button
                    type="button"
                    className="shrink-0 rounded-xl bg-[#fa233b] text-white text-sm font-semibold px-4 py-2.5 hover:bg-[#d91e33] transition-colors"
                  >
                    Send
                  </button>
                </div>
                <p className="text-[11px] text-[#6e6e73] mt-2">
                  Beta preview. For guaranteed response, use Contact tab.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {searchQuery ? `Search results for "${searchQuery}"` : 'Featured Projects'}
                </h3>
                <button className="text-[#fa233b] font-medium hover:underline text-sm">View All</button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10">
                {filteredApps.map(app => (
                  <AppCard key={app.id} app={app} onClick={handleAppClick} />
                ))}
                {filteredApps.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-gray-400 font-medium">No apps found matching your criteria.</p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Mobile Navigation - Only visible on small screens */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 h-16 glass border-t border-black/5 z-50 flex items-center justify-around px-4">
        <button onClick={() => setSelectedCategory(Category.Discover)} className={`p-2 rounded-full ${selectedCategory === Category.Discover ? 'text-[#fa233b]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </button>
        <button onClick={() => setSelectedCategory(Category.Projects)} className={`p-2 rounded-full ${selectedCategory === Category.Projects ? 'text-[#fa233b]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h8v13H3V7zm10-3h8v16h-8V4z" /></svg>
        </button>
        <button onClick={() => setSelectedCategory(Category.Contact)} className={`p-2 rounded-full ${selectedCategory === Category.Contact ? 'text-[#fa233b]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </button>
        <button onClick={() => setSelectedCategory(Category.Chat)} className={`p-2 rounded-full ${selectedCategory === Category.Chat ? 'text-[#fa233b]' : 'text-gray-400'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5m8-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
      </nav>

      {/* App Detail Modal */}
      <AppDetailModal 
        app={selectedApp} 
        onClose={() => setSelectedApp(null)} 
      />
    </div>
  );
};

export default App;
