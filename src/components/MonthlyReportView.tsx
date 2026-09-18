import React from 'react';
import { 
  FileText, 
  Compass, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ShieldAlert,
  Sparkles,
  Milestone
} from 'lucide-react';
import { TopicItem } from './TopicDetailModal';

interface MonthlyReportViewProps {
  lang: 'ar' | 'en';
  onSelectTopic?: (topic: TopicItem) => void;
}

export const MonthlyReportView: React.FC<MonthlyReportViewProps> = ({ lang, onSelectTopic }) => {
  const triggerTopic = (topic: TopicItem) => {
    if (onSelectTopic) {
      onSelectTopic(topic);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Monthly Report Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {lang === 'ar' ? 'تقرير الآفاق الاستراتيجية (البندان 15 و28)' : 'STRATEGIC HORIZON REPORT (SECTION 15 & 28)'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {lang === 'ar' ? 'الدورة: سبتمبر 2026' : 'CYCLE: SEPTEMBER 2026'}
              </span>
            </div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">
              {lang === 'ar'
                ? 'التقرير الاستراتيجي الشهري وخريطة طريق التحول الرقمي (30 / 90 يوماً)'
                : 'MOHESR Monthly Strategic Report & 90-Day Opportunity Roadmap'}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'ar'
                ? 'تقييم معمق للمسار الوزاري طويل الأجل، وجاهزية البنية التحتية، ومحطات التنفيذ لـ 90 يوماً.'
                : 'Deep assessment of ministerial long-term trajectory, infrastructure readiness, and 90-day execution milestones.'}
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-xs px-3 py-1 rounded-md bg-indigo-950/60 text-indigo-300 border border-indigo-700/50 font-mono font-semibold self-start sm:self-auto">
              {lang === 'ar' ? 'التقييم: تحول استراتيجي جوهري' : 'EVALUATION: STRATEGIC SHIFT'}
            </span>
            <button
              onClick={() => triggerTopic({
                id: 'STRAT-2026-09',
                title: 'MOHESR Comprehensive 90-Day Strategic AI Roadmap',
                title_ar: 'خريطة الطريق الاستراتيجية الشاملة للتحول الرقمي والذكاء الاصطناعي (90 يوماً)',
                type: 'initiative',
                priority: 'CRITICAL',
                hierarchy: 'LEVEL 1: STRATEGIC HORIZON',
                confidence: 'Very High (Ministerial Synthesis)',
                government_signal: 'Hardware deployment phase concluded; shift to intelligent software orchestration and predictive automation.',
                mohesr_implication: 'Eliminate administrative friction across 155 hospitals and 27 public universities.',
                gap: 'Inter-departmental software fragmentation and manual approval handoffs',
                solution: 'Unified ministerial enterprise orchestration layer built atop the New Capital Sovereign Cloud',
                pilot: 'Deploy 3 strategic pilots (Surgical waitlist, Equivalency OCR, and Lab-as-a-Service) in parallel',
                impact: 'Compress citizen wait times by 80%, position MOHESR as the digital leader in government innovation',
                tech_categories: ['Enterprise Orchestration', 'Strategic AI Roadmap', 'Sovereign Cloud'],
                summary_en: 'Comprehensive 90-day ministerial strategy document.',
                summary_ar: 'وثيقة الاستراتيجية الشاملة لوزارة التعليم العالي لمدة 90 يوماً.'
              })}
              className="px-3.5 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center gap-1.5 shadow transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'توليد الخطة الاستراتيجية الشاملة' : 'Generate Full Strategic Plan'}</span>
            </button>
          </div>
        </div>

        <div className="mt-5 text-xs text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong>{lang === 'ar' ? 'التقييم الاستراتيجي:' : 'Strategic Assessment:'}</strong> {lang === 'ar'
              ? 'أنهت وزارة التعليم العالي والبحث العلمي بنجاح مرحلة البنية التحتية الصلبة والشبكات (37 ألف نقطة بالمستشفيات الجامعية، و203 مراكز للاختبارات الإلكترونية، و15 مليون وثيقة مؤرشفة، والمركز السحابي بالعاصمة الإدارية).'
              : 'The Egyptian Ministry of Higher Education and Scientific Research (MOHESR) has successfully concluded its primary hardware and network build-out phase (37k hospital PCs, 203 automated examination centers, 15M scanned archives, and the sovereign Cloud Computing Center in the New Capital).'}
          </p>
          <p className="text-teal-300 font-medium">
            <strong>{lang === 'ar' ? 'نقطة التحول الاستراتيجي:' : 'The Strategic Inflection Point:'}</strong> {lang === 'ar'
              ? 'انتقلت معضلة الوزارة التشغيلية من «نقص العتاد التكنولوجي» إلى «تشتت برمجيات العمل والاحتكاك الإداري اليدوي». وتتركز الفرص ذات العائد الأكبر حالياً في الحوكمة الرقمية، والتحقق الآلي من الشهادات، واللوجستيات الصحية التنبؤية.'
              : 'The Ministry\'s operational bottleneck has shifted from "lack of IT infrastructure" to "unintegrated software workflows and manual administrative friction." The high-ROI opportunities are now purely in enterprise orchestration, automated credential verification, and predictive healthcare logistics.'}
          </p>
        </div>
      </div>

      {/* 30-Day Action Plan & 90-Day Strategic Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 30-Day Action Plan */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between text-teal-400 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Milestone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'خطة التحقيق والتشغيل التجريبي (30 يوماً)' : '30-Day Investigation & Pilot Plan'}</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الأيام 1 - 10: استجواب أصحاب المصلحة التقنيين' : 'Days 1 - 10: Technical Stakeholder Interrogation'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'عقد جلسات استكشاف هيكلية مع فريق تكنولوجيا معلومات المجلس الأعلى للمستشفيات الجامعية ومسؤولي قاعدة بيانات MedNet لتدقيق نهايات HL7/FHIR لمتابعة الأسرة والجراحات.'
                    : 'Conduct structured discovery sessions with the Supreme Council of University Hospitals IT team and MedNet database administrators to audit HL7/FHIR telemetry endpoints for real-time bed and surgery tracking.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MILESTONE-30-1',
                  title: 'Stakeholder Discovery & HL7 Telemetry Audit',
                  title_ar: 'استجواب أصحاب المصلحة وتدقيق واجهات بيانات المستشفيات HL7',
                  type: 'initiative',
                  priority: 'HIGH',
                  hierarchy: '30-DAY MILESTONE',
                  confidence: 'High',
                  government_signal: 'Structured sessions with SCU Hospital IT and MedNet DBAs.',
                  mohesr_implication: 'Define technical baseline for live bed telemetry.',
                  gap: 'API documentation and endpoint security clarity',
                  solution: 'Standardized discovery questionnaire and API integration testbench',
                  pilot: 'Ain Shams university hospital cluster',
                  impact: 'Unlock seamless hospital bed tracking nationwide',
                  tech_categories: ['Healthcare Integration', 'HL7/FHIR', 'API Security'],
                  summary_en: 'Days 1-10 execution protocol.',
                  summary_ar: 'بروتوكول تنفيذ الأيام من 1 إلى 10.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الأيام 11 - 20: اختبار دقة القراءة الآلية لكشوف الدرجات' : 'Days 11 - 20: Equivalency Transcript OCR Benchmark'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'معالجة عينة تجريبية لـ 200 كشف درجات من جامعات أجنبية عبر محرك مطابقة المقررات الدلالي لقياس الدقة مقارنة بقرارات لجان المجلس الأعلى للجامعات اليدوية.'
                    : 'Process a blind test dataset of 200 foreign university transcripts through the automated syllabus semantic matcher to quantify accuracy against actual SCU committee manual verdicts.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MILESTONE-30-2',
                  title: 'Equivalency Transcript OCR Benchmark & Accuracy Validation',
                  title_ar: 'اختبار دقة القراءة الآلية ومطابقة المقررات للشهادات الأجنبية',
                  type: 'initiative',
                  priority: 'HIGH',
                  hierarchy: '30-DAY MILESTONE',
                  confidence: 'High',
                  government_signal: 'Process 200 foreign transcripts through syllabus semantic matcher.',
                  mohesr_implication: 'Quantify accuracy and ensure safety before ministerial scale.',
                  gap: 'Benchmark metrics for multi-language transcript OCR',
                  solution: 'Automated ground-truth comparison suite against historical SCU committee records',
                  pilot: '200 real European and Asian transcripts',
                  impact: 'Achieve >95% accuracy in curriculum comparison',
                  tech_categories: ['Document OCR', 'Semantic NLP', 'Quality Assurance'],
                  summary_en: 'Days 11-20 benchmark plan.',
                  summary_ar: 'خطة اختبارات الدقة للأيام من 11 إلى 20.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الأيام 21 - 30: تقديم المذكرة التنفيذية لمعالي الوزير' : 'Days 21 - 30: Executive Concept Note Submission'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'تسليم مذكرة مبادرة مركزة من 4 صفحات لمكتب التحول الرقمي لمعالي الوزير توضح معمارية التشغيل التجريبي لمنظومة ترشيد قوائم الجراحة الوطنية.'
                    : 'Deliver a crisp 4-page initiative concept note to the Minister\'s Digital Transformation Office detailing the pilot architecture for the National Surgical Queue Optimizer.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MILESTONE-30-3',
                  title: 'Executive Ministerial Concept Note Submission',
                  title_ar: 'إعداد ورفع المذكرة التنفيذية لمكتب الوزير',
                  type: 'initiative',
                  priority: 'CRITICAL',
                  hierarchy: '30-DAY MILESTONE',
                  confidence: 'High',
                  government_signal: 'Deliver 4-page concept note to Minister\'s Digital Transformation Office.',
                  mohesr_implication: 'Secure ministerial funding and governance mandate for Phase 2.',
                  gap: 'Synthesized executive decision briefing',
                  solution: 'Structured executive memorandum with cost-benefit analysis and risk mitigations',
                  pilot: 'MOHESR Executive Leadership review',
                  impact: 'Direct executive authorization for national rollout',
                  tech_categories: ['Executive Strategy', 'Policy Memo', 'Governance Approval'],
                  summary_en: 'Days 21-30 ministerial submission strategy.',
                  summary_ar: 'استراتيجية رفع المذكرة التنفيذية للوزير.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-teal-500/10 hover:bg-teal-500 hover:text-slate-950 text-teal-400 font-bold text-[11px] inline-flex items-center gap-1 transition border border-teal-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 90-Day Strategic Opportunity Map */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between text-indigo-400 font-bold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>{lang === 'ar' ? 'خريطة الفرص الاستراتيجية لـ 90 يوماً' : '90-Day Strategic Opportunity Map'}</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الشهر 1: إطلاق النموذج التجريبي (مجموعة المستشفيات التجريبية)' : 'Month 1: Prototype Deployment (Pilot Cluster)'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'تدشين النموذج الأولي لمحسن قوائم الجراحة وأسرة الرعاية في مستشفيات جامعة عين شمس (الدمرداش، التخصصي، القلب) مع ربط الإشغال اللحظي.'
                    : 'Stand up the Surgical Queue & ICU Bed Optimizer prototype in Ain Shams University Hospitals (Demerdash, Specialized, Cardiac) with live bed occupancy sync.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MONTH-1',
                  title: 'Month 1: Prototype Deployment in Ain Shams Cluster',
                  title_ar: 'الشهر الأول: تشغيل النموذج التجريبي بمستشفيات جامعة عين شمس',
                  type: 'initiative',
                  priority: 'CRITICAL',
                  hierarchy: '90-DAY STRATEGY',
                  confidence: 'Very High',
                  government_signal: 'Live deployment at Demerdash, Specialized, and Cardiac university hospitals.',
                  mohesr_implication: 'Validate telemetry streaming and queue prioritization with real clinical staff.',
                  gap: 'Clinical user onboarding and change management',
                  solution: 'Dedicated 2-week clinical training and real-time operations dashboard',
                  pilot: '3 Ain Shams tertiary hospitals',
                  impact: 'First live proof-of-concept for Egyptian university hospital telemetry integration',
                  tech_categories: ['Clinical Operations', 'Live Deployment', 'Telemetry Streaming'],
                  summary_en: 'Month 1 execution plan.',
                  summary_ar: 'خطة عمل وتنفيذ الشهر الأول.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-indigo-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الشهر 2: التكامل التنظيمي والمالي' : 'Month 2: Regulatory & Financial Integration'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'إصدار قرار وزاري ينظم التحويل الرقمي للمرضى بين المستشفيات وربط بوابة «المعامل كخدمة» بمنظومة الدفع الإلكتروني الحكومية (ميزة).'
                    : 'Finalize ministerial decree regulating inter-hospital digital patient referrals and integrate the Laboratory-as-a-Service portal with the Meeza government e-payment gateway.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MONTH-2',
                  title: 'Month 2: Regulatory Decree & Meeza E-Payment Gateway Integration',
                  title_ar: 'الشهر الثاني: إعداد القرار الوزاري والربط مع بوابة ميزة للمدفوعات الحكومية',
                  type: 'initiative',
                  priority: 'HIGH',
                  hierarchy: '90-DAY STRATEGY',
                  confidence: 'High',
                  government_signal: 'Draft ministerial decree on inter-hospital referral protocols and integrate Meeza payments.',
                  mohesr_implication: 'Legitimize automatic patient referrals and enable automated financial clearing.',
                  gap: 'Regulatory compliance for cross-hospital clinical records exchange',
                  solution: 'MOHESR legal counsel decree package and Ministry of Finance Meeza gateway API keys',
                  pilot: 'Connected pilot with Cairo, Ain Shams, and Mansoura hospitals',
                  impact: 'Eliminate bureaucratic referral obstacles and monetize lab services legally',
                  tech_categories: ['Digital Governance', 'Meeza Payment', 'Regulatory Framework'],
                  summary_en: 'Month 2 regulatory and financial plan.',
                  summary_ar: 'خطة الحوكمة والتكامل المالي للشهر الثاني.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-indigo-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-white block mb-1">
                  {lang === 'ar' ? 'الشهر 3: التقييم الوطني وقرار التوسع الشامل' : 'Month 3: National Evaluation & Scale Decision'}
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {lang === 'ar'
                    ? 'مراجعة مؤشرات الأداء الكمية للتشغيل التجريبي (تقليص فترات الانتظار، ساعات لجان العمل، معدل إشغال الأسرة) وتقديم جدول التوسع لكافة المستشفيات الجامعية الـ 155.'
                    : 'Review quantitative pilot KPIs (reduction in waitlist duration, patient transfer times, committee man-hours saved) and submit expansion schedule for all 155 university hospitals.'}
                </p>
              </div>
              <button
                onClick={() => triggerTopic({
                  id: 'MONTH-3',
                  title: 'Month 3: National Evaluation & Nationwide Expansion Schedule',
                  title_ar: 'الشهر الثالث: التقييم الوطني الشامل واعتماد جدول التعميم على الـ 155 مستشفى',
                  type: 'initiative',
                  priority: 'CRITICAL',
                  hierarchy: '90-DAY STRATEGY',
                  confidence: 'Very High',
                  government_signal: 'Present verified quantitative KPIs to the Supreme Council of Universities.',
                  mohesr_implication: 'Scale proven systems to cover all public and national universities across Egypt.',
                  gap: 'Long-term operational and support budget allocation',
                  solution: 'Standardized national rollout playbook and phased procurement roadmap',
                  pilot: 'Nationwide rollout plan',
                  impact: 'Permanent nationwide improvement in tertiary healthcare and higher education delivery',
                  tech_categories: ['Nationwide Rollout', 'KPI Audit', 'Scale Roadmap'],
                  summary_en: 'Month 3 nationwide scaling strategy.',
                  summary_ar: 'استراتيجية التوسع القومي للشهر الثالث.'
                })}
                className="mt-2.5 px-2.5 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500 hover:text-white text-indigo-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-indigo-500/20 self-start"
              >
                <Sparkles className="w-3 h-3" />
                <span>{lang === 'ar' ? 'توليد الخطة الذكية' : 'AI Plan'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Unresolved Questions & Data Gaps */}
      <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between text-amber-400 font-bold text-sm uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'الأسئلة المعلقة وفجوات البيانات المحددة (إلزامي بالبند 15)' : 'Unresolved Questions & Identified Data Gaps (Section 15 Mandatory)'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-amber-300 font-semibold block mb-1">
                {lang === 'ar' ? 'فجوة 1: توافقية منظومة ميدنت' : 'Gap 1: MedNet Interoperability'}
              </span>
              <p className="text-slate-400 text-[11px]">
                {lang === 'ar'
                  ? 'هل تعمل جميع المستشفيات الـ 80 المميكنة بنفس إصدار قاعدة بيانات MedNet، أم أن كل جامعة تملك تعديلات مخصصة ومتباينة؟'
                  : 'Are all 80 mechanized university hospitals running the identical MedNet database build, or do individual universities maintain custom divergent schema extensions?'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'GAP-MEDNET',
                title: 'Investigation Plan: MedNet Database Build Divergence Audit',
                title_ar: 'خطة استقصاء: تدقيق توافقية إصدارات وتعديلات قاعدة بيانات ميدنت',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'DATA GAP INVESTIGATION',
                confidence: 'High',
                government_signal: 'Audit MedNet schemas across 80 mechanized university hospitals.',
                mohesr_implication: 'Identify schema discrepancies before deploying the national telemetry bridge.',
                gap: 'Undocumented custom database triggers and divergent table names in local deployments.',
                solution: 'Automated database schema extraction tool sent to hospital IT teams.',
                pilot: 'Sample audit across 10 hospitals in Greater Cairo and Delta.',
                impact: 'Prevent integration failures during national queue deployment.',
                tech_categories: ['Schema Audit', 'Database Interoperability', 'Data Standardization'],
                summary_en: 'Investigation plan for MedNet database divergence.',
                summary_ar: 'خطة استقصاء تدقيق تباينات قواعد بيانات ميدنت.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-amber-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'خطة استقصاء ذكية' : 'AI Action Plan'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-amber-300 font-semibold block mb-1">
                {lang === 'ar' ? 'فجوة 2: حصص الحوسبة السحابية المخصصة' : 'Gap 2: Cloud Compute Quota'}
              </span>
              <p className="text-slate-400 text-[11px]">
                {lang === 'ar'
                  ? 'ما هي حصص المعالجات ووحدات معالجة الرسوميات (GPU/CPU) المخصصة للباحثين بالجامعات على السحابة الوطنية بالعاصمة الإدارية؟'
                  : 'What dedicated GPU/CPU allocation is provisioned for university researchers on the newly launched National Cloud Center in the New Capital?'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'GAP-CLOUD-QUOTA',
                title: 'Resolution Plan: Academic GPU/CPU Compute Quota Policy',
                title_ar: 'خطة عمل: إقرار سياسة وحصص حوسبة الذكاء الاصطناعي الأكاديمية بالسحابة السيادية',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'DATA GAP INVESTIGATION',
                confidence: 'High',
                government_signal: 'Determine GPU/CPU allocation model on Sovereign Cloud for researchers.',
                mohesr_implication: 'Prevent compute hoarding and democratize access for Egyptian graduate researchers.',
                gap: 'Formal quota governance and allocation committee mechanism.',
                solution: 'Academic Cloud Quota Policy & Automated Research Grant Computing Portal.',
                pilot: '5 pilot research centers in AI and biomedical engineering.',
                impact: 'Accelerate Egyptian AI research publication output by 3x.',
                tech_categories: ['Cloud Quota Governance', 'HPC Allocation', 'Research Computing'],
                summary_en: 'Resolution plan for academic cloud quota.',
                summary_ar: 'خطة عمل إقرار حصص الحوسبة السحابية الأكاديمية.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-amber-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'خطة استقصاء ذكية' : 'AI Action Plan'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-amber-300 font-semibold block mb-1">
                {lang === 'ar' ? 'فجوة 3: ربط المعاهد الفنية الحكومية' : 'Gap 3: Technical Institute Connectivity'}
              </span>
              <p className="text-slate-400 text-[11px]">
                {lang === 'ar'
                  ? 'كم عدد المعاهد الفنية الحكومية الـ 45 التي تملك خطوط ألياف ضوئية موثوقة مقارنة بالخطوط النحاسية القديمة بطيئة السرعة؟'
                  : 'How many of the 45 public technical institutes possess reliable fiber broadband connections vs. legacy low-speed copper ADSL?'}
              </p>
            </div>
            <button
              onClick={() => triggerTopic({
                id: 'GAP-FIBER',
                title: 'Audit & Upgrading Plan: 45 Technical Institutes Fiber Connectivity',
                title_ar: 'خطة حصر وتطوير: ربط المعاهد الفنية الحكومية الـ 45 بشبكة الألياف الضوئية',
                type: 'initiative',
                priority: 'HIGH',
                hierarchy: 'DATA GAP INVESTIGATION',
                confidence: 'High',
                government_signal: 'Audit connectivity medium across 45 public technical institutes.',
                mohesr_implication: 'Modern technical curricula and digital exams require high-speed low-latency broadband.',
                gap: 'Lack of unified telecom inventory across remote institutes.',
                solution: 'Joint MOHESR-Telecom Egypt (WE) rapid connectivity audit and fiber deployment protocol.',
                pilot: 'First wave of 15 institutes in Upper Egypt and Canal zones.',
                impact: 'Ensure parity between national universities and vocational technical institutes.',
                tech_categories: ['Broadband Infrastructure', 'Telecom Egypt Partnership', 'Fiber Deployment'],
                summary_en: 'Audit and upgrade plan for technical institutes.',
                summary_ar: 'خطة حصر وترقية شبكات المعاهد الفنية.'
              })}
              className="mt-3 px-2.5 py-1 rounded bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-300 font-bold text-[11px] inline-flex items-center gap-1 transition border border-amber-500/20 self-start"
            >
              <Sparkles className="w-3 h-3" />
              <span>{lang === 'ar' ? 'خطة استقصاء ذكية' : 'AI Action Plan'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
