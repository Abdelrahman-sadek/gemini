import React, { useState } from 'react';
import { PostRecord } from '../types';
import { 
  Database, 
  Search, 
  ExternalLink, 
  Calendar, 
  UserCheck, 
  Tag, 
  Cpu, 
  Layers, 
  Link as LinkIcon, 
  Filter,
  CheckCircle,
  Building,
  Sparkles
} from 'lucide-react';
import { TopicItem } from './TopicDetailModal';

interface KnowledgeBaseViewProps {
  posts: PostRecord[];
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}

export const KnowledgeBaseView: React.FC<KnowledgeBaseViewProps> = ({ posts, lang, onSelectTopic }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hierarchyFilter, setHierarchyFilter] = useState('ALL');
  const [techFilter, setTechFilter] = useState('ALL');
  const [evidenceFilter, setEvidenceFilter] = useState('ALL');
  const [aiFilter, setAiFilter] = useState('ALL');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(posts[0]?.post_id || null);

  const openPostTopic = (post: PostRecord) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: post.post_id,
      title: post.post_title,
      title_ar: post.post_title,
      type: 'cabinet_post',
      priority: post.hierarchy_level.includes('Prime Minister') ? 'CRITICAL' : 'HIGH',
      hierarchy: post.hierarchy_level,
      confidence: post.confidence,
      evidence_level: `Level ${post.evidence_level}`,
      date: post.publication_date,
      government_signal: post.post_text_en,
      mohesr_implication: post.operational_problems.join('; '),
      gap: post.operational_problems[0] || 'Modernization and digitization requirement',
      solution: `Develop targeted MOHESR digital initiative supporting ${post.post_title}`,
      pilot: 'Deploy 90-day multi-university pilot leveraging MOHESR unified cloud and digital identity',
      impact: 'Accelerate administrative integration, reduce manual processing, ensure governance compliance',
      tech_categories: post.technology_topics,
      entities: [...(post.mentioned_entities || []), ...(post.mentioned_people || [])],
      data_requirements: 'National higher education data exchange API and verified credentials repository',
      summary_en: post.post_text_en,
      summary_ar: post.post_text_ar
    });
  };

  const filteredPosts = posts.filter(post => {
    if (hierarchyFilter !== 'ALL' && !post.hierarchy_level.includes(hierarchyFilter)) return false;
    if (techFilter !== 'ALL' && !post.technology_relevance.startsWith(techFilter)) return false;
    if (evidenceFilter !== 'ALL' && post.evidence_level !== evidenceFilter) return false;
    if (aiFilter !== 'ALL' && post.ai_classification !== aiFilter) return false;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchTitle = post.post_title.toLowerCase().includes(term);
      const matchTextAr = post.post_text_ar.includes(term);
      const matchTextEn = post.post_text_en.toLowerCase().includes(term);
      const matchPeople = post.mentioned_people.some(p => p.toLowerCase().includes(term));
      const matchEntities = post.mentioned_entities.some(e => e.toLowerCase().includes(term));
      if (!matchTitle && !matchTextAr && !matchTextEn && !matchPeople && !matchEntities) return false;
    }
    return true;
  });

  const selectedPost = posts.find(p => p.post_id === selectedPostId) || filteredPosts[0];

  return (
    <div className="space-y-6">
      {/* Knowledge Base Header Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">
              {lang === 'ar' ? 'المستودع المعرفي للاتصال والقرارات الرسمية' : 'Official Historical Post Knowledge Base'}
            </h2>
            <p className="text-xs text-slate-400">
              Audited Historical Timeline • Primary Source: <span className="text-teal-400 font-mono">https://www.facebook.com/MOHESREGYPT</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search keywords, decrees, entities..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-9 pr-3 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 w-full sm:w-72"
          />
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <label className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Hierarchy Level</label>
          <select
            value={hierarchyFilter}
            onChange={e => setHierarchyFilter(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Levels (1 - 4)</option>
            <option value="LEVEL 1">Level 1 — Presidential</option>
            <option value="LEVEL 2">Level 2 — Ministerial</option>
            <option value="LEVEL 3">Level 3 — Strategy</option>
            <option value="LEVEL 4">Level 4 — Operational</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Technology Filter</label>
          <select
            value={techFilter}
            onChange={e => setTechFilter(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Categories (A - D)</option>
            <option value="A. DIRECT">A. Direct Tech</option>
            <option value="B. INDIRECT">B. Indirect Tech</option>
            <option value="C. STRATEGIC">C. Strategic Tech</option>
            <option value="D. LOW">D. Low Relevance</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">Evidence Level</label>
          <select
            value={evidenceFilter}
            onChange={e => setEvidenceFilter(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All Evidence (E1 - E5)</option>
            <option value="E1">E1 — Explicit Directive</option>
            <option value="E2">E2 — Explicit Initiative</option>
            <option value="E3">E3 — Repeated Theme</option>
            <option value="E4">E4 — Operational Opportunity</option>
            <option value="E5">E5 — Strategic Hypothesis</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 uppercase font-semibold block mb-1">AI Classification</label>
          <select
            value={aiFilter}
            onChange={e => setAiFilter(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2 py-1.5 text-slate-200 focus:outline-none focus:border-teal-500"
          >
            <option value="ALL">All AI Types</option>
            <option value="EXPLICIT_AI">Explicit AI Mention</option>
            <option value="INFERRED_AI">Inferred AI Opportunity</option>
            <option value="NONE">No AI Component</option>
          </select>
        </div>
      </div>

      {/* Two Column Layout: List & Active Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Posts List Column */}
        <div className="lg:col-span-5 space-y-3 max-h-[800px] overflow-y-auto pr-1">
          <div className="text-xs text-slate-400 px-1 flex justify-between items-center">
            <span>Showing {filteredPosts.length} indexed records</span>
            <span className="text-[11px] text-teal-400 font-mono">100% Verified Posts</span>
          </div>

          {filteredPosts.map(post => {
            const isSelected = selectedPost?.post_id === post.post_id;
            const isPresidential = post.hierarchy_level.includes('LEVEL 1');

            return (
              <div
                key={post.post_id}
                onClick={() => setSelectedPostId(post.post_id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'bg-slate-800 border-teal-500 shadow-md shadow-teal-950'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-teal-400 font-semibold">{post.post_id}</span>
                    <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                      isPresidential 
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30' 
                        : 'bg-teal-500/10 text-teal-300 border border-teal-500/30'
                    }`}>
                      {isPresidential ? 'L1: PRESIDENTIAL' : 'L2: MINISTERIAL'}
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono text-[10px] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publication_date}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-slate-100 line-clamp-2 mb-1.5 leading-snug">
                  {post.post_title}
                </h4>

                <div className="flex flex-wrap items-center gap-1 mt-2">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                    Evidence: <strong>{post.evidence_level}</strong>
                  </span>
                  {post.ai_classification === 'EXPLICIT_AI' && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                      Explicit AI
                    </span>
                  )}
                  {post.ai_classification === 'INFERRED_AI' && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40">
                      Inferred AI
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-slate-800/60">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {lang === 'ar' ? 'المعرف:' : 'ID:'} {post.post_id}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openPostTopic(post);
                    }}
                    className="px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] flex items-center gap-1 transition border border-teal-500/20"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Post Dossier Detail Column */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5 sticky top-24">
          {selectedPost ? (
            <>
              {/* Dossier Header */}
              <div className="border-b border-slate-800 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                      {selectedPost.post_id}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {selectedPost.hierarchy_level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openPostTopic(selectedPost)}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-950 font-bold bg-teal-400 hover:bg-teal-300 px-3 py-1.5 rounded-lg transition shadow"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'Generate AI Plan'}</span>
                    </button>
                    <a
                      href={selectedPost.post_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 bg-teal-950/40 border border-teal-500/30 px-2.5 py-1.5 rounded-lg transition"
                    >
                      <span>{lang === 'ar' ? 'المنشور الأصلي' : 'Official Post'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mt-2 leading-relaxed">
                  {selectedPost.post_title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
                  <span>Published: <strong className="text-slate-200">{selectedPost.publication_date}</strong></span>
                  <span>Indexed: <strong className="text-slate-200">{selectedPost.collection_date}</strong></span>
                  <span>Confidence: <strong className="text-emerald-400">{selectedPost.confidence}</strong></span>
                </div>
              </div>

              {/* Original Official Arabic Text */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-4">
                <span className="text-[10px] text-teal-400 uppercase font-bold tracking-wider block mb-2">
                  OFFICIAL COMMUNIQUE (النص الرسمي الموثق)
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-arabic dir-rtl">
                  {selectedPost.post_text_ar}
                </p>
              </div>

              {/* English Analytical Translation */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-4">
                <span className="text-[10px] text-indigo-400 uppercase font-bold tracking-wider block mb-2">
                  VERIFIED ENGLISH STRATEGIC TRANSLATION
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedPost.post_text_en}
                </p>
              </div>

              {/* Key Metadata Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1.5 font-medium">
                    <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Mentioned Officials</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedPost.mentioned_people.map((p, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1.5 font-medium">
                    <Building className="w-3.5 h-3.5 text-teal-400" />
                    <span>Mentioned Entities</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {selectedPost.mentioned_entities.map((e, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology & Operational Problems */}
              <div className="space-y-3">
                <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 text-xs">
                  <span className="text-slate-400 block mb-1 text-[11px] font-semibold">Technology Topics & Keywords</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPost.technology_topics.map((t, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-teal-950/40 text-teal-300 border border-teal-800/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 text-xs">
                  <span className="text-rose-400 block mb-1 text-[11px] font-semibold">Underlying Operational Bottlenecks Detected</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    {selectedPost.operational_problems.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Packaged Initiatives */}
              {selectedPost.related_initiatives.length > 0 && (
                <div className="p-3 rounded-lg bg-teal-950/20 border border-teal-500/30 text-xs">
                  <span className="text-teal-400 font-semibold block mb-1 text-[11px]">
                    {lang === 'ar' ? 'المبادرة المرتبطة المقترحة:' : 'Connected Initiative Candidate:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPost.related_initiatives.map((ri, i) => (
                      <span key={i} className="font-mono px-2 py-0.5 rounded bg-teal-900/60 text-white font-bold">
                        {ri}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Strategic Action Generator Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-teal-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    <span>{lang === 'ar' ? 'تحليل التوجيه وتوليد التوصيات الذكية' : 'AI Directive Analysis & Recommendations'}</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {lang === 'ar' 
                      ? 'استخراج خطة تنفيذ استباقية لوزارة التعليم العالي، وتحديد المشروعات والمبادرات المشتركة.' 
                      : 'Generate proactive ministry implementation plan, joint projects, and roadmap.'}
                  </p>
                </div>
                <button
                  onClick={() => openPostTopic(selectedPost)}
                  className="px-3.5 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'توليد الخطة بالذكاء الاصطناعي' : 'Generate AI Plan'}</span>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20 text-slate-500 text-xs">
              No post matches the current filter criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
