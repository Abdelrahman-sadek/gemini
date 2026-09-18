import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Building2, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Database,
  ArrowRight,
  Send
} from 'lucide-react';

export interface TopicItem {
  id: string;
  title: string;
  title_ar?: string;
  type: 'cabinet_post' | 'mohesr_post' | 'intersection' | 'initiative' | 'insight' | 'trend' | 'collaboration' | 'cross_post_pattern' | 'strategic_trend';
  date?: string;
  hierarchy?: string;
  priority?: string;
  relevance?: string;
  confidence?: string;
  evidence_level?: string;
  summary_en?: string;
  summary_ar?: string;
  tech_categories?: string[];
  entities?: string[];
  government_signal?: string;
  mohesr_implication?: string;
  gap?: string;
  solution?: string;
  pilot?: string;
  impact?: string;
  ai_component?: string;
  automation_component?: string;
  data_requirements?: string;
  raw?: any;
}

interface TopicDetailModalProps {
  topic: TopicItem | null;
  onClose: () => void;
  lang: 'ar' | 'en';
}

export const TopicDetailModal: React.FC<TopicDetailModalProps> = ({
  topic,
  onClose,
  lang
}) => {
  const [activePlanType, setActivePlanType] = useState<'implementation' | 'recommendations' | 'risk_mitigation' | 'technical_architecture'>('implementation');
  const [generatedPlan, setGeneratedPlan] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [sourceTag, setSourceTag] = useState<string>('');

  const isAr = lang === 'ar';

  const handleGenerateAIPlan = async (typeToGenerate = activePlanType) => {
    if (!topic) return;
    setLoading(true);
    try {
      const response = await fetch('/api/generate-ai-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicTitle: isAr && topic.title_ar ? topic.title_ar : topic.title,
          topicType: topic.type,
          planType: typeToGenerate,
          context: {
            id: topic.id,
            date: topic.date,
            hierarchy: topic.hierarchy,
            priority: topic.priority,
            government_signal: topic.government_signal,
            mohesr_implication: topic.mohesr_implication,
            gap: topic.gap,
            solution: topic.solution,
            pilot: topic.pilot,
            tech_categories: topic.tech_categories,
            entities: topic.entities,
            summary: isAr ? topic.summary_ar : topic.summary_en
          },
          lang
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedPlan(data.planText);
        setSourceTag(data.source || 'gemini-3.8-flash');
      } else {
        setGeneratedPlan(isAr ? 'عذراً، حدث خطأ أثناء التوليد. يرجى المحاولة مرة أخرى.' : 'Error generating plan. Please retry.');
      }
    } catch (err) {
      console.error(err);
      setGeneratedPlan(isAr ? 'تعذر الاتصال بالخادم لتوليد الخطة.' : 'Failed to connect to server for AI plan generation.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (topic?.id) {
      setGeneratedPlan('');
      setActivePlanType('implementation');
      handleGenerateAIPlan('implementation');
    }
  }, [topic?.id, lang]);

  if (!topic) return null;

  const handleCopy = () => {
    if (!generatedPlan) return;
    navigator.clipboard.writeText(generatedPlan);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedPlan) return;
    const blob = new Blob([generatedPlan], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${topic.id}-AI-Plan.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/90 flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-mono font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                {topic.id}
              </span>
              <span className="font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 text-[11px]">
                {topic.type.toUpperCase().replace('_', ' ')}
              </span>
              {topic.date && (
                <span className="text-slate-400 flex items-center gap-1 text-[11px] font-mono">
                  <Calendar className="w-3 h-3 text-slate-500" /> {topic.date}
                </span>
              )}
              {topic.priority && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  topic.priority === 'CRITICAL' 
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {topic.priority}
                </span>
              )}
              {topic.hierarchy && (
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px]">
                  {topic.hierarchy}
                </span>
              )}
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {isAr ? (topic.title_ar || topic.title) : topic.title}
            </h2>
            {topic.title_ar && !isAr && (
              <p className="text-xs text-teal-300/80 font-medium dir-rtl">
                {topic.title_ar}
              </p>
            )}
            {isAr && topic.title && topic.title_ar && topic.title !== topic.title_ar && (
              <p className="text-xs text-slate-400 font-sans">
                {topic.title}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two Column Layout */}
        <div className="flex-1 overflow-y-auto p-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Full Topic Metadata & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 text-xs">
            {/* Main Summary */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
              <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider block">
                {isAr ? 'الملخص الاستراتيجي والبيان الرسمي' : 'Strategic Summary & Statement'}
              </span>
              <p className="text-slate-200 leading-relaxed text-[13px]">
                {isAr ? (topic.summary_ar || topic.summary_en) : (topic.summary_en || topic.summary_ar)}
              </p>
            </div>

            {/* Key Signal & MOHESR Response */}
            {(topic.government_signal || topic.mohesr_implication) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.government_signal && (
                  <div className="bg-slate-950/80 border border-amber-500/20 rounded-xl p-3.5 space-y-1">
                    <span className="text-amber-400 font-bold uppercase text-[10px] block">
                      {isAr ? 'التوجيه الحكومي الرسمي (Cabinet Signal)' : 'Official Government Signal'}
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {topic.government_signal}
                    </p>
                  </div>
                )}
                {topic.mohesr_implication && (
                  <div className="bg-slate-950/80 border border-teal-500/20 rounded-xl p-3.5 space-y-1">
                    <span className="text-teal-400 font-bold uppercase text-[10px] block">
                      {isAr ? 'الاستجابة والأثر على التعليم العالي' : 'MOHESR Strategic Response'}
                    </span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {topic.mohesr_implication}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Gaps & Solutions */}
            {(topic.gap || topic.solution) && (
              <div className="space-y-2.5">
                {topic.gap && (
                  <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-3.5 text-rose-200">
                    <strong className="block text-[11px] text-rose-300 mb-1">
                      {isAr ? 'الفجوة التشغيلية المحددة:' : 'Identified Operational Gap:'}
                    </strong>
                    <p className="text-[12px]">{topic.gap}</p>
                  </div>
                )}
                {topic.solution && (
                  <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3.5 text-emerald-200">
                    <strong className="block text-[11px] text-emerald-300 mb-1">
                      {isAr ? 'الحل الرقمي والمبادرة المقترحة:' : 'Proposed Solution & Architecture:'}
                    </strong>
                    <p className="text-[12px]">{topic.solution}</p>
                  </div>
                )}
              </div>
            )}

            {/* AI, Automation, and Data Components */}
            {(topic.ai_component || topic.automation_component || topic.data_requirements) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {topic.ai_component && (
                  <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/30">
                    <span className="text-purple-300 font-bold text-[10px] uppercase block mb-1 flex items-center gap-1">
                      <Cpu className="w-3 h-3" /> {isAr ? 'مكون الذكاء الاصطناعي' : 'AI Component'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-snug">{topic.ai_component}</p>
                  </div>
                )}
                {topic.automation_component && (
                  <div className="p-3 rounded-lg bg-teal-950/20 border border-teal-500/30">
                    <span className="text-teal-300 font-bold text-[10px] uppercase block mb-1 flex items-center gap-1">
                      <Zap className="w-3 h-3" /> {isAr ? 'مكون الأتمتة' : 'Automation Component'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-snug">{topic.automation_component}</p>
                  </div>
                )}
                {topic.data_requirements && (
                  <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/30">
                    <span className="text-blue-300 font-bold text-[10px] uppercase block mb-1 flex items-center gap-1">
                      <Database className="w-3 h-3" /> {isAr ? 'جاهزية البيانات' : 'Data Readiness'}
                    </span>
                    <p className="text-slate-300 text-[11px] leading-snug">{topic.data_requirements}</p>
                  </div>
                )}
              </div>
            )}

            {/* Pilot & Impact */}
            {(topic.pilot || topic.impact) && (
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                {topic.pilot && (
                  <p className="text-slate-300">
                    <strong className="text-amber-400">{isAr ? 'التطبيق التجريبي المقترح (Pilot): ' : 'Recommended Pilot: '}</strong>
                    {topic.pilot}
                  </p>
                )}
                {topic.impact && (
                  <p className="text-slate-300">
                    <strong className="text-emerald-400">{isAr ? 'الأثر القومي المتوقع: ' : 'Expected Impact: '}</strong>
                    {topic.impact}
                  </p>
                )}
              </div>
            )}

            {/* Tags: Tech categories and entities */}
            {topic.tech_categories && topic.tech_categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-[10px] text-slate-500 uppercase font-mono">{isAr ? 'المجالات التقنية:' : 'Technologies:'}</span>
                {topic.tech_categories.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: AI Plan & Recommendation Generator (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-teal-500/30 rounded-xl p-4 flex flex-col justify-between shadow-inner">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                      {isAr ? 'مستشار الذكاء الاصطناعي الاستراتيجي' : 'Gemini AI Strategy Advisor'}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Powered by Gemini 3.8 Flash
                    </span>
                  </div>
                </div>

                {generatedPlan && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handleCopy}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
                      title={isAr ? 'نسخ النص' : 'Copy markdown'}
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
                      title={isAr ? 'تحميل التقرير' : 'Download file'}
                    >
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Select Generation Mode */}
              <div className="space-y-1.5 mb-3">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                  {isAr ? 'اختر نمط التوليد الاستراتيجي:' : 'Select Generation Preset:'}
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                  {[
                    { id: 'implementation', label_en: '30-60-90 Day Plan', label_ar: 'خطة تنفيذ وتشغيل' },
                    { id: 'recommendations', label_en: 'Ministerial Brief', label_ar: 'توصيات قيادية' },
                    { id: 'risk_mitigation', label_en: 'Risk & Compliance', label_ar: 'مصفوفة المخاطر' },
                    { id: 'technical_architecture', label_en: 'Tech Architecture', label_ar: 'المعمارية التقنية' }
                  ].map(mode => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setActivePlanType(mode.id as any);
                        handleGenerateAIPlan(mode.id as any);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg font-medium text-left transition ${
                        activePlanType === mode.id
                          ? 'bg-teal-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                      }`}
                    >
                      {isAr ? mode.label_ar : mode.label_en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate / Regenerate Button */}
              <button
                onClick={() => handleGenerateAIPlan()}
                disabled={loading}
                className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>{isAr ? 'جارٍ توليد الخطة بالذكاء الاصطناعي...' : 'Generating AI Plan with Gemini...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {generatedPlan
                        ? (isAr ? 'إعادة توليد وتحديث الخطة' : 'Regenerate Strategic Plan')
                        : (isAr ? 'توليد الخطة والتوصيات بالذكاء الاصطناعي' : 'Generate AI Plan & Recommendations')}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Generated Output Display */}
            <div className="mt-3 flex-1 min-h-[220px] max-h-[360px] overflow-y-auto p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs leading-relaxed space-y-2">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-48 text-slate-400 space-y-3">
                  <div className="w-8 h-8 rounded-full border-2 border-teal-400 border-t-transparent animate-spin" />
                  <p className="text-[11px] font-mono animate-pulse">
                    {isAr ? 'يقوم النموذج بصياغة التوصيات الاستراتيجية...' : 'Synthesizing ministerial roadmap & recommendations...'}
                  </p>
                </div>
              ) : generatedPlan ? (
                <div className="whitespace-pre-line font-sans text-[11.5px]">
                  {generatedPlan}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-center text-slate-500 space-y-2 p-4">
                  <Sparkles className="w-6 h-6 text-slate-600" />
                  <p className="text-xs">
                    {isAr 
                      ? 'اضغط على زر التوليد بالأعلى لاستخراج خطة عمل تفصيلية وتوصيات تنفيذية لهذا الموضوع باستخدام الذكاء الاصطناعي.' 
                      : 'Click the button above to generate a customized 30-60-90 day implementation plan, risk safeguards, and ministerial recommendations using Gemini AI.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              {isAr ? 'وكلاء التحول الرقمي - وزارة التعليم العالي' : 'MOHESR Digital Transformation Agents'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition"
          >
            {isAr ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
