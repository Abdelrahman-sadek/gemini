import React from 'react';
import { ShieldCheck, Database, Cpu, Compass, Activity, FileText, Building2 } from 'lucide-react';

interface HeaderProps {
  activeTab: 'cabinet' | 'initiatives' | 'knowledge' | 'crosspost' | 'daily' | 'monthly';
  setActiveTab: (tab: 'cabinet' | 'initiatives' | 'knowledge' | 'crosspost' | 'daily' | 'monthly') => void;
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  stats: {
    totalPosts: number;
    presidentialCount: number;
    ministerialCount: number;
    initiativesCount: number;
    aiOpportunities: number;
    cabinetPostsCount: number;
    intersectionsCount: number;
  };
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  stats
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-900/30 ring-1 ring-teal-400/30">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                  {lang === 'ar' ? 'وكلاء التحول الرقمي' : 'MOHESR DIGITAL TRANSFORMATION AGENTS'}
                </span>
                <span className="text-xs text-slate-400">
                  جمهورية مصر العربية
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  {lang === 'ar' ? 'رئاسة مجلس الوزراء' : 'CABINET DIRECTIVES'}
                </span>
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                {lang === 'ar' 
                  ? 'وكلاء التحول الرقمي - وزارة التعليم العالي' 
                  : 'MOHESR Digital Transformation Agents'}
              </h1>
              <p className="text-xs text-slate-400">
                {lang === 'ar' 
                  ? 'المصادر الرسمية: مجلس الوزراء المصري (/EgyptianCabinet) ووزارة التعليم العالي (/MOHESREGYPT)'
                  : 'Sources: Official Egyptian Cabinet (/EgyptianCabinet) & MOHESR Egypt (/MOHESREGYPT)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3 bg-slate-950/60 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300">
              <div>
                <span className="text-amber-400 block text-[9px] font-bold font-mono">
                  {lang === 'ar' ? 'تقاطعات مجلس الوزراء' : 'CABINET INTERSECTIONS'}
                </span>
                <span className="font-semibold text-white font-mono">
                  {stats.intersectionsCount} {lang === 'ar' ? 'تقاطع موثق' : 'Synthesized'}
                </span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block text-[9px] font-mono">
                  {lang === 'ar' ? 'بيانات التعليم العالي' : 'MOHESR POSTS'}
                </span>
                <span className="font-semibold text-white font-mono">
                  {stats.totalPosts} {lang === 'ar' ? 'منشور معتمد' : 'Verified'}
                </span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block text-[9px] font-mono">
                  {lang === 'ar' ? 'توجيهات رئاسية' : 'PRESIDENTIAL (L1)'}
                </span>
                <span className="font-semibold text-amber-400 font-mono">
                  {stats.presidentialCount} {lang === 'ar' ? 'تكليف' : 'Directives'}
                </span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block text-[9px] font-mono">
                  {lang === 'ar' ? 'مبادرات تنفيذية' : 'INITIATIVES'}
                </span>
                <span className="font-semibold text-emerald-400 font-mono">
                  {stats.initiativesCount} {lang === 'ar' ? 'جاهزة' : 'Packaged'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-3.5 py-2 text-xs font-bold rounded-lg bg-teal-600 hover:bg-teal-500 text-slate-950 shadow-md transition flex items-center gap-1.5"
              title="Toggle Arabic / English display"
            >
              <span>{lang === 'ar' ? 'English View 🌐' : 'عرض باللغة العربية 🇪🇬'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 border-t border-slate-800/80 pt-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('cabinet')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'cabinet'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{lang === 'ar' ? 'مجلس الوزراء والتقاطعات الحكومية' : 'Cabinet Intelligence & Matrix'}</span>
            <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono font-bold">
              {stats.intersectionsCount} {lang === 'ar' ? 'تقاطع' : 'Intersections'}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('initiatives')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'initiatives'
                ? 'bg-teal-600/20 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>{lang === 'ar' ? 'محرك المبادرات والفرص الرقمية' : 'Initiatives Discovery Engine'}</span>
            <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-teal-900/50 text-teal-300 border border-teal-700/50">
              {stats.initiativesCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('knowledge')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'knowledge'
                ? 'bg-teal-600/20 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Database className="w-4 h-4 text-teal-400" />
            <span>{lang === 'ar' ? 'مستودع بيانات التعليم العالي' : 'MOHESR Knowledge Base'}</span>
            <span className="ml-1 text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
              {stats.totalPosts}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('crosspost')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'crosspost'
                ? 'bg-teal-600/20 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Cpu className="w-4 h-4 text-teal-400" />
            <span>{lang === 'ar' ? 'ذكاء التقاطع والاتجاهات العامة' : 'Cross-Post Intelligence & Trends'}</span>
          </button>

          <button
            onClick={() => setActiveTab('daily')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'daily'
                ? 'bg-teal-600/20 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'ar' ? 'التقرير الرقابي اليومي' : 'Daily Monitoring Report'}</span>
          </button>

          <button
            onClick={() => setActiveTab('monthly')}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${
              activeTab === 'monthly'
                ? 'bg-teal-600/20 text-teal-300 border border-teal-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'ar' ? 'التقرير الاستراتيجي وخطة الـ 90 يوماً' : 'Monthly Strategic & 90-Day Plan'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
