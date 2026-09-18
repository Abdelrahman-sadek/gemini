import React from 'react';
import { CrossPostInsight, ThemeTrend } from '../types';
import { Network, TrendingUp, ArrowUpRight, Cpu, Compass, Layers, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { TopicItem } from './TopicDetailModal';

interface CrossPostViewProps {
  insights: CrossPostInsight[];
  trends: ThemeTrend[];
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}

export const CrossPostView: React.FC<CrossPostViewProps> = ({ insights, trends, lang, onSelectTopic }) => {
  const openInsightTopic = (ins: CrossPostInsight) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: ins.id,
      title: ins.theme,
      title_ar: ins.arabic_theme,
      type: 'cross_post_pattern',
      priority: 'HIGH',
      confidence: ins.confidence_level,
      government_signal: ins.evidence_summary,
      mohesr_implication: ins.potential_interpretation,
      gap: 'Cross-ministerial synchronization and fragmented departmental workflows',
      solution: ins.possible_technology_opportunity,
      pilot: `Launch 60-day rapid prototype across participating entities (${ins.related_post_ids.join(', ')})`,
      impact: 'Unify isolated systems, accelerate decision-making, prevent operational redundancies',
      tech_categories: [ins.theme, 'Cross-System Integration', 'AI Automation'],
      data_requirements: 'Automated cross-system messaging buses and unified metadata schema',
      summary_en: `${ins.evidence_summary}\n\nInterpretation: ${ins.potential_interpretation}\n\nOpportunity: ${ins.possible_technology_opportunity}`,
      summary_ar: `${ins.evidence_summary}\n\nالفرصة الاستراتيجية: ${ins.possible_technology_opportunity}`
    });
  };

  const openThemeTopic = (tr: ThemeTrend) => {
    if (!onSelectTopic) return;
    onSelectTopic({
      id: `TREND-${tr.theme.replace(/\s+/g, '-').toUpperCase()}`,
      title: tr.theme,
      title_ar: tr.arabic_theme,
      type: 'strategic_trend',
      priority: tr.recent_activity === 'High' ? 'CRITICAL' : 'HIGH',
      government_signal: `Observed trend frequency: ${tr.frequency} mentions with ${tr.trend} velocity.`,
      mohesr_implication: `Trend directly affects higher education modernization and strategic capability readiness.`,
      gap: `Operational lag in adapting to national ${tr.theme} acceleration.`,
      solution: `Institute national ministry taskforce and agile digital pilot for ${tr.theme}.`,
      pilot: `Form working group across 5 key universities and central ministry data center within 30 days.`,
      impact: `Elevate MOHESR standing in national digital transformation indices.`,
      tech_categories: [tr.theme, 'Strategic Technology'],
      summary_en: `Strategic trend analysis for ${tr.theme} (${tr.arabic_theme}). Trend direction: ${tr.trend}.`,
      summary_ar: `تحليل الاتجاه الاستراتيجي: ${tr.arabic_theme}. اتجاه المسار: ${tr.trend}.`
    });
  };
  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white">
              {lang === 'ar' ? 'منظومة استخبارات التقاطع بين القرارات (Cross-Post Intelligence)' : 'Cross-Post Intelligence & Strategic Pattern Detection'}
            </h2>
            <p className="text-xs text-slate-400">
              Connecting seemingly isolated ministerial communiques into comprehensive systemic requirements (Section 6 & 7)
            </p>
          </div>
        </div>
      </div>

      {/* Cross-Post Insights Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Cross-Post Synthesis Dossiers</span>
          </h3>
          <span className="text-xs text-slate-400">
            {insights.length} Synthesized Intelligence Chains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map(ins => (
            <div
              key={ins.id}
              className="bg-slate-900 border border-slate-800 hover:border-teal-500/40 rounded-xl p-5 transition space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/40">
                    {ins.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Confidence: <strong className="text-teal-300">{ins.confidence_level}</strong>
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">
                  {ins.theme}
                </h4>
                <p className="text-xs text-teal-400/80 mb-3 font-medium dir-rtl">
                  {ins.arabic_theme}
                </p>

                {/* Related Posts Chain */}
                <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-3 text-xs mb-3">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-1.5">
                    Supporting Posts Chain
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ins.related_post_ids.map((pid, idx) => (
                      <span key={idx} className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                        {pid}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Evidence Summary */}
                <div className="text-xs space-y-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 uppercase text-[10px] font-bold block">Documented Official Signal</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{ins.evidence_summary}</p>
                  </div>

                  <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-amber-400 uppercase text-[10px] font-bold block mb-1">Analyst Interpretation</span>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{ins.potential_interpretation}</p>
                  </div>
                </div>
              </div>

              {/* Emerging Opportunity */}
              <div className="border-t border-slate-800 pt-3 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'الفرصة الاستراتيجية المركبة:' : 'Synthesized Strategic Opportunity:'}</span>
                  </div>
                  <p className="text-xs font-bold text-white leading-snug">
                    {ins.possible_technology_opportunity}
                  </p>
                </div>
                <button
                  onClick={() => openInsightTopic(ins)}
                  className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow transition whitespace-nowrap self-end sm:self-center"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'الخطة الذكية' : 'AI Plan'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Trend Velocity Table (Section 7) */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'معدل تسارع الاتجاهات التكنولوجية الاستراتيجية' : 'Strategic Technology Trend Velocity (Section 7 Audited)'}
            </h3>
          </div>
          <span className="text-[11px] text-slate-400">
            {lang === 'ar' ? 'محسوب بدقة من التكرارات الموثقة' : 'Calculated strictly from audited official post occurrences'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 uppercase font-mono">
                <th className="py-3 px-4">{lang === 'ar' ? 'المجال الاستراتيجي' : 'Strategic Theme'}</th>
                <th className="py-3 px-4">{lang === 'ar' ? 'المسمى العربي' : 'Arabic Nomenclature'}</th>
                <th className="py-3 px-4">{lang === 'ar' ? 'أول توثيق' : 'First Documented'}</th>
                <th className="py-3 px-4 text-center">{lang === 'ar' ? 'التكرار' : 'Frequency'}</th>
                <th className="py-3 px-4 text-center">{lang === 'ar' ? 'النشاط الأخير' : 'Recent Activity'}</th>
                <th className="py-3 px-4 text-right">{lang === 'ar' ? 'الاتجاه' : 'Trend Direction'}</th>
                <th className="py-3 px-4 text-right">{lang === 'ar' ? 'الإجراء الذكي' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {trends.map((tr, i) => (
                <tr key={i} className="hover:bg-slate-850 transition">
                  <td className="py-3 px-4 font-semibold text-white">
                    {tr.theme}
                  </td>
                  <td className="py-3 px-4 text-slate-400 dir-rtl">
                    {tr.arabic_theme}
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400">
                    {tr.first_seen}
                  </td>
                  <td className="py-3 px-4 text-center font-mono font-bold text-teal-400">
                    {tr.frequency}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      tr.recent_activity === 'High' 
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {tr.recent_activity}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={`inline-flex items-center gap-1 font-semibold text-[11px] ${
                      tr.trend === 'Increasing' 
                        ? 'text-teal-400' 
                        : tr.trend === 'Emerging' 
                        ? 'text-indigo-400' 
                        : 'text-slate-400'
                    }`}>
                      {tr.trend}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => openThemeTopic(tr)}
                      className="px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'خطة ذكية' : 'AI Plan'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
