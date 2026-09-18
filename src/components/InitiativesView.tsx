import React, { useState } from 'react';
import { Initiative } from '../types';
import { 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Zap, 
  Layers, 
  ExternalLink, 
  Building2, 
  Users, 
  Calendar, 
  Filter, 
  Search,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface InitiativesViewProps {
  initiatives: Initiative[];
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}
import { TopicItem } from './TopicDetailModal';

export const InitiativesView: React.FC<InitiativesViewProps> = ({ initiatives, lang, onSelectTopic }) => {
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'ACTIONABLE_OPPORTUNITY' | 'WORTH_INVESTIGATING'>('ALL');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(initiatives[0]?.id || null);

  const openTopic = (init: Initiative) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: init.id,
      title: init.name,
      title_ar: init.arabic_name,
      type: 'initiative',
      priority: init.category === 'ACTIONABLE_OPPORTUNITY' ? 'CRITICAL' : 'HIGH',
      hierarchy: init.category,
      confidence: init.confidence,
      evidence_level: `Level ${init.evidence[0]?.evidence_level || '1'}`,
      government_signal: init.evidence[0]?.relevant_statement || init.problem,
      mohesr_implication: init.problem,
      gap: init.problem,
      solution: init.proposed_solution,
      pilot: init.potential_pilot,
      impact: init.automation_component?.expected_benefit,
      tech_categories: init.main_features,
      ai_component: `${init.ai_component.what_ai_does} - ${init.ai_component.why_appropriate}`,
      automation_component: `${init.automation_component.candidate_process} - ${init.automation_component.automation_opportunity}`,
      data_requirements: init.dependencies.data,
      summary_en: `${init.problem}\n\nProposed Solution: ${init.proposed_solution}`,
      summary_ar: `${init.problem}\n\nالحل الرقمي المقترح: ${init.proposed_solution}`
    });
  };

  const filtered = initiatives.filter(init => {
    if (filterCategory !== 'ALL' && init.category !== filterCategory) return false;
    if (filterDifficulty !== 'ALL' && init.implementation_difficulty !== filterDifficulty) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchName = init.name.toLowerCase().includes(term) || init.arabic_name.includes(term);
      const matchProblem = init.problem.toLowerCase().includes(term);
      const matchEntities = init.departments_entities.some(e => e.toLowerCase().includes(term));
      if (!matchName && !matchProblem && !matchEntities) return false;
    }
    return true;
  });

  const actionableCount = initiatives.filter(i => i.category === 'ACTIONABLE_OPPORTUNITY').length;
  const investigatingCount = initiatives.filter(i => i.category === 'WORTH_INVESTIGATING').length;

  return (
    <div className="space-y-6">
      {/* Strategic Framing Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-teal-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                Core Deliverable: Sections 8, 28 & 30
              </span>
              <span className="text-xs text-slate-400">
                Systematic Discovery Engine
              </span>
            </div>
            <h2 className="text-lg font-bold text-white">
              {lang === 'ar'
                ? 'حزمة المبادرات وفرص التحول الرقمي المؤصلة بالأدلة الرسمية'
                : 'Evidence-Grounded Digital Transformation & AI Initiatives'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-3xl">
              {lang === 'ar'
                ? 'كل مبادرة هنا مستنبطة مباشرة من قرارات وبيانات الوزارة مع التمييز الدقيق بين الإشارة الرسمية (Official Signal) والاستنباط التحليلي (Analyst Inference).'
                : 'Each initiative is derived directly from official MOHESR communications with rigorous distinction between Official Signal and Analytical Inference.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-950/80 border border-teal-500/20 rounded-lg p-2.5 text-center min-w-[120px]">
              <div className="text-xl font-bold text-teal-400 font-mono">{actionableCount}</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Actionable Now</div>
            </div>
            <div className="bg-slate-950/80 border border-indigo-500/20 rounded-lg p-2.5 text-center min-w-[120px]">
              <div className="text-xl font-bold text-indigo-400 font-mono">{investigatingCount}</div>
              <div className="text-[11px] text-slate-400 uppercase font-medium">Worth Study</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterCategory('ALL')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              filterCategory === 'ALL'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Initiatives ({initiatives.length})
          </button>
          <button
            onClick={() => setFilterCategory('ACTIONABLE_OPPORTUNITY')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
              filterCategory === 'ACTIONABLE_OPPORTUNITY'
                ? 'bg-teal-600 text-white shadow-sm shadow-teal-700/50'
                : 'bg-slate-800 text-teal-400 hover:bg-slate-700'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Actionable Opportunities ({actionableCount})
          </button>
          <button
            onClick={() => setFilterCategory('WORTH_INVESTIGATING')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
              filterCategory === 'WORTH_INVESTIGATING'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-700/50'
                : 'bg-slate-800 text-indigo-300 hover:bg-slate-700'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            Worth Investigating ({investigatingCount})
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search initiatives, entities..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 w-48 sm:w-64"
            />
          </div>

          <select
            value={filterDifficulty}
            onChange={e => setFilterDifficulty(e.target.value)}
            className="text-xs bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-300 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Difficulties</option>
            <option value="Low">Low Difficulty</option>
            <option value="Medium">Medium Difficulty</option>
            <option value="High">High Difficulty</option>
          </select>
        </div>
      </div>

      {/* Initiatives Cards */}
      <div className="space-y-4">
        {filtered.map(init => {
          const isExpanded = expandedId === init.id;
          const isActionable = init.category === 'ACTIONABLE_OPPORTUNITY';

          return (
            <div
              key={init.id}
              className={`border rounded-xl transition-all duration-200 overflow-hidden bg-slate-900 ${
                isActionable
                  ? 'border-teal-500/30 hover:border-teal-400/50 shadow-sm shadow-teal-950'
                  : 'border-indigo-500/30 hover:border-indigo-400/50 shadow-sm shadow-indigo-950'
              }`}
            >
              {/* Card Header (Summary) */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : init.id)}
                className="p-5 cursor-pointer select-none hover:bg-slate-850 transition flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {init.id}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1 ${
                        isActionable
                          ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                          : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                      }`}
                    >
                      {isActionable ? (
                        <>
                          <CheckCircle2 className="w-3 h-3" /> ACTIONABLE DIGITAL TRANSFORMATION OPPORTUNITY
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3" /> INITIATIVE WORTH INVESTIGATING FURTHER
                        </>
                      )}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Difficulty: <strong className="text-white">{init.implementation_difficulty}</strong>
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Confidence: <strong className="text-teal-300">{init.confidence}</strong>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {lang === 'ar' ? init.arabic_name : init.name}
                  </h3>
                  {lang !== 'ar' && (
                    <p className="text-xs text-teal-400/90 font-medium mt-0.5 dir-rtl">
                      {init.arabic_name}
                    </p>
                  )}
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {init.problem}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openTopic(init);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'الخطة الذكية' : 'AI Plan'}</span>
                  </button>

                  <div className="text-right hidden sm:block">
                    <span className="text-[11px] text-slate-500 block uppercase font-mono">Pilot Timeline</span>
                    <span className="text-xs font-semibold text-slate-300">30 - 90 Days</span>
                  </div>
                  <button 
                    onClick={() => setExpandedId(isExpanded ? null : init.id)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Card Expanded Detail (The Complete 11 Dimensions) */}
              {isExpanded && (
                <div className="border-t border-slate-800/80 p-5 bg-slate-950/60 space-y-6">
                  {/* Problem & Evidence Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2 text-rose-400 font-semibold text-xs uppercase tracking-wider">
                        <AlertCircle className="w-4 h-4" />
                        <span>Problem Statement (Operational Pain)</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {init.problem}
                      </p>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2 text-teal-400 font-semibold text-xs uppercase tracking-wider">
                        <Layers className="w-4 h-4" />
                        <span>Documented Evidence & Source</span>
                      </div>
                      {init.evidence.map((ev, idx) => (
                        <div key={idx} className="text-xs space-y-1">
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span className="font-mono text-teal-400">{ev.post_id} ({ev.post_date})</span>
                            <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono text-[10px] border border-amber-500/20">
                              Level {ev.evidence_level}
                            </span>
                          </div>
                          <p className="text-slate-200 italic font-serif">
                            "{ev.relevant_statement}"
                          </p>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                            <span>Source: {ev.source}</span>
                            <a
                              href={ev.post_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                            >
                              Post URL <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proposed Practical Solution */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4" />
                      <span>Proposed Practical Solution</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {init.proposed_solution}
                    </p>

                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                      <div>
                        <span className="text-[11px] text-slate-500 uppercase font-semibold block mb-1">Target Users:</span>
                        <div className="flex flex-wrap gap-1">
                          {init.users.map((u, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                              {u}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 uppercase font-semibold block mb-1">Participating Entities:</span>
                        <div className="flex flex-wrap gap-1">
                          {init.departments_entities.map((d, i) => (
                            <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-teal-300">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Features */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block mb-2">Core System Features</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                      {init.main_features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI Component vs Automation Component (Explicit Distinction) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* AI Component */}
                    <div className="bg-slate-900/90 border border-purple-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-purple-400 font-semibold text-xs uppercase tracking-wider">
                          <Cpu className="w-4 h-4" />
                          <span>AI Component Analysis</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          init.ai_component.is_inferred 
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                            : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                        }`}>
                          {init.ai_component.is_inferred ? 'ANALYST INFERRED AI' : 'OFFICIAL SIGNAL (EXPLICIT)'}
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <strong className="text-purple-300 block text-[11px]">What AI Does:</strong>
                          <p className="text-slate-300">{init.ai_component.what_ai_does}</p>
                        </div>
                        <div>
                          <strong className="text-purple-300 block text-[11px]">Why Appropriate:</strong>
                          <p className="text-slate-300">{init.ai_component.why_appropriate}</p>
                        </div>
                        <div>
                          <strong className="text-purple-300 block text-[11px]">Required Training Data:</strong>
                          <p className="text-slate-400 font-mono text-[11px]">{init.ai_component.data_needed}</p>
                        </div>
                        <div className="text-[11px] text-slate-400 pt-1">
                          Role: <span className="font-semibold text-white">{init.ai_component.is_essential ? 'Essential Core' : 'Value-Add Modular Component'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Automation Component */}
                    <div className="bg-slate-900/90 border border-emerald-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                          <Zap className="w-4 h-4" />
                          <span>Process Automation Filter</span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          10-STEP MAPPING
                        </span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div>
                          <strong className="text-emerald-300 block text-[11px]">Target Process:</strong>
                          <p className="text-slate-300">{init.automation_component.candidate_process}</p>
                        </div>
                        <div>
                          <strong className="text-rose-400 block text-[11px]">Identified Bottleneck:</strong>
                          <p className="text-slate-300">{init.automation_component.bottleneck}</p>
                        </div>
                        <div>
                          <strong className="text-emerald-300 block text-[11px]">Automation Opportunity:</strong>
                          <p className="text-slate-300">{init.automation_component.automation_opportunity}</p>
                        </div>
                        <div>
                          <strong className="text-teal-300 block text-[11px]">Quantifiable Benefit:</strong>
                          <p className="text-slate-200 font-semibold">{init.automation_component.expected_benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Difficulty & Pilot */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Difficulty Assessment</span>
                      <div className="text-sm font-bold text-white mb-1">{init.implementation_difficulty}</div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{init.difficulty_reason}</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Confidence Score</span>
                      <div className="text-sm font-bold text-teal-400 mb-1">{init.confidence}</div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">{init.confidence_reason}</p>
                    </div>

                    <div className="bg-slate-900 border border-teal-500/30 rounded-lg p-3 bg-teal-950/20">
                      <span className="text-[10px] text-teal-400 uppercase font-bold block mb-1">Recommended Pilot</span>
                      <p className="text-slate-200 text-[11px] font-medium leading-relaxed">{init.potential_pilot}</p>
                    </div>
                  </div>

                  {/* System Dependencies */}
                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block mb-2">Technical & Institutional Dependencies</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500 block">Data Sources:</span>
                        <span className="text-slate-300">{init.dependencies.data}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Regulations:</span>
                        <span className="text-slate-300">{init.dependencies.regulations}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Integrations:</span>
                        <span className="text-slate-300">{init.dependencies.integrations}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Infrastructure:</span>
                        <span className="text-slate-300">{init.dependencies.infrastructure}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Security:</span>
                        <span className="text-slate-300">{init.dependencies.security}</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Strategic Action Generator Banner */}
                  <div className="bg-slate-900 border border-teal-500/40 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-teal-400" />
                        <span>{lang === 'ar' ? 'توليد خارطة الطريق الهندسية والتنفيذية' : 'Generate Full AI Architecture & Roadmap'}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {lang === 'ar'
                          ? 'استخدام وكيل الذكاء الاصطناعي لتوليد خطة 30-60-90 يوماً، ومؤشرات الأداء، وبنية التكامل.'
                          : 'Use AI Agent to generate technical architecture, 30-60-90 day pilot, and KPIs.'}
                      </p>
                    </div>
                    <button
                      onClick={() => openTopic(init)}
                      className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'توليد الخطة الذكية الكاملة' : 'Generate Complete AI Plan'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
