import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  GitMerge, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Zap, 
  Database, 
  Filter, 
  Search, 
  Calendar, 
  ExternalLink, 
  Activity, 
  Compass, 
  Lock, 
  Unlock, 
  Clock, 
  Sparkles,
  Milestone,
  FileText,
  Briefcase,
  Share2,
  HelpCircle,
  TrendingUp,
  Tag
} from 'lucide-react';
import { 
  CabinetPostRecord, 
  IntersectionRecord, 
  CrossMinistryCollaboration, 
  GovernmentWideTrend, 
  CabinetDerivedInitiative,
  CrossReferenceType,
  OperationalPriority,
  CabinetRelevanceClassification
} from '../types';
import { TopicItem } from './TopicDetailModal';

interface CabinetCrossReferenceViewProps {
  cabinetPosts: CabinetPostRecord[];
  intersections: IntersectionRecord[];
  collaborations: CrossMinistryCollaboration[];
  trends: GovernmentWideTrend[];
  derivedInitiatives: CabinetDerivedInitiative[];
  proposedInitiatives: CabinetDerivedInitiative[];
  timelines: {
    government_priorities: Array<{ year: string; event: string; level: string }>;
    mohesr_priorities: Array<{ year: string; event: string; level: string }>;
    intersection_milestones: Array<{ date: string; title: string; type: string }>;
  };
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}

export const CabinetCrossReferenceView: React.FC<CabinetCrossReferenceViewProps> = ({
  cabinetPosts,
  intersections,
  collaborations,
  trends,
  derivedInitiatives,
  proposedInitiatives,
  timelines,
  lang,
  onSelectTopic
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'matrix' | 'feed' | 'pipeline' | 'collab' | 'trends' | 'initiatives' | 'report'>('matrix');
  const [selectedRelationshipType, setSelectedRelationshipType] = useState<string>('ALL');
  const [selectedPriority, setSelectedPriority] = useState<string>('ALL');
  const [selectedRelevance, setSelectedRelevance] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIntersection, setSelectedIntersection] = useState<IntersectionRecord | null>(intersections[0] || null);
  const [selectedPipelinePost, setSelectedPipelinePost] = useState<CabinetPostRecord>(cabinetPosts[0]);

  const openIntersectionTopic = (item: IntersectionRecord) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: item.intersection_id,
      title: item.potential_initiative,
      title_ar: item.potential_initiative,
      type: 'intersection',
      date: item.cabinet_date,
      priority: item.priority,
      hierarchy: item.relationship_type,
      confidence: item.confidence,
      evidence_level: item.evidence_level,
      government_signal: item.government_direction,
      mohesr_implication: item.mohesr_direction,
      gap: item.identified_gap,
      solution: item.potential_initiative,
      pilot: item.pipeline_stage?.pilot,
      impact: item.pipeline_stage?.expected_impact,
      tech_categories: [item.technology_category, item.cross_ministry_relevance],
      ai_component: item.ai_relevance,
      automation_component: item.automation_relevance,
      data_requirements: item.data_relevance,
      summary_en: `Government Direction: ${item.government_direction}\nMOHESR Direction: ${item.mohesr_direction}\nIdentified Gap: ${item.identified_gap}\nPotential Initiative: ${item.potential_initiative}`,
      summary_ar: `التوجيه الحكومي: ${item.government_direction}\nمسار التعليم العالي: ${item.mohesr_direction}\nالفجوة المحددة: ${item.identified_gap}\nالمبادرة المقترحة: ${item.potential_initiative}`
    });
  };

  const openCabinetPostTopic = (post: CabinetPostRecord) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: post.cabinet_post_id,
      title: post.title,
      title_ar: post.title_ar,
      type: 'cabinet_post',
      date: post.date,
      priority: post.priority,
      hierarchy: post.hierarchy_level,
      confidence: post.confidence,
      evidence_level: post.relevance_classification,
      government_signal: post.official_government_signal,
      mohesr_implication: post.mohesr_implication,
      gap: post.priority_reason,
      solution: post.mohesr_implication,
      tech_categories: post.technology_categories,
      entities: post.mentioned_entities,
      summary_en: post.text_en,
      summary_ar: post.text_ar
    });
  };

  const openInitiativeTopic = (init: CabinetDerivedInitiative) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: init.initiative_id,
      title: init.initiative_name,
      title_ar: init.initiative_name_ar,
      type: 'initiative',
      priority: init.priority,
      hierarchy: init.initiative_type,
      evidence_level: init.evidence_level,
      government_signal: init.government_evidence?.cabinet_statement,
      mohesr_implication: init.mohesr_evidence?.mohesr_statement,
      gap: init.problem,
      solution: init.proposed_solution,
      pilot: init.pilot,
      impact: init.scalability,
      tech_categories: init.technology_stack,
      ai_component: init.ai_component?.description,
      automation_component: init.automation_component?.description,
      data_requirements: init.data_requirements?.required_data,
      summary_en: `${init.problem} - ${init.proposed_solution}`,
      summary_ar: `${init.initiative_name_ar}: ${init.problem} - ${init.proposed_solution}`
    });
  };

  const openCollabTopic = (col: CrossMinistryCollaboration) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: col.id,
      title: col.title,
      title_ar: col.title_ar,
      type: 'collaboration',
      priority: col.data_status === 'AVAILABLE' ? 'HIGH' : 'CRITICAL',
      hierarchy: col.collaboration_status,
      evidence_level: col.data_status,
      government_signal: col.cabinet_mandate,
      mohesr_implication: col.mohesr_role,
      gap: `Data exchange requirements: ${col.data_exchange}. Security & privacy: ${col.security_privacy_considerations}`,
      solution: col.joint_platform_candidate,
      tech_categories: ['Cross-Ministry Interoperability', 'National Data Grid'],
      data_requirements: col.data_exchange,
      summary_en: `Cabinet Mandate: ${col.cabinet_mandate}\nMOHESR Role: ${col.mohesr_role}\nJoint Platform: ${col.joint_platform_candidate}`,
      summary_ar: `تكليف مجلس الوزراء: ${col.cabinet_mandate}\nدور التعليم العالي: ${col.mohesr_role}\nالمنصة المشتركة: ${col.joint_platform_candidate}`
    });
  };

  const openTrendTopic = (trend: GovernmentWideTrend) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: trend.id,
      title: trend.trend_name,
      title_ar: trend.trend_name_ar,
      type: 'trend',
      priority: trend.priority,
      hierarchy: 'Government-Wide Technology Trend',
      evidence_level: 'Audited Trend Analysis',
      government_signal: trend.government_signal,
      mohesr_implication: trend.mohesr_exposure,
      gap: trend.mohesr_exposure,
      solution: trend.proactive_opportunity,
      tech_categories: ['Government Digital Transformation', 'National Technology Standard'],
      summary_en: `Government Signal: ${trend.government_signal}\nMOHESR Exposure: ${trend.mohesr_exposure}\nProactive Opportunity: ${trend.proactive_opportunity}`,
      summary_ar: `التوجيه الحكومي العام: ${trend.government_signal}\nأثر وانكشاف التعليم العالي: ${trend.mohesr_exposure}\nالفرصة الاستباقية: ${trend.proactive_opportunity}`
    });
  };

  // Filtered intersections
  const filteredIntersections = intersections.filter(item => {
    const matchesRel = selectedRelationshipType === 'ALL' || item.relationship_type.includes(selectedRelationshipType);
    const matchesPri = selectedPriority === 'ALL' || item.priority === selectedPriority;
    const matchesQuery = searchQuery === '' || 
      item.government_direction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mohesr_direction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.potential_initiative.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.identified_gap.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRel && matchesPri && matchesQuery;
  });

  // Filtered Cabinet Posts
  const filteredPosts = cabinetPosts.filter(post => {
    const matchesRel = selectedRelevance === 'ALL' || post.relevance_classification === selectedRelevance;
    const matchesPri = selectedPriority === 'ALL' || post.priority === selectedPriority;
    const matchesQuery = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.title_ar.includes(searchQuery) ||
      post.text_ar.includes(searchQuery) ||
      post.text_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.official_government_signal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRel && matchesPri && matchesQuery;
  });

  return (
    <div className="space-y-8">
      {/* Top Strategic Overview Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                EGYPTIAN CABINET INTELLIGENCE ENGINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/20">
                SOURCE: facebook.com/EgyptianCabinet
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                CROSS-REFERENCED WITH MOHESREGYPT
              </span>
            </div>
            
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {lang === 'ar'
                ? 'منظومة استخبارات مجلس الوزراء والتقاطع الاستراتيجي مع التعليم العالي'
                : 'Cabinet Intelligence & MOHESR Strategic Cross-Reference Engine'}
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-4xl leading-relaxed">
              {lang === 'ar'
                ? 'تحليل توجيهات مجلس الوزراء ورئاسة الجمهورية وربطها بالاحتياجات الرقمية لمنظومة التعليم العالي والبحث العلمي والمستشفيات الجامعية لاستخراج الفرص الاستباقية وسد الفجوات التشغيلية.'
                : 'Continuous analysis of Cabinet decisions, Prime Minister directives, and national programs cross-referenced with MOHESR capabilities to discover early-warning signals, inter-ministerial integrations, and proactive digital initiatives.'}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-center">
            <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-right">
              <span className="text-[10px] text-slate-400 block font-mono">INTERSECTION MATRICES</span>
              <span className="text-base font-bold text-amber-400 font-mono">
                {intersections.length} Synthesized
              </span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 text-right">
              <span className="text-[10px] text-slate-400 block font-mono">CABINET FEED</span>
              <span className="text-base font-bold text-teal-400 font-mono">
                {cabinetPosts.length} Audited
              </span>
            </div>
          </div>
        </div>

        {/* Sub-navigation bar */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setActiveSubTab('matrix')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'matrix'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <GitMerge className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'ar' ? 'مصفوفة التقاطع (Matrix)' : 'Cross-Reference Matrix'}</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] font-mono">{intersections.length}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('feed')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'feed'
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>{lang === 'ar' ? 'سجل مجلس الوزراء (Cabinet Feed)' : 'Audited Cabinet Knowledge'}</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] font-mono">{cabinetPosts.length}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('pipeline')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'pipeline'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'ar' ? 'مسار التحويل العملي (Action Pipeline)' : 'Post-to-Action Pipeline'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('collab')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'collab'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{lang === 'ar' ? 'التكامل الحكومي (Cross-Ministry)' : 'Cross-Ministry & Data Grid'}</span>
            <span className="px-1.5 py-0.2 rounded bg-slate-800 text-[10px] font-mono">{collaborations.length}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('initiatives')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'initiatives'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{lang === 'ar' ? 'محفظة المبادرات (Initiatives)' : 'Government vs Analyst Initiatives'}</span>
            <span className="px-1.5 py-0.2 rounded bg-purple-900/40 text-purple-300 text-[10px] font-mono">
              {derivedInitiatives.length + proposedInitiatives.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('trends')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'trends'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'ar' ? 'الاتجاهات والخط الزمني (Trends & Timelines)' : 'Gov Trends & Timelines'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('report')}
            className={`px-3 py-2 rounded-lg font-medium transition flex items-center gap-2 whitespace-nowrap ${
              activeSubTab === 'report'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-rose-400" />
            <span>{lang === 'ar' ? 'التقرير الاستخباراتي المشترك (Daily Brief)' : 'Cabinet → MOHESR Brief'}</span>
          </button>
        </div>
      </div>

      {/* SUB-VIEW 1: CROSS-REFERENCE MATRIX */}
      {activeSubTab === 'matrix' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter Relationship:
              </span>
              {['ALL', 'TYPE A', 'TYPE B', 'TYPE C', 'TYPE D', 'TYPE E', 'TYPE F'].map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedRelationshipType(t)}
                  className={`px-2.5 py-1 rounded-md transition font-medium ${
                    selectedRelationshipType === t
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold">Priority:</span>
              {['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'].map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPriority(p)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                    selectedPriority === p
                      ? 'bg-teal-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-4 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-amber-400" />
                  <span>Section 8: Egyptian Cabinet → MOHESR Cross-Reference Matrix</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Audited intersections between Government directives and Ministry of Higher Education operational baseline
                </p>
              </div>
              <span className="text-xs text-amber-400 font-mono font-bold">
                {filteredIntersections.length} Active Records
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-[11px] text-slate-400 uppercase font-mono">
                    <th className="py-3 px-4">{lang === 'ar' ? 'نوع العلاقة والأولوية' : 'Relationship & Priority'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'توجيه مجلس الوزراء (المصدر)' : 'Cabinet Direction (Source)'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'مسار ونشاط التعليم العالي' : 'MOHESR Connection & Activity'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'الفجوة المحددة' : 'Identified Gap'}</th>
                    <th className="py-3 px-4">{lang === 'ar' ? 'المبادرة المقترحة' : 'Proposed Initiative'}</th>
                    <th className="py-3 px-4 text-center">{lang === 'ar' ? 'الإجراء الذكي' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {filteredIntersections.map(int => (
                    <tr 
                      key={int.intersection_id}
                      onClick={() => openIntersectionTopic(int)}
                      className={`hover:bg-slate-850 transition cursor-pointer ${
                        selectedIntersection?.intersection_id === int.intersection_id
                          ? 'bg-slate-800/80 border-l-4 border-amber-400'
                          : ''
                      }`}
                    >
                      <td className="py-3.5 px-4 align-top whitespace-nowrap">
                        <span className="block font-mono text-[11px] font-bold text-amber-400">
                          {int.relationship_type.split('—')[0]}
                        </span>
                        <span className="text-[10px] text-slate-400 block mb-1.5">
                          {int.relationship_type.split('—')[1]}
                        </span>
                        <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${
                          int.priority === 'CRITICAL'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : int.priority === 'HIGH'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-slate-800 text-slate-300'
                        }`}>
                          {int.priority}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 align-top max-w-xs">
                        <div className="font-mono text-[10px] text-teal-400 mb-1 flex items-center gap-1.5">
                          <span>{int.cabinet_post_id}</span>
                          <span className="text-slate-500">• {int.cabinet_date}</span>
                        </div>
                        <p className="text-slate-200 leading-snug font-medium text-[11px]">
                          {int.government_direction}
                        </p>
                      </td>

                      <td className="py-3.5 px-4 align-top max-w-xs">
                        <div className="font-mono text-[10px] text-indigo-400 mb-1 flex items-center gap-1.5">
                          <span>{int.mohesr_post_id}</span>
                          <span className="text-slate-500">• {int.mohesr_date}</span>
                        </div>
                        <p className="text-slate-300 leading-snug text-[11px]">
                          {int.mohesr_direction}
                        </p>
                      </td>

                      <td className="py-3.5 px-4 align-top max-w-xs text-rose-300/90 text-[11px] leading-relaxed">
                        {int.identified_gap}
                      </td>

                      <td className="py-3.5 px-4 align-top max-w-xs">
                        <span className="font-bold text-white block text-[11px] mb-1">
                          {int.potential_initiative}
                        </span>
                        <span className="text-[10px] text-teal-400 block font-mono">
                          Tech: {int.technology_category}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 align-top text-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openIntersectionTopic(int);
                          }}
                          className="px-2.5 py-1 rounded bg-teal-500 hover:bg-teal-400 text-slate-950 text-[10px] font-bold flex items-center gap-1 mx-auto shadow"
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>{lang === 'ar' ? 'الخطة الذكية' : 'AI Plan'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Selected Intersection Dossier */}
          {selectedIntersection && (
            <div className="bg-slate-900 border border-amber-500/40 rounded-xl p-5 shadow-2xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                    INTERSECTION DOSSIER • {selectedIntersection.intersection_id}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {selectedIntersection.potential_initiative}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono text-xs font-bold">
                    {selectedIntersection.relationship_type}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                    Confidence: {selectedIntersection.confidence}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-teal-400 font-bold">
                    <span>OFFICIAL CABINET SIGNAL</span>
                    <span className="font-mono text-[10px]">{selectedIntersection.cabinet_post_id} ({selectedIntersection.cabinet_date})</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedIntersection.government_direction}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <strong>Cross-Ministry Relevance:</strong> {selectedIntersection.cross_ministry_relevance}
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-indigo-400 font-bold">
                    <span>MOHESR BASELINE & DIRECTION</span>
                    <span className="font-mono text-[10px]">{selectedIntersection.mohesr_post_id} ({selectedIntersection.mohesr_date})</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    {selectedIntersection.mohesr_direction}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-rose-300">
                    <strong>Critical Gap:</strong> {selectedIntersection.identified_gap}
                  </div>
                </div>
              </div>

              {/* Technical breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-950/60 border border-slate-800 rounded-lg p-3">
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block mb-1">AI Relevance</span>
                  <p className="text-slate-300 text-[11px]">{selectedIntersection.ai_relevance}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block mb-1">Automation Relevance</span>
                  <p className="text-slate-300 text-[11px]">{selectedIntersection.automation_relevance}</p>
                </div>
                <div>
                  <span className="text-slate-400 uppercase text-[10px] font-bold block mb-1">Data Exchange Readiness</span>
                  <p className="text-slate-300 text-[11px]">{selectedIntersection.data_relevance}</p>
                </div>
              </div>

              {selectedIntersection.pipeline_stage && (
                <div className="border-t border-slate-800 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-emerald-400 font-bold block">{lang === 'ar' ? 'التجربة الريادية الصغرى الموصى بها:' : 'Recommended Minimal Pilot:'}</span>
                    <span className="text-slate-300">{selectedIntersection.pipeline_stage.pilot}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-teal-400 font-bold block">{lang === 'ar' ? 'الأثر القابل للقياس المتوقع:' : 'Expected Measurable Impact:'}</span>
                    <span className="text-slate-300">{selectedIntersection.pipeline_stage.expected_impact}</span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => openIntersectionTopic(selectedIntersection)}
                  className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transition"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'عرض تفاصيل الموضوع وتوليد الخطة الذكية' : 'View Full Details & Generate AI Strategic Plan'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUB-VIEW 2: AUDITED CABINET FEED */}
      {activeSubTab === 'feed' && (
        <div className="space-y-6">
          {/* Feed Filter */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-400 font-semibold">Relevance Category (Section 4):</span>
              {[
                { id: 'ALL', label: 'All' },
                { id: 'C4', label: 'C4 — Immediate Action Signal' },
                { id: 'C3', label: 'C3 — Direct MOHESR' },
                { id: 'C2', label: 'C2 — Indirect MOHESR' },
                { id: 'C1', label: 'C1 — General Gov' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedRelevance(cat.id)}
                  className={`px-2.5 py-1 rounded-md font-medium transition ${
                    selectedRelevance === cat.id
                      ? 'bg-teal-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Cabinet posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <div className="space-y-4">
            {filteredPosts.map(post => (
              <div 
                key={post.cabinet_post_id}
                className="bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-xl p-5 transition space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-teal-300 border border-slate-800">
                      {post.cabinet_post_id}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {post.hierarchy_level}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      post.relevance_classification === 'C4'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : post.relevance_classification === 'C3'
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {post.relevance_classification} • {
                        post.relevance_classification === 'C4' ? 'IMMEDIATE ACTION SIGNAL' :
                        post.relevance_classification === 'C3' ? 'DIRECT MOHESR' :
                        post.relevance_classification === 'C2' ? 'INDIRECT MOHESR' : 'GENERAL GOV'
                      }
                    </span>

                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      post.priority === 'CRITICAL' ? 'bg-rose-600/30 text-rose-300' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {post.priority}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-teal-300/90 font-medium dir-rtl mb-2">
                    {post.title_ar}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {post.text_en}
                  </p>
                </div>

                {/* Signals vs Implications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-amber-400 uppercase text-[10px] font-bold block mb-1">
                      OFFICIAL GOVERNMENT SIGNAL (Section 16 Mandate)
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {post.official_government_signal}
                    </p>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                    <span className="text-teal-400 uppercase text-[10px] font-bold block mb-1">
                      MOHESR IMPLICATION & RESPONSE
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {post.mohesr_implication}
                    </p>
                  </div>
                </div>

                {/* Technology and entities tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-[11px]">
                  <div className="flex flex-wrap gap-1.5">
                    {post.technology_categories.map((cat, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono text-[10px]">{lang === 'ar' ? 'منشورات التعليم العالي ذات الصلة:' : 'Related MOHESR:'}</span>
                    {post.related_mohesr_posts.map((rp, i) => (
                      <span key={i} className="font-mono text-[10px] text-teal-400 bg-teal-950/40 px-1.5 py-0.5 rounded border border-teal-800/40">
                        {rp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => openCabinetPostTopic(post)}
                    className="px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'عرض تفاصيل الخبر وتوليد الخطة الذكية' : 'View Full Details & Generate AI Plan'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 3: CABINET POST -> ACTION PIPELINE (Section 14) */}
      {activeSubTab === 'pipeline' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-indigo-400" />
              <span>Section 14: Cabinet Post → Action Strategic Pipeline</span>
            </h2>
            <p className="text-xs text-slate-400">
              Interactive visualization showing how an official Cabinet directive is translated step-by-step into a concrete, measurable MOHESR pilot initiative without speculative leap.
            </p>

            {/* Select post to see pipeline */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {cabinetPosts.slice(0, 5).map(cp => (
                <button
                  key={cp.cabinet_post_id}
                  onClick={() => setSelectedPipelinePost(cp)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition whitespace-nowrap ${
                    selectedPipelinePost.cabinet_post_id === cp.cabinet_post_id
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cp.cabinet_post_id} • {cp.title.slice(0, 28)}...
                </button>
              ))}
            </div>
          </div>

          {/* 9-Stage Pipeline Flow */}
          <div className="space-y-3">
            {[
              {
                step: '1. CABINET POST (SOURCE)',
                desc: `${selectedPipelinePost.title} (${selectedPipelinePost.cabinet_post_id} - ${selectedPipelinePost.date})`,
                sub: `Hierarchy: ${selectedPipelinePost.hierarchy_level}`,
                color: 'border-slate-700 bg-slate-900'
              },
              {
                step: '2. GOVERNMENT OBJECTIVE',
                desc: selectedPipelinePost.official_government_signal,
                sub: `National Priorities: ${selectedPipelinePost.national_priorities.join(' • ')}`,
                color: 'border-indigo-500/30 bg-slate-900'
              },
              {
                step: '3. MOHESR RELEVANCE (C0-C4)',
                desc: `Classified as ${selectedPipelinePost.relevance_classification}: ${
                  selectedPipelinePost.relevance_classification === 'C4' ? 'Immediate Action Signal' : 'Direct MOHESR Relevance'
                }. Priority: ${selectedPipelinePost.priority}`,
                sub: selectedPipelinePost.priority_reason,
                color: 'border-teal-500/30 bg-slate-900'
              },
              {
                step: '4. TECHNOLOGY IMPLICATION',
                desc: `Identified Technology Stack: ${selectedPipelinePost.technology_categories.join(', ')}`,
                sub: 'Requires sovereign cloud integration, API gateways, and multi-facility synchronization.',
                color: 'border-cyan-500/30 bg-slate-900'
              },
              {
                step: '5. EXISTING MOHESR ACTIVITY',
                desc: `Cross-referenced against verified MOHESR baseline: ${selectedPipelinePost.related_mohesr_posts.join(', ')}`,
                sub: selectedPipelinePost.mohesr_implication,
                color: 'border-amber-500/30 bg-slate-900'
              },
              {
                step: '6. IDENTIFIED GAP',
                desc: 'Departmental silos prevent real-time data visibility across institutions despite verified hardware deployment.',
                sub: 'Need for high-speed middleware and unified inter-agency protocol.',
                color: 'border-rose-500/30 bg-slate-900'
              },
              {
                step: '7. POTENTIAL INITIATIVE',
                desc: `Formulated Initiative: ${
                  selectedPipelinePost.cabinet_post_id.includes('Waiting') || selectedPipelinePost.cabinet_post_id.includes('01-25')
                    ? 'National University Hospital Real-Time Surgical & ICU Telemetry Grid'
                    : selectedPipelinePost.cabinet_post_id.includes('Expatriate') || selectedPipelinePost.cabinet_post_id.includes('08-03')
                    ? 'Unified Consular & SCU FastTrack Foreign Degree Verification Engine'
                    : 'National Academic AI & Sovereign Cloud Allocation Orchestrator'
                }`,
                sub: 'Standardized Project Dossier with AI, Automation, and Data Safeguards.',
                color: 'border-purple-500/30 bg-slate-900'
              },
              {
                step: '8. PILOT DESIGN',
                desc: 'Smallest viable cluster (Ain Shams University Hospitals or SCU Headquarters Engineering Degrees) for 90 days.',
                sub: 'Pre-production validation testing before national gazette rollout.',
                color: 'border-emerald-500/30 bg-slate-900'
              },
              {
                step: '9. EXPECTED MEASURABLE IMPACT',
                desc: 'Quantitative elimination of operational backlog, 45-80% reduction in processing duration, certified data sovereignty.',
                sub: 'Documented return on state investment.',
                color: 'border-teal-500/50 bg-slate-900'
              }
            ].map((st, idx) => (
              <div key={idx} className={`border rounded-xl p-4 ${st.color} shadow-sm relative`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] font-bold text-amber-400">
                    {st.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">STAGE 0{idx + 1}/09</span>
                </div>
                <p className="text-xs text-white font-medium mb-1">{st.desc}</p>
                <p className="text-[11px] text-slate-400">{st.sub}</p>
              </div>
            ))}
          </div>

          {/* Launch AI Generation for Pipeline */}
          <div className="bg-slate-900 border border-indigo-500/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'ar' ? 'توليد خطة استراتيجية للمسار بالذكاء الاصطناعي' : 'Generate Strategic Action Plan for this Directive'}</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'ar'
                  ? 'بناء خطة عمل تفصيلية، خارطة طريق 30-60-90 يوماً، ومصفوفة المخاطر.'
                  : 'Generate complete implementation architecture, 30-60-90 day roadmap, and risk matrix.'}
              </p>
            </div>
            <button
              onClick={() => openCabinetPostTopic(selectedPipelinePost)}
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'توليد الخطة بالذكاء الاصطناعي' : 'Generate AI Plan'}</span>
            </button>
          </div>
        </div>
      )}

      {/* SUB-VIEW 4: CROSS-MINISTRY & DATA INTEGRATION GRID (Section 12 & 13) */}
      {activeSubTab === 'collab' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-1">
              <Share2 className="w-4 h-4 text-emerald-400" />
              <span>Section 12 & 13: Cross-Ministry Collaborations & Data Readiness Grid</span>
            </h2>
            <p className="text-xs text-slate-400">
              Inter-agency integration matrices distinguishing verified existing collaborations from potential strategic alignments, with strict data readiness tags: AVAILABLE, UNKNOWN, or REQUIRES AUTHORIZATION.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborations.map(col => (
              <div 
                key={col.id}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                      {col.id}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      col.collaboration_status === 'Existing Collaboration'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}>
                      {col.collaboration_status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">
                    {col.title}
                  </h3>
                  <p className="text-xs text-teal-300/90 font-medium dir-rtl mb-3">
                    {col.title_ar}
                  </p>

                  <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-xs space-y-2 mb-3">
                    <div>
                      <span className="text-slate-500 uppercase text-[10px] font-bold block">Cabinet Mandate</span>
                      <p className="text-slate-300 text-[11px]">{col.cabinet_mandate}</p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase text-[10px] font-bold block">MOHESR Strategic Role</span>
                      <p className="text-slate-300 text-[11px]">{col.mohesr_role}</p>
                    </div>
                  </div>

                  {/* Data Readiness Tag */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-semibold text-[10px] uppercase">Data Readiness:</span>
                      <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        col.data_status === 'AVAILABLE'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : col.data_status === 'REQUIRES AUTHORIZATION'
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      }`}>
                        {col.data_status}
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      <strong>Exchange:</strong> {col.data_exchange}
                    </p>
                    <p className="text-slate-400 text-[10px] pt-1">
                      <strong>Privacy / Security:</strong> {col.security_privacy_considerations}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 mt-3 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-teal-400 uppercase font-bold block mb-0.5">
                      Joint Platform Candidate:
                    </span>
                    <p className="text-xs font-bold text-white">
                      {col.joint_platform_candidate}
                    </p>
                  </div>
                  <button
                    onClick={() => openCollabTopic(col)}
                    className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow transition whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'الخطة الذكية' : 'AI Plan'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-VIEW 5: GOVERNMENT VS ANALYST INITIATIVES (Section 15, 24 & 28) */}
      {activeSubTab === 'initiatives' && (
        <div className="space-y-8">
          {/* Category A: Government-Derived Opportunities */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Section 28A: Government-Derived Opportunities (Mandatory Official Evidence)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Directly substantiated by explicit Cabinet decrees and documented MOHESR commitments.
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono">
                {derivedInitiatives.length} High-Confidence Initiatives
              </span>
            </div>

            <div className="space-y-4">
              {derivedInitiatives.map(init => (
                <div 
                  key={init.initiative_id}
                  className="bg-slate-900 border border-emerald-500/30 rounded-xl p-5 shadow-lg space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-emerald-400 border border-slate-800">
                          {init.initiative_id}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-bold uppercase">
                          OFFICIAL GOVERNMENT DERIVED
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          Evidence Level: {init.evidence_level}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {init.initiative_name}
                      </h3>
                      <p className="text-xs text-teal-400/90 font-medium dir-rtl">
                        {init.initiative_name_ar}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 block mb-1">
                        PRIORITY: {init.priority}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Status: {init.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual Evidence Box */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <div>
                      <span className="text-amber-400 font-bold block mb-1">CABINET OFFICIAL EVIDENCE</span>
                      <span className="text-[10px] font-mono text-slate-400 block mb-1">
                        {init.government_evidence.cabinet_post_id} ({init.government_evidence.cabinet_date})
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {init.government_evidence.cabinet_statement}
                      </p>
                    </div>

                    <div>
                      <span className="text-teal-400 font-bold block mb-1">MOHESR BASELINE EVIDENCE</span>
                      <span className="text-[10px] font-mono text-slate-400 block mb-1">
                        {init.mohesr_evidence.mohesr_post_id} ({init.mohesr_evidence.mohesr_date})
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {init.mohesr_evidence.mohesr_statement}
                      </p>
                    </div>
                  </div>

                  {/* Solution & Architecture */}
                  <div className="text-xs space-y-2 text-slate-300">
                    <p><strong>Operational Problem:</strong> {init.problem}</p>
                    <p><strong>Proposed Solution:</strong> {init.proposed_solution}</p>
                  </div>

                  {/* AI & Automation Components */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950/70 p-3 rounded-lg border border-purple-500/20">
                      <span className="text-purple-400 font-bold uppercase text-[10px] block mb-1 flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" /> AI Component ({init.ai_component.is_inferred ? 'Analyst Inferred' : 'Explicit'})
                      </span>
                      <p className="text-slate-300 text-[11px]">{init.ai_component.description}</p>
                    </div>

                    <div className="bg-slate-950/70 p-3 rounded-lg border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold uppercase text-[10px] block mb-1 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" /> Automation Component
                      </span>
                      <p className="text-slate-300 text-[11px]">{init.automation_component.description}</p>
                    </div>
                  </div>

                  {/* Pilot & Impact */}
                  <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-teal-400 font-bold block text-[11px]">{lang === 'ar' ? 'التجربة الريادية الموصى بها (90 يوماً):' : 'Recommended 90-Day Pilot:'}</span>
                      <span className="text-slate-300 text-[11px]">{init.pilot}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-emerald-400 font-bold block text-[11px]">{lang === 'ar' ? 'نطاق التوسع:' : 'Scalability Scope:'}</span>
                        <span className="text-slate-300 text-[11px]">{init.scalability}</span>
                      </div>
                      <button
                        onClick={() => openInitiativeTopic(init)}
                        className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Action Plan'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category B: Analyst-Proposed Opportunities */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Section 28B: Analyst-Proposed Opportunities (Strategic Synthesis)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Generated through strategic cross-referencing and trend extrapolation. (Clearly segregated from official decrees).
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono">
                {proposedInitiatives.length} Exploratory Initiatives
              </span>
            </div>

            <div className="space-y-4">
              {proposedInitiatives.map(init => (
                <div 
                  key={init.initiative_id}
                  className="bg-slate-900 border border-purple-500/30 rounded-xl p-5 shadow-lg space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-950 text-purple-400 border border-slate-800">
                          {init.initiative_id}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-bold uppercase">
                          ANALYST STRATEGIC PROPOSAL
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          Evidence Level: {init.evidence_level}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {init.initiative_name}
                      </h3>
                      <p className="text-xs text-purple-300/90 font-medium dir-rtl">
                        {init.initiative_name_ar}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 block mb-1">
                        PRIORITY: {init.priority}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Status: {init.status}
                      </span>
                    </div>
                  </div>

                  <div className="text-xs space-y-2 text-slate-300">
                    <p><strong>Rationale & Cross-Reference:</strong> {init.cross_reference_explanation}</p>
                    <p><strong>Target Problem:</strong> {init.problem}</p>
                    <p><strong>Proposed Solution:</strong> {init.proposed_solution}</p>
                  </div>

                  {/* Pilot & Feasibility */}
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-purple-400 font-bold block text-[11px]">{lang === 'ar' ? 'التجربة الاستكشافية المقترحة:' : 'Proposed Experimental Pilot:'}</span>
                      <span className="text-slate-300 text-[11px]">{init.pilot}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 font-mono text-[10px]">Confidence: {init.confidence}</span>
                      <button
                        onClick={() => openInitiativeTopic(init)}
                        className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{lang === 'ar' ? 'دراسة الجدوى الذكية' : 'AI Feasibility Study'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 6: TRENDS & TIMELINES (Section 9 & 22) */}
      {activeSubTab === 'trends' && (
        <div className="space-y-8">
          {/* Government-wide trends */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Section 9: Government-Wide Technology Signals & MOHESR Exposure</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trends.map(tr => (
                <div key={tr.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-cyan-400 font-bold">{tr.id}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {tr.priority} PRIORITY
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white">{tr.trend_name}</h3>
                    <p className="text-xs text-cyan-300/80 font-medium dir-rtl mb-2">{tr.trend_name_ar}</p>

                    <div className="bg-slate-950 p-3 rounded-lg text-xs space-y-2 text-slate-300 border border-slate-800/80">
                      <div>
                        <span className="text-slate-500 uppercase text-[10px] font-bold block">Government Signal</span>
                        <p className="text-[11px]">{tr.government_signal}</p>
                      </div>

                      <div>
                        <span className="text-amber-400 uppercase text-[10px] font-bold block">MOHESR Exposure & Risk</span>
                        <p className="text-[11px]">{tr.mohesr_exposure}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-800 text-teal-300">
                        <span className="text-teal-400 uppercase text-[10px] font-bold block">Proactive Opportunity</span>
                        <p className="text-[11px] font-medium">{tr.proactive_opportunity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">{lang === 'ar' ? 'تحليل الأثر الاستراتيجي' : 'Strategic Impact'}</span>
                    <button
                      onClick={() => openTrendTopic(tr)}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'تحليل الأثر بالذكاء الاصطناعي' : 'AI Impact Plan'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 22: Historical Timelines */}
          <div className="space-y-4 pt-6 border-t border-slate-800">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Section 22: Government vs. MOHESR Historical Timelines & Intersection Milestones</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Government Priority Timeline */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <span className="text-amber-400 font-bold uppercase text-[11px] block border-b border-slate-800 pb-2">
                  Government Priority Timeline
                </span>
                <div className="space-y-2.5">
                  {timelines.government_priorities.map((item, i) => (
                    <div key={i} className="p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1 font-mono">
                        <span>{item.year}</span>
                        <span className="text-amber-400 font-bold">{item.level}</span>
                      </div>
                      <p className="text-slate-200 text-[11px] font-medium">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOHESR Priority Timeline */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <span className="text-teal-400 font-bold uppercase text-[11px] block border-b border-slate-800 pb-2">
                  MOHESR Priority Timeline
                </span>
                <div className="space-y-2.5">
                  {timelines.mohesr_priorities.map((item, i) => (
                    <div key={i} className="p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1 font-mono">
                        <span>{item.year}</span>
                        <span className="text-teal-400 font-bold">{item.level}</span>
                      </div>
                      <p className="text-slate-200 text-[11px] font-medium">{item.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intersection Milestones */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
                <span className="text-indigo-400 font-bold uppercase text-[11px] block border-b border-slate-800 pb-2">
                  Strategic Intersection Points
                </span>
                <div className="space-y-2.5">
                  {timelines.intersection_milestones.map((item, i) => (
                    <div key={i} className="p-2.5 rounded bg-slate-950 border border-slate-800">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1 font-mono">
                        <span>{item.date}</span>
                        <span className="text-indigo-300 font-bold">{item.type}</span>
                      </div>
                      <p className="text-slate-200 text-[11px] font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-VIEW 7: CROSS-GOVERNMENT BRIEF (Section 19 & 28) */}
      {activeSubTab === 'report' && (
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  SECTION 19 STANDARDIZED FORMAT
                </span>
                <span className="text-xs text-slate-400 font-mono">CYCLE: 2026-09-18 • 08:30 AM EET</span>
              </div>
              <h2 className="text-xl font-extrabold text-white tracking-tight">
                {lang === 'ar'
                  ? 'التقرير الاستخباراتي المشترك: مجلس الوزراء ووزارة التعليم العالي'
                  : 'Cabinet → MOHESR Daily Strategic Intelligence Brief'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Standardized Intelligence Synthesis complying with Section 19 and Section 28 (Separation of Official Directives from Strategic Proposals).
              </p>
            </div>

            {/* 1. Executive Summary */}
            <section className="space-y-2">
              <h3 className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                1. Executive Summary (10 Strategic Findings)
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                <li><strong>Cabinet Cloud Directive:</strong> Prime Minister mandated the conclusion of local ministerial server rooms and direct migration to the New Capital National Cloud Center (P1).</li>
                <li><strong>Surgical Waiting Lists Crisis:</strong> University hospitals absorb over 60% of critical surgeries; Cabinet demands immediate real-time bed integration with the Ministry of Health.</li>
                <li><strong>Expatriate Equivalency Mandate:</strong> Cabinet Supreme Committee for Expatriates ratified the 15-day SLA for foreign degree reviews, requiring consular digital APIs.</li>
                <li><strong>National AI Strategy Phase 2:</strong> Cabinet allocated specialized R&D funding for 20 universities to act as national AI innovation and talent incubators.</li>
                <li><strong>Industrial Golden Licenses:</strong> Prime Minister issued binding instructions to open university testing laboratories to Golden License factories.</li>
                <li><strong>Paperless Governance Ban:</strong> Complete prohibition of paper correspondence between ministries in the New Administrative Capital entered into force.</li>
                <li><strong>Technological Universities Expansion:</strong> Presidential directive instructing the establishment of 17 new technological universities with digital simulation labs.</li>
                <li><strong>EG-CERT Cybersecurity Enforcement:</strong> Mandatory air-gap and encryption standards enforced for university electronic exam centers and hospital EHRs.</li>
                <li><strong>Digital Identity Degree Authentication:</strong> Cabinet directive to integrate university graduate registers into Digital Egypt using National IDs to stop fraud.</li>
                <li><strong>Energy Rationing Target:</strong> Mandatory 25% energy reduction across university campuses through smart IoT metering and rooftop solar installations.</li>
              </ul>
            </section>

            {/* 2. New Cabinet Signals Table */}
            <section className="space-y-2">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                2. Audited Cabinet Signals Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300 border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950 text-[10px] text-slate-400 uppercase font-mono">
                      <th className="py-2 px-3">Date</th>
                      <th className="py-2 px-3">Government Signal</th>
                      <th className="py-2 px-3">MOHESR Relevance</th>
                      <th className="py-2 px-3">Tech</th>
                      <th className="py-2 px-3 text-center">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-[11px]">
                    <tr>
                      <td className="py-2 px-3 font-mono text-slate-400">2026-02-10</td>
                      <td className="py-2 px-3 text-white font-medium">National Cloud Migration & AI Adoption</td>
                      <td className="py-2 px-3 text-rose-300">C4 — Immediate Action</td>
                      <td className="py-2 px-3 font-mono">Cloud / AI</td>
                      <td className="py-2 px-3 text-center text-rose-400 font-bold">CRITICAL</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-slate-400">2026-01-25</td>
                      <td className="py-2 px-3 text-white font-medium">Surgical Waiting Lists Inter-Hospital Grid</td>
                      <td className="py-2 px-3 text-rose-300">C4 — Immediate Action</td>
                      <td className="py-2 px-3 font-mono">Health EHR</td>
                      <td className="py-2 px-3 text-center text-rose-400 font-bold">CRITICAL</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-slate-400">2025-08-03</td>
                      <td className="py-2 px-3 text-white font-medium">15-Day Foreign Degree Verification Window</td>
                      <td className="py-2 px-3 text-rose-300">C4 — Immediate Action</td>
                      <td className="py-2 px-3 font-mono">OCR / APIs</td>
                      <td className="py-2 px-3 text-center text-rose-400 font-bold">CRITICAL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Recommended Concrete Actions */}
            <section className="bg-slate-950 p-4 rounded-xl border border-teal-500/30 space-y-2 text-xs">
              <h3 className="font-bold text-teal-400 uppercase tracking-wider text-xs">
                Recommended Immediate Preparation Actions for MOHESR
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-[11px]">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <strong className="text-white block mb-1">1. Health Telemetry Endpoint Audit:</strong>
                  Form a joint technical committee with Supreme Council of University Hospitals IT to verify FHIR/REST endpoints on active MedNet servers.
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <strong className="text-white block mb-1">2. Consular Verification Mock Test:</strong>
                  Request test API access to Ministry of Foreign Affairs attestation portal to prototype automated degree certificate matching.
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
