import React, { useState } from 'react';
import { Header } from './components/Header';
import { CabinetCrossReferenceView } from './components/CabinetCrossReferenceView';
import { InitiativesView } from './components/InitiativesView';
import { KnowledgeBaseView } from './components/KnowledgeBaseView';
import { CrossPostView } from './components/CrossPostView';
import { DailyReportView } from './components/DailyReportView';
import { MonthlyReportView } from './components/MonthlyReportView';
import { TopicDetailModal, TopicItem } from './components/TopicDetailModal';
import { 
  HISTORICAL_POSTS, 
  ACTIONABLE_INITIATIVES, 
  CROSS_POST_INSIGHTS, 
  STRATEGIC_THEME_TRENDS 
} from './data/historicalDatabase';
import {
  CABINET_POSTS,
  CABINET_MOHESR_INTERSECTIONS,
  CROSS_MINISTRY_COLLABORATIONS,
  GOVERNMENT_WIDE_TRENDS,
  CABINET_DERIVED_INITIATIVES,
  ANALYST_PROPOSED_INITIATIVES,
  TIMELINES_DATA
} from './data/cabinetDatabase';

export default function App() {
  const [activeTab, setActiveTab] = useState<'cabinet' | 'initiatives' | 'knowledge' | 'crosspost' | 'daily' | 'monthly'>('cabinet');
  const [lang, setLang] = useState<'ar' | 'en'>('ar'); // Default to Arabic as requested
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | null>(null);

  const stats = {
    totalPosts: HISTORICAL_POSTS.length,
    presidentialCount: HISTORICAL_POSTS.filter(p => p.hierarchy_level.includes('LEVEL 1')).length,
    ministerialCount: HISTORICAL_POSTS.filter(p => p.hierarchy_level.includes('LEVEL 2')).length,
    initiativesCount: ACTIONABLE_INITIATIVES.length,
    aiOpportunities: HISTORICAL_POSTS.filter(p => p.ai_classification !== 'NONE').length,
    cabinetPostsCount: CABINET_POSTS.length,
    intersectionsCount: CABINET_MOHESR_INTERSECTIONS.length,
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans ${lang === 'ar' ? 'font-arabic dir-rtl' : ''}`}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        stats={stats}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'cabinet' && (
          <CabinetCrossReferenceView
            cabinetPosts={CABINET_POSTS}
            intersections={CABINET_MOHESR_INTERSECTIONS}
            collaborations={CROSS_MINISTRY_COLLABORATIONS}
            trends={GOVERNMENT_WIDE_TRENDS}
            derivedInitiatives={CABINET_DERIVED_INITIATIVES}
            proposedInitiatives={ANALYST_PROPOSED_INITIATIVES}
            timelines={TIMELINES_DATA}
            lang={lang}
            onSelectTopic={setSelectedTopic}
          />
        )}
        {activeTab === 'initiatives' && (
          <InitiativesView 
            initiatives={ACTIONABLE_INITIATIVES} 
            lang={lang} 
            onSelectTopic={setSelectedTopic}
          />
        )}
        {activeTab === 'knowledge' && (
          <KnowledgeBaseView 
            posts={HISTORICAL_POSTS} 
            lang={lang} 
            onSelectTopic={setSelectedTopic}
          />
        )}
        {activeTab === 'crosspost' && (
          <CrossPostView 
            insights={CROSS_POST_INSIGHTS} 
            trends={STRATEGIC_THEME_TRENDS} 
            lang={lang} 
            onSelectTopic={setSelectedTopic}
          />
        )}
        {activeTab === 'daily' && (
          <DailyReportView 
            lang={lang} 
            onSelectTopic={setSelectedTopic}
          />
        )}
        {activeTab === 'monthly' && (
          <MonthlyReportView 
            lang={lang} 
            onSelectTopic={setSelectedTopic}
          />
        )}
      </main>

      {/* Global AI Topic Detail & Plan Generation Modal */}
      {selectedTopic && (
        <TopicDetailModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          lang={lang}
        />
      )}

      <footer className="border-t border-slate-800/80 bg-slate-900/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              {lang === 'ar' 
                ? 'وكلاء التحول الرقمي - وزارة التعليم العالي والبحث العلمي • المنظومة الاستراتيجية المتكاملة' 
                : 'MOHESR Digital Transformation Agents • Integrated Strategic Platform'}
            </span>
          </div>
          <div>
            {lang === 'ar'
              ? 'المصادر المعتمدة: الصفحة الرسمية لمجلس الوزراء المصري (/EgyptianCabinet) • الصفحة الرسمية لوزارة التعليم العالي (/MOHESREGYPT)'
              : 'Data Sources: Official Egyptian Cabinet (/EgyptianCabinet), Official MOHESR (/MOHESREGYPT), SCU'}
          </div>
        </div>
      </footer>
    </div>
  );
}

