import React from 'react';
import { 
  Activity, 
  Calendar, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Zap, 
  Building2,
  Clock,
  Sparkles
} from 'lucide-react';
import { TopicItem } from './TopicDetailModal';

interface DailyReportViewProps {
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}

export const DailyReportView: React.FC<DailyReportViewProps> = ({ lang, onSelectTopic }) => {
  const triggerTopic = (topic: TopicItem) => {
    if (onSelectTopic) {
      onSelectTopic(topic);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Report Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20">
                {lang === 'ar' ? 'دورة الاستخبارات اليومية' : 'DAILY INTELLIGENCE CYCLE'}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" /> 2026-09-18 • 08:00 AM EET
              </span>
            </div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              {lang === 'ar'
                ? 'تقرير الاستخبارات اليومي للتحول الرقمي - وزارة التعليم العالي'
                : 'MOHESR Digital Transformation Daily Intelligence Report'}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'ar'
                ? 'مخطط الإخراج المعياري المتوافق تماماً مع البنود التوجيهية الرسمية (من البند 1 إلى 11)'
                : 'Standardized Output Schema complying strictly with Instruction Section 14 (Items 1 through 11)'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {lang === 'ar' ? 'الحالة: مراقب وموثق رسمياً' : 'STATUS: MONITORED & AUDITED'}
            </span>
          </div>
        </div>

        {/* Change Detection Badge Box (Section 13) */}
        <div className="mt-5 bg-slate-950/80 border border-slate-800 rounded-lg p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
            {lang === 'ar' ? 'البند 13: تقييم اكتشاف التغييرات اليومية' : 'Section 13: Daily Change Detection Assessment'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-slate-500 block text-[11px]">{lang === 'ar' ? 'ما الجديد؟' : 'What is new?'}</span>
              <span className="text-slate-200 font-medium">
                {lang === 'ar' ? 'إطلاق منصة الحوسبة السحابية الموحدة مع 27 رابطاً جامعياً.' : 'Cloud computing platform launched with 27 university links.'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">{lang === 'ar' ? 'لماذا يهم الوزارة؟' : 'Why it matters?'}</span>
              <span className="text-slate-200 font-medium">
                {lang === 'ar' ? 'يفتح الباب أمام حوسبة الذكاء الاصطناعي المركزية لكافة الجامعات المصرية.' : 'Unlocks centralized AI computing across all Egyptian universities.'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">{lang === 'ar' ? 'تأكيد المسار؟' : 'Trend confirmation?'}</span>
              <span className="text-teal-400 font-medium">
                {lang === 'ar' ? 'يؤكد الانتقال من الخوادم المحلية إلى السحابة السيادية الوطنية.' : 'Confirms shift from local campus servers to Sovereign National Cloud.'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">{lang === 'ar' ? 'درجة الإلحاح' : 'Urgency Level'}</span>
              <span className="text-amber-300 font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 inline-block mt-0.5">
                {lang === 'ar' ? 'مرتفع — توقيت التنفيذ التجريبي مثالي' : 'HIGH — PILOT TIMING OPTIMAL'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Executive Summary */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{lang === 'ar' ? '1. الموجز التنفيذي (10 ركائز استراتيجية)' : '1. Executive Summary (10 Strategic Bullets)'}</span>
        </h2>
        <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed list-disc list-inside">
          <li><strong>{lang === 'ar' ? 'التكليف الرئاسي بميكنة المستشفيات:' : 'Presidential Mandate on Hospital Mechanization:'}</strong> {lang === 'ar' ? 'اكتمال ميكنة 80 مستشفى جامعي من أصل 155 بـ 37,000 نقطة إلكترونية، مع استهداف المرحلة الثانية بنهاية 2026.' : '80 out of 155 targeted university hospitals are fully computerized with 37,000 terminals; Phase 2 targets completion by end-2026.'}</li>
          <li><strong>{lang === 'ar' ? 'إطلاق المنصة السحابية الوطنية:' : 'National Cloud Platform Launch:'}</strong> {lang === 'ar' ? 'تدشين البنية السحابية بالعاصمة الإدارية الجديدة لربط 27 جامعة حكومية والمراكز البحثية.' : 'Ministerial launch of the unified cloud computing backbone in the New Administrative Capital linking 27 public universities and research centers.'}</li>
          <li><strong>{lang === 'ar' ? 'محطات الاختبارات الإلكترونية:' : 'Electronic Examination Milestones:'}</strong> {lang === 'ar' ? 'بنك الأسئلة الموحد يتجاوز رسميًا 1.8 مليون سؤال عبر 203 كليات مع انعدام المعاملات الورقية بالقطاع الطبي.' : 'Standardized question bank has officially crossed 1.8 million items across 203 faculties with zero paper usage in medical cohorts.'}</li>
          <li><strong>{lang === 'ar' ? 'تطوير منظومة معادلة الشهادات:' : 'Supreme Council Equivalency Overhaul:'}</strong> {lang === 'ar' ? 'تحديد سقف زمني ملزم لتقليص فحص معادلات الشهادات الأجنبية من 3-6 أشهر إلى 15 يوم عمل فقط.' : 'Binding ministerial target enacted to compress foreign degree equivalency reviews from 3-6 months to strictly 15 business days.'}</li>
          <li><strong>{lang === 'ar' ? 'شراكات الذكاء الاصطناعي الأكاديمية:' : 'National AI Curriculum Partnership:'}</strong> {lang === 'ar' ? 'تعاون وثيق بين وزارتي التعليم العالي والاتصالات لنشر برامج وأدوات الذكاء الاصطناعي بالجامعات التكنولوجية.' : 'Active collaboration between MOHESR and MCIT deploying specialized AI programs and tools across Egyptian technical universities.'}</li>
          <li><strong>{lang === 'ar' ? 'الحوكمة غير الورقية والأرشفة:' : 'Paperless Governance Migration:'}</strong> {lang === 'ar' ? 'رقمنة 15 مليون وثيقة وقرار تاريخي بمقر الوزارة الجديد بالعاصمة الإدارية.' : 'Completion of digitizing 15 million historical decrees and personnel files at the New Capital ministerial headquarters.'}</li>
          <li><strong>{lang === 'ar' ? 'الشمول المالي والبطاقة الذكية الموحدة:' : 'Financial Inclusion & Smart Cards:'}</strong> {lang === 'ar' ? 'تطبيق بطاقة «ميزة» الجامعية الموحدة لتشمل 3.5 مليون طالب جامعي.' : 'Universal rollout of Meeza-powered Unified Student Smart Cards reaching 3.5 million enrolled university students.'}</li>
          <li><strong>{lang === 'ar' ? 'منظومة دمج ذوي الإعاقة (تمكين):' : 'Disability Inclusion Acceleration:'}</strong> {lang === 'ar' ? 'إطلاق بوابة تمكين مع أولوية التحويل الصوتي والبرايل للمناهج الدراسية.' : 'Launch of the "Tamkeen" accessibility portal with priority on automated Arabic speech/braille curriculum conversion.'}</li>
          <li><strong>{lang === 'ar' ? 'تفعيل التحالفات الإقليمية السبعة:' : 'Regional Alliances Activation:'}</strong> {lang === 'ar' ? 'حاجة ملحة لمنصة إلكترونية لتبادل واستغلال الأجهزة المعملية بين الجامعات والمصانع.' : '7 geo-economic alliances formalized; urgent operational need identified for an online equipment-sharing exchange between academia and factories.'}</li>
          <li><strong>{lang === 'ar' ? 'الفجوة التشغيلية الحرجة:' : 'Critical Operational Gap:'}</strong> {lang === 'ar' ? 'رغم نشر العتاد الضخم، تظل التحليلات التنبؤية وإدارة قوائم الانتظار الجراحية بحاجة إلى أتمتة شاملة.' : 'Despite massive hardware deployments, predictive data analytics and inter-hospital surgical queueing systems remain completely unautomated.'}</li>
        </ul>
      </section>

      {/* Section 2: Presidential-Level Signals */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>{lang === 'ar' ? '2. إشارات المستوى الرئاسي (المستوى الأول)' : '2. Presidential-Level Signals (Level 1 Hierarchy)'}</span>
        </h2>
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 text-xs space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-400">
            <span className="font-semibold text-white">
              {lang === 'ar' ? 'توجيه رئاسي: إنهاء قوائم انتظار الحالات الحرجة عبر المستشفيات الجامعية' : 'Presidential Directive: Elimination of Critical Surgical Waiting Lists via University Hospitals'}
            </span>
            <span className="font-mono text-teal-400 text-[11px]">{lang === 'ar' ? 'المصدر: رئاسة الجمهورية / المجلس الأعلى للجامعات' : 'Source: Presidential Office / MOHESR Council'}</span>
          </div>
          <p className="text-slate-300">
            <strong>{lang === 'ar' ? 'الصلة بوزارة التعليم العالي:' : 'Relevance to MOHESR:'}</strong> {lang === 'ar' ? 'تجري المستشفيات الجامعية 658 ألف عملية سنوياً وتستقبل أكثر من 60% من الحالات المعقدة المحولة.' : 'University hospitals perform 658k surgeries yearly and absorb more than 60% of complicated tertiary surgical referrals.'}
          </p>
          <p className="text-slate-300">
            <strong>{lang === 'ar' ? 'التداعيات التكنولوجية:' : 'Technology Implications:'}</strong> {lang === 'ar' ? 'ضرورة فورية لربط سجلات المستشفيات الصحية بنظام مركزي لحظي لجدولة غرف العمليات وأسرة الرعاية.' : 'Immediate requirement to tie individual hospital EHR databases into a centralized real-time surgical theater scheduler.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800/80">
            <span className="text-teal-400 font-semibold">
              <strong>{lang === 'ar' ? 'الفرصة المباشرة:' : 'Direct Opportunity:'}</strong> {lang === 'ar' ? 'منظومة التحسين الذكي لأسرة الرعاية وقوائم الجراحة (INIT-01)' : 'National University Hospital Dynamic Bed, ICU & Surgical Queue Optimizer (INIT-01)'}
            </span>
            <button
              onClick={() => triggerTopic({
                id: 'INIT-01',
                title: 'National University Hospital Dynamic Bed, ICU & Surgical Queue Optimizer',
                title_ar: 'المنظومة الوطنية الذكية لترشيد وتوزيع أسرة الرعاية المركزة وقوائم الجراحة بالمستشفيات الجامعية',
                type: 'initiative',
                priority: 'CRITICAL',
                hierarchy: 'LEVEL 1: PRESIDENTIAL MANDATE',
                confidence: 'Very High (Documented Official)',
                government_signal: 'Presidential directive for eliminating critical surgery waiting lists across Egypt.',
                mohesr_implication: '658k surgeries yearly require automated bed matching and live telemetry.',
                gap: 'Siloed hospital data and fragmented patient queueing',
                solution: 'Unified FHIR/HL7 telemetry broker connecting all university hospital ERs and ICUs with automated priority allocation',
                pilot: 'Deploy 60-day pilot across Ain Shams and Cairo University hospital clusters',
                impact: 'Reduce ICU matching delay by 70%, eliminate critical queue leakage',
                tech_categories: ['Predictive Healthcare', 'Resource Optimization', 'API Integration'],
                summary_en: 'Direct response to Presidential Directive on critical surgery queues.',
                summary_ar: 'استجابة مباشرة للتوجيه الرئاسي بشأن القضاء على قوائم الانتظار في الحالات الحرجة.'
              })}
              className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap self-start sm:self-auto"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'توليد الخطة بالذكاء الاصطناعي' : 'Generate AI Plan'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Ministerial-Level Signals */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4" />
          <span>{lang === 'ar' ? '3. إشارات المستوى الوزاري (المستوى الثاني)' : '3. Ministerial-Level Signals (Level 2 Hierarchy)'}</span>
        </h2>
        <div className="space-y-3 text-xs">
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-slate-400">
              <span className="font-semibold text-white">
                {lang === 'ar' ? 'قرار وزاري: تقليص مدة فحص معادلة الشهادات الأجنبية إلى 15 يوماً عمل' : 'Minister Dr. Ayman Ashour: Slashing Degree Equivalency Processing to 15 Days'}
              </span>
              <span className="font-mono text-teal-400 text-[11px]">{lang === 'ar' ? 'قرار وزاري / المجلس الأعلى للجامعات' : 'Decree / SCU Resolution'}</span>
            </div>
            <p className="text-slate-300">
              <strong>{lang === 'ar' ? 'الأثر التشغيلي:' : 'Operational Implication:'}</strong> {lang === 'ar' ? 'لجان المجلس الأعلى للجامعات تعجز عن التدقيق اليدوي لآلاف المقررات الأجنبية خلال 15 يوماً دون محرك ذكي لقراءة النصوص والمقارنة الدلالية.' : 'SCU equivalency committees cannot manually read thousands of international syllabi in 15 days without OCR and semantic transcript cross-matching.'}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800/80">
              <span className="text-teal-400 font-semibold">
                <strong>{lang === 'ar' ? 'المبادرة المقترحة:' : 'Potential Initiative:'}</strong> {lang === 'ar' ? 'محرك التدقيق الآلي لمعادلة الشهادات والشهادات الأجنبية (INIT-03)' : 'Intelligent Foreign Degree & High School Equivalency Verification Engine (INIT-03)'}
              </span>
              <button
                onClick={() => triggerTopic({
                  id: 'INIT-03',
                  title: 'Intelligent Foreign Degree & High School Equivalency Verification Engine',
                  title_ar: 'المحرك الذكي للتدقيق الآلي ومعادلة الشهادات الجامعية والثانوية الأجنبية',
                  type: 'initiative',
                  priority: 'CRITICAL',
                  hierarchy: 'LEVEL 2: MINISTERIAL PRIORITY',
                  confidence: 'Very High (Decree Audited)',
                  government_signal: 'Ministerial decree capping equivalency verification at 15 business days.',
                  mohesr_implication: 'Manual syllabus reading takes 3-6 months; AI transcript parsing is essential to comply.',
                  gap: 'Human committee bottleneck reviewing diverse language transcripts',
                  solution: 'Multilingual OCR and semantic vector-matching against accredited Egyptian university faculty curricula',
                  pilot: 'Pilot with 500 engineering and medical foreign degrees',
                  impact: 'Cut verification cycle from 90 days to 72 hours, eliminate human transcription errors',
                  tech_categories: ['OCR & Document AI', 'Multilingual Semantic Search', 'SCU Verification'],
                  summary_en: 'Direct response to the 15-day ministerial equivalency decree.',
                  summary_ar: 'استجابة مباشرة لقرار الوزير بتقليص مدة المعادلات إلى 15 يوماً.'
                })}
                className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow transition whitespace-nowrap self-start sm:self-auto"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'توليد الخطة بالذكاء الاصطناعي' : 'Generate AI Plan'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: New Technology-Related Posts Table */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider">
          {lang === 'ar' ? '4. جدول المنشورات التكنولوجية الموثقة' : '4. Audited Technology-Related Posts Table'}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950 text-[11px] text-slate-400 uppercase font-mono">
                <th className="py-2.5 px-3">{lang === 'ar' ? 'التاريخ' : 'Date'}</th>
                <th className="py-2.5 px-3">{lang === 'ar' ? 'الموضوع' : 'Post ID & Title'}</th>
                <th className="py-2.5 px-3">{lang === 'ar' ? 'المستوى' : 'Hierarchy'}</th>
                <th className="py-2.5 px-3">{lang === 'ar' ? 'الصلة' : 'Relevance'}</th>
                <th className="py-2.5 px-3 text-center">{lang === 'ar' ? 'الإثبات' : 'Evidence'}</th>
                <th className="py-2.5 px-3 text-center">{lang === 'ar' ? 'الثقة' : 'Confidence'}</th>
                <th className="py-2.5 px-3 text-right">{lang === 'ar' ? 'الإجراء الذكي' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-[11px]">
              <tr className="hover:bg-slate-850">
                <td className="py-2.5 px-3 font-mono text-slate-400">2026-01-18</td>
                <td className="py-2.5 px-3 font-medium text-white">
                  {lang === 'ar' ? 'إطلاق منصة الحوسبة السحابية الموحدة' : 'Launch of Unified Cloud Computing Platform'}
                </td>
                <td className="py-2.5 px-3 text-teal-300">{lang === 'ar' ? 'مستوى 2 (وزاري)' : 'Level 2 (Minister)'}</td>
                <td className="py-2.5 px-3">A. Direct Tech</td>
                <td className="py-2.5 px-3 text-center font-bold text-amber-400">E1</td>
                <td className="py-2.5 px-3 text-center text-emerald-400 font-semibold">{lang === 'ar' ? 'مرتفع جداً' : 'Very High'}</td>
                <td className="py-2.5 px-3 text-right">
                  <button
                    onClick={() => triggerTopic({
                      id: 'CLOUD-2026',
                      title: 'Unified Cloud Computing Platform for 27 Public Universities',
                      title_ar: 'المنصة السحابية الموحدة لـ 27 جامعة حكومية ومركزاً بحثياً',
                      type: 'cabinet_post',
                      priority: 'HIGH',
                      hierarchy: 'Level 2 (Minister)',
                      confidence: 'Very High',
                      evidence_level: 'Level 1',
                      date: '2026-01-18',
                      government_signal: 'Minister Dr. Ayman Ashour inaugurates the Unified Cloud Data Center in the New Capital.',
                      mohesr_implication: 'Centralized computational capabilities allow nationwide AI services deployment.',
                      gap: 'Need for high-performance computing management and API brokerage across campuses.',
                      solution: 'Unified Academic AI & Research Gateway on the Sovereign Cloud.',
                      pilot: 'Cluster deployment across 5 engineering universities within 45 days.',
                      impact: 'Save 40% in hardware infrastructure costs, enable sovereign generative AI models.',
                      tech_categories: ['Cloud Infrastructure', 'HPC', 'Sovereign Compute'],
                      summary_en: 'Audited post regarding the New Capital Cloud Computing Platform.',
                      summary_ar: 'منشور موثق بشأن المنصة السحابية الموحدة بالعاصمة الإدارية الجديدة.'
                    })}
                    className="px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'خطة ذكية' : 'AI Plan'}</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-850">
                <td className="py-2.5 px-3 font-mono text-slate-400">2025-12-22</td>
                <td className="py-2.5 px-3 font-medium text-white">
                  {lang === 'ar' ? 'ميكنة المستشفيات الجامعية (80 مستشفى / 37 ألف نقطة)' : 'Hospital Mechanization Progress (80 Hospitals / 37k PCs)'}
                </td>
                <td className="py-2.5 px-3 text-amber-300">{lang === 'ar' ? 'مستوى 1 (رئاسي)' : 'Level 1 (President)'}</td>
                <td className="py-2.5 px-3">A. Direct Tech</td>
                <td className="py-2.5 px-3 text-center font-bold text-amber-400">E1</td>
                <td className="py-2.5 px-3 text-center text-emerald-400 font-semibold">{lang === 'ar' ? 'مرتفع جداً' : 'Very High'}</td>
                <td className="py-2.5 px-3 text-right">
                  <button
                    onClick={() => triggerTopic({
                      id: 'HOSP-MECH',
                      title: 'Hospital Mechanization Progress (80 Hospitals / 37k PCs)',
                      title_ar: 'منظومة ميكنة المستشفيات الجامعية المتطورة',
                      type: 'cabinet_post',
                      priority: 'CRITICAL',
                      hierarchy: 'Level 1 (President)',
                      confidence: 'Very High',
                      evidence_level: 'Level 1',
                      date: '2025-12-22',
                      government_signal: '80 university hospitals mechanized with 37k endpoints under Presidential mandate.',
                      mohesr_implication: 'Digital hardware baseline established; requires algorithmic optimization for surgical waitlists.',
                      gap: 'Lack of telemetry aggregation between disconnected hospital clusters.',
                      solution: 'Inter-hospital surgical and ICU telemetry broker.',
                      pilot: 'Deploy 60-day pilot across Cairo and Ain Shams clusters.',
                      impact: 'Eliminate patient transfer delays and improve emergency beds utilization by 40%.',
                      tech_categories: ['Healthcare Telemetry', 'EHR Interoperability'],
                      summary_en: 'Presidential review of university hospital computerization.',
                      summary_ar: 'استعراض رئاسي لميكنة المستشفيات الجامعية.'
                    })}
                    className="px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'خطة ذكية' : 'AI Plan'}</span>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-slate-850">
                <td className="py-2.5 px-3 font-mono text-slate-400">2025-10-15</td>
                <td className="py-2.5 px-3 font-medium text-white">
                  {lang === 'ar' ? 'مراكز الاختبارات الإلكترونية: 1.8 مليون سؤال بـ 203 كليات' : 'E-Exam Centers: 1.8M Questions across 203 Faculties'}
                </td>
                <td className="py-2.5 px-3 text-amber-300">{lang === 'ar' ? 'مستوى 1 (رئاسي)' : 'Level 1 (President)'}</td>
                <td className="py-2.5 px-3">A. Direct Tech</td>
                <td className="py-2.5 px-3 text-center font-bold text-amber-400">E1</td>
                <td className="py-2.5 px-3 text-center text-emerald-400 font-semibold">{lang === 'ar' ? 'مرتفع جداً' : 'Very High'}</td>
                <td className="py-2.5 px-3 text-right">
                  <button
                    onClick={() => triggerTopic({
                      id: 'E-EXAM',
                      title: 'E-Exam Question Vaults Expansion & Bloom Taxonomy AI Assist',
                      title_ar: 'توسيع بنوك أسئلة الاختبارات الإلكترونية والتوليد الذكي للبدائل',
                      type: 'cabinet_post',
                      priority: 'HIGH',
                      hierarchy: 'Level 1 (President)',
                      confidence: 'Very High',
                      evidence_level: 'Level 1',
                      date: '2025-10-15',
                      government_signal: '1.8M questions across 203 faculties conducted paperlessly.',
                      mohesr_implication: 'Faculty fatigue authoring fresh MCQs; risk of item leakage.',
                      gap: 'Automated validation of question cognitive level and distractor plausibility.',
                      solution: 'SCU Intelligent Question Bank Assistant & Arabic Distractor Generator.',
                      pilot: 'Deploy in 3 medical and engineering faculties.',
                      impact: 'Save 65% of faculty authoring hours and prevent exam fatigue.',
                      tech_categories: ['Assessment AI', 'Question Generation', 'Bloom Taxonomy'],
                      summary_en: 'E-exam performance review and nationwide expansion.',
                      summary_ar: 'تقييم أداء الاختبارات الإلكترونية والتوسع على مستوى الجمهورية.'
                    })}
                    className="px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{lang === 'ar' ? 'خطة ذكية' : 'AI Plan'}</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sections 5 & 6: AI & Automation Opportunities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* AI Opportunities */}
        <section className="bg-slate-900 border border-purple-500/20 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>{lang === 'ar' ? '5. فرص الذكاء الاصطناعي المكتشفة' : '5. Newly Identified AI Opportunities'}</span>
            </h2>
            <button
              onClick={() => triggerTopic({
                id: 'AI-OPP-01',
                title: 'Bloom Taxonomy & Arabic Question Distractor Generator',
                title_ar: 'توليد أسئلة وبدائل الاختبارات وفق تصنيف بلوم بالذكاء الاصطناعي',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'LEVEL 2: MINISTERIAL INNOVATION',
                confidence: 'High (Analyst Inference)',
                government_signal: '1.8M questions in vaults; faculty need support authoring compliant medical/engineering MCQs.',
                mohesr_implication: 'Faculty spend thousands of hours manually writing distractors; AI drastically improves quality.',
                gap: 'Shortage of validated Arabic question sets aligned with ILOs.',
                solution: 'Internal SCU SaaS that evaluates question difficulty, ILO alignment, and proposes plausible distractors in Arabic.',
                pilot: 'Pilot across Ain Shams and Mansoura medicine faculties.',
                impact: 'Accelerate exam creation by 60%, ensure rigorous cognitive testing standards.',
                tech_categories: ['Generative AI', 'Arabic NLP', 'Assessment Technology'],
                summary_en: 'AI distractor generation for university electronic exam centers.',
                summary_ar: 'توليد البدائل الذكية لبنوك أسئلة الامتحانات الإلكترونية الجامعية.'
              })}
              className="px-2 py-1 rounded bg-purple-500/10 hover:bg-purple-500 hover:text-white text-purple-300 font-bold text-[10px] inline-flex items-center gap-1 transition border border-purple-500/20"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة' : 'AI Plan'}</span>
            </button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs space-y-1.5">
            <div className="flex justify-between items-center">
              <strong className="text-white">
                {lang === 'ar' ? 'مولد الأسئلة والبدائل وفق تصنيف بلوم باللغة العربية' : 'Bloom Taxonomy & Arabic Question Distractor Generator'}
              </strong>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">
                {lang === 'ar' ? 'استنتاج تحليلي' : 'ANALYST INFERENCE'}
              </span>
            </div>
            <p className="text-slate-300 text-[11px]">
              <strong>{lang === 'ar' ? 'الإثبات:' : 'Evidence:'}</strong> {lang === 'ar' ? 'استنفاد بنوك الأسئلة بعد 75 ألف اختبار، وحاجة أعضاء هيئة التدريس لمساعد ذكي لصياغة بدائل معتمدة ومطابقة لمخرجات التعلم.' : 'E-exam question banks exhausted after 75k exams; faculty require automated assistance for plausible distractors and ILO validation.'}
            </p>
            <p className="text-slate-400 text-[11px]">
              <strong>{lang === 'ar' ? 'الجدوى:' : 'Feasibility:'}</strong> {lang === 'ar' ? 'مرتفعة — يمكن بناؤها كمنصة داخلية متصلة بخزائن المجلس الأعلى للجامعات.' : 'High — can be built as an internal SaaS connected to the Supreme Council question vaults.'}
            </p>
          </div>
        </section>

        {/* Automation Opportunities */}
        <section className="bg-slate-900 border border-emerald-500/20 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>{lang === 'ar' ? '6. فرص الأتمتة المكتشفة' : '6. Newly Identified Automation Opportunities'}</span>
            </h2>
            <button
              onClick={() => triggerTopic({
                id: 'AUTO-OPP-01',
                title: 'Automated Degree Equivalency Dossier Pre-Screening',
                title_ar: 'التدقيق والفرز المسبق المؤتمت لملفات معادلة الشهادات',
                type: 'initiative',
                priority: 'CRITICAL',
                hierarchy: 'LEVEL 2: MINISTERIAL MANDATE',
                confidence: 'Very High (Official Signal)',
                government_signal: '15-day ministerial target for degree equivalency decisions.',
                mohesr_implication: 'Requires OCR parsing of foreign transcripts, accredited university checks, and syllabus vector matching.',
                gap: 'Manual transcription and physical paper verifications.',
                solution: 'End-to-end automated ingest pipeline for student dossiers with instant validation of accredited university rosters.',
                pilot: 'Deploy 45-day validation test on European and GCC engineering degrees.',
                impact: '85% reduction in committee processing time, meeting 15-day commitment.',
                tech_categories: ['Workflow Automation', 'OCR Pipeline', 'Decision Support'],
                summary_en: 'Automation opportunity for the 15-day degree equivalency decree.',
                summary_ar: 'فرصة أتمتة لإنفاذ قرار الـ 15 يوماً لمعادلة الشهادات.'
              })}
              className="px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 font-bold text-[10px] inline-flex items-center gap-1 transition border border-emerald-500/20"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة' : 'AI Plan'}</span>
            </button>
          </div>
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs space-y-1.5">
            <div className="flex justify-between items-center">
              <strong className="text-white">
                {lang === 'ar' ? 'التدقيق المسبق المؤتمت لملفات معادلة الشهادات' : 'Automated Degree Equivalency Dossier Pre-Screening'}
              </strong>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                {lang === 'ar' ? 'إشارة رسمية' : 'OFFICIAL SIGNAL'}
              </span>
            </div>
            <p className="text-slate-300 text-[11px]">
              <strong>{lang === 'ar' ? 'المشكلة الحالية:' : 'Current Problem:'}</strong> {lang === 'ar' ? 'التفريغ اليدوي والسجلات الورقية تسبب تأخيرات من 3 إلى 6 أشهر للخريجين العائدين من الخارج.' : 'Manual data transcription and physical ledger checks cause 3-6 month delays for returning expatriate graduates.'}
            </p>
            <p className="text-slate-400 text-[11px]">
              <strong>{lang === 'ar' ? 'العائد المتوقع:' : 'Expected Benefit:'}</strong> {lang === 'ar' ? 'تخفيض 85% في وقت مراجعة اللجان بما يمكن من تحقيق الالتزام الوزاري المحدد بـ 15 يوماً.' : '85% reduction in committee review time; enables meeting the 15-day ministerial commitment.'}
            </p>
          </div>
        </section>
      </div>

      {/* Section 11: Concrete Next Actions */}
      <section className="bg-slate-900 border border-teal-500/30 rounded-xl p-5 space-y-3">
        <h2 className="text-sm font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
          <ArrowRight className="w-4 h-4" />
          <span>{lang === 'ar' ? '11. الإجراءات الملموسة الموصى بها (غير عامة ودقيقة)' : '11. Recommended Concrete Next Actions (Non-Generic)'}</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-teal-400 font-bold block mb-1">
                {lang === 'ar' ? 'الإجراء 1: اختبار أسرة عين شمس' : 'ACTION 1: Ain Shams ICU Pilot'}
              </span>
              <p className="text-slate-300 text-[11px]">
                {lang === 'ar'
                  ? 'استخراج مواصفات واجهة MedNet من وحدة تكنولوجيا المعلومات بمستشفيات جامعة عين شمس لربط قراءات الأسرة بنموذج جدولة العمليات.'
                  : 'Extract MedNet API schema from Ain Shams University Hospitals IT unit to map bed telemetry for the surgical waiting list optimizer prototype.'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'ACTION-1',
                title: 'Ain Shams ICU Pilot & MedNet Telemetry Integration',
                title_ar: 'مشروع عين شمس التجريبي لميكنة أسرة الرعاية وربط منظومة ميدنت',
                type: 'initiative',
                priority: 'CRITICAL',
                hierarchy: 'PILOT ACTION',
                confidence: 'High',
                government_signal: 'Extract MedNet schema from Ain Shams University Hospitals.',
                mohesr_implication: 'Immediate deployment of ICU bed matching.',
                gap: 'Telemetry endpoints standardization',
                solution: 'Rapid lightweight HL7 telemetry adapter',
                pilot: '30-day pilot at Demerdash and Cardiac hospital',
                impact: 'Establish live benchmark for nationwide university hospitals',
                tech_categories: ['Healthcare API', 'MedNet Integration', 'ICU Telemetry'],
                summary_en: 'Action 1 detailed implementation plan.',
                summary_ar: 'خطة التنفيذ التفصيلية للإجراء الأول.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة التنفيذ' : 'Generate Plan'}</span>
            </button>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-teal-400 font-bold block mb-1">
                {lang === 'ar' ? 'الإجراء 2: عينات بيانات معادلات المجلس الأعلى' : 'ACTION 2: SCU Equivalency Data Gathering'}
              </span>
              <p className="text-slate-300 text-[11px]">
                {lang === 'ar'
                  ? 'الحصول على عينات مجهولة الهوية من كشوف درجات الهندسة والطب لاختبار دقة خوارزميات التدقيق الآلي والترجمة الدلالية.'
                  : 'Obtain anonymized samples of foreign engineering and medicine transcripts to test OCR and Arabic syllabus alignment algorithms.'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'ACTION-2',
                title: 'SCU Equivalency Data Gathering & OCR Benchmark',
                title_ar: 'جمع عينات معادلات المجلس الأعلى للجامعات واختبار القراءة الآلية',
                type: 'initiative',
                priority: 'CRITICAL',
                hierarchy: 'PILOT ACTION',
                confidence: 'High',
                government_signal: 'Obtain foreign transcript dataset to calibrate syllabus semantic matcher.',
                mohesr_implication: 'Benchmark against human committee decisions.',
                gap: 'Quality dataset for multilingual syllabus embeddings',
                solution: 'Curated 500-degree evaluation benchmark',
                pilot: '20-day evaluation with SCU Equivalence Committee',
                impact: 'Validate 95%+ accuracy before ministerial rollout',
                tech_categories: ['OCR Evaluation', 'Syllabus Embedding', 'NLP Benchmark'],
                summary_en: 'Action 2 benchmark plan.',
                summary_ar: 'خطة تقييم وتدقيق الإجراء الثاني.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة التنفيذ' : 'Generate Plan'}</span>
            </button>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-teal-400 font-bold block mb-1">
                {lang === 'ar' ? 'الإجراء 3: مطابقة بنوك الأسئلة بتصنيف بلوم' : 'ACTION 3: Question Bank ILO Mapping'}
              </span>
              <p className="text-slate-300 text-[11px]">
                {lang === 'ar'
                  ? 'عقد ورشة عمل مع لجنة القياس والتقويم بجامعة حلوان لتحديد معايير تصنيف بلوم لتوليد أسئلة القطاع الطبي.'
                  : 'Conduct a workshop with the E-Assessment Committee at Helwan University to benchmark Bloom\'s taxonomy criteria for medical question generation.'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'ACTION-3',
                title: 'Question Bank ILO Mapping & Assessment Workshop',
                title_ar: 'ورشة عمل مخرجات التعلم وبنوك الأسئلة بالجامعات',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'PILOT ACTION',
                confidence: 'High',
                government_signal: 'Workshop with E-Assessment Committee at Helwan University.',
                mohesr_implication: 'Calibrate automated question generator against formal Bloom criteria.',
                gap: 'Formal taxonomy rubric encoding',
                solution: 'Expert rubric ingestion pipeline into the AI distractor engine',
                pilot: 'Single university pilot (Helwan) covering 500 items',
                impact: 'Establish national golden benchmark for AI distractor validation',
                tech_categories: ['Educational Rubrics', 'ILO Mapping', 'Bloom Assessment'],
                summary_en: 'Action 3 implementation workshop.',
                summary_ar: 'ورشة عمل تنفيذ الإجراء الثالث.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة التنفيذ' : 'Generate Plan'}</span>
            </button>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-teal-400 font-bold block mb-1">
                {lang === 'ar' ? 'الإجراء 4: ورقة سياسات حجز معامل الجامعات' : 'ACTION 4: Lab Instrument Registry Concept Note'}
              </span>
              <p className="text-slate-300 text-[11px]">
                {lang === 'ar'
                  ? 'تقديم مذكرة سياسات من 3 صفحات لأمانة التحالفات الإقليمية لاقتراح بوابة «المعامل كخدمة» لمصانع مدينة السادس من أكتوبر.'
                  : 'Submit a 3-page policy paper to the Regional Alliances Secretariat proposing the \'Laboratory-as-a-Service\' digital booking portal for 6th of October factories.'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'ACTION-4',
                title: 'Lab Instrument Registry & Industry Booking Portal Concept Note',
                title_ar: 'مذكرة سياسات البوابة الرقمية لحجز واستغلال الأجهزة المعملية بالجامعات',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'PILOT ACTION',
                confidence: 'High',
                government_signal: 'Policy paper to Regional Alliances Secretariat for 6th of October factories.',
                mohesr_implication: 'Monetize university scientific research equipment and accelerate industrial self-reliance.',
                gap: 'Unused laboratory capacity and lack of an e-booking portal',
                solution: 'National Lab-as-a-Service portal integrated with government e-payment gateway (Meeza)',
                pilot: 'Pilot with Cairo, Ain Shams, and Helwan engineering research centers',
                impact: 'Boost university research revenues by 35% and shorten industrial prototyping from weeks to days',
                tech_categories: ['Industry Collaboration', 'Equipment Booking', 'Meeza Payment'],
                summary_en: 'Action 4 concept note development.',
                summary_ar: 'إعداد مذكرة سياسات الإجراء الرابع.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'توليد خطة التنفيذ' : 'Generate Plan'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
