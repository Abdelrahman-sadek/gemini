import { 
  CabinetPostRecord, 
  IntersectionRecord, 
  CrossMinistryCollaboration, 
  GovernmentWideTrend, 
  CabinetDerivedInitiative 
} from '../types';

export const CABINET_POSTS: CabinetPostRecord[] = [
  {
    cabinet_post_id: "CAB-2026-02-10-01",
    date: "2026-02-10",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid02CabinetDigitalSocietyFeb26",
    title: "Prime Minister Directs Complete Ministerial Cloud Migration to National Data Center & AI Adoption",
    title_ar: "رئيس الوزراء يوجه بالتكامل الرقمي الكامل للوزارات مع مركز البيانات والحوسبة السحابية بالعاصمة الإدارية وتسريع تطبيقات الذكاء الاصطناعي",
    text_ar: "ترأس الدكتور مصطفى مدبولي رئيس مجلس الوزراء اجتماع اللجنة العليا للمجتمع الرقمي، حيث وجه بالالتزام الصارم لكافة الوزارات والهيئات بنقل قواعد البيانات والمنظومات الرقمية إلى مركز البيانات والحوسبة السحابية الحكومي P1، وتفعيل منصات تحليل البيانات الكبيرة والذكاء الاصطناعي التوليدي لرفع كفاءة الخدمات الحكومية واتخاذ القرار.",
    text_en: "Prime Minister Dr. Mostafa Madbouly chairs the Supreme Council for Digital Society meeting, issuing binding directives for all ministries to migrate data architectures to the National Data Center (P1) in the New Capital, while activating Big Data analytics and sovereign AI solutions to augment government public service delivery and decision support.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C4",
    technology_categories: [
      "DIGITAL TRANSFORMATION",
      "CLOUD / DATA CENTERS",
      "ARTIFICIAL INTELLIGENCE",
      "GOVERNMENT INTEGRATION",
      "SMART GOVERNMENT"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات", "وزارة التخطيط والتنمية الاقتصادية"],
    mentioned_entities: ["مجلس الوزراء", "مركز البيانات والحوسبة السحابية الحكومي", "المجلس الأعلى للمجتمع الرقمي"],
    mentioned_projects: ["مركز البيانات والحوسبة السحابية (P1)", "منظومة الحوسبة السحابية الحكومية الموحدة"],
    national_priorities: ["السيادة الرقمية", "كفاءة الإنفاق الحكومي", "استخدام الذكاء الاصطناعي في القرار"],
    official_government_signal: "The Prime Minister issued explicit orders mandating all ministries to conclude secondary server room hosting and migrate applications directly to the National Cloud Center in the New Administrative Capital.",
    mohesr_implication: "MOHESR must accelerate migration of university exam databases, hospital MedNet clusters, and research computing to the sovereign national cloud backbone, ensuring strict interoperability standards.",
    priority: "CRITICAL",
    priority_reason: "Direct Prime Ministerial mandate with active migration deadlines affecting higher education and university infrastructure.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Official Cabinet communique published with ministerial attendance and binding decisions.",
    related_mohesr_posts: ["MOHESR-2026-01-18-01", "MOHESR-2025-04-18-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2026-01-25-01",
    date: "2026-01-25",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid03CabinetWaitingListsJan26",
    title: "Cabinet Meeting on Universal Health Insurance & Elimination of Critical Surgical Waiting Lists",
    title_ar: "مجلس الوزراء يتابع المبادرة الرئاسية لإنهاء قوائم الانتظار والتكامل بين مستشفيات الصحة والمستشفيات الجامعية",
    text_ar: "أكد رئيس مجلس الوزراء خلال اجتماع متابعة منظومة التأمين الصحي الشامل أن المستشفيات الجامعية التابعة لوزارة التعليم العالي تمثل ركيزة رئيسية في القضاء على قوائم الانتظار للجراحات الحرجة بنسبة إنجاز تتجاوز 60% من التدخلات الدقيقة، موجهاً بالتنسيق الفوري بين وزارتي الصحة والتعليم العالي لربط أسرة الرعاية المركزة وغرف العمليات رقمياً لمنع التكدس وتسريع التحويلات الطبية الطارئة.",
    text_en: "The Prime Minister emphasizes that MOHESR university hospitals execute over 60% of complicated surgeries under the Presidential Initiative to Eliminate Waiting Lists, mandating real-time digital integration between the Ministry of Health and university hospitals to link ICU telemetry and surgical theaters for zero-delay patient dispatch.",
    hierarchy_level: "LEVEL 1 — PRESIDENTIAL DIRECTIVE",
    relevance_classification: "C4",
    technology_categories: [
      "DIGITAL TRANSFORMATION",
      "SOFTWARE / INFORMATION SYSTEMS",
      "DATA / ANALYTICS",
      "GOVERNMENT INTEGRATION",
      "DIGITAL SERVICES"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الصحة والسكان"],
    mentioned_entities: ["مجلس الوزراء", "الهيئة العامة للتأمين الصحي الشامل", "المجلس الأعلى للمستشفيات الجامعية"],
    mentioned_projects: ["المبادرة الرئاسية لإنهاء قوائم الانتظار", "منظومة التأمين الصحي الشامل"],
    national_priorities: ["الرعاية الصحية الشاملة", "سرعة إنقاذ الحالات الحرجة", "التكامل الحكومي المشترك"],
    official_government_signal: "Cabinet mandate requiring Health and Higher Education hospitals to establish real-time digital interoperability for emergency referrals and surgical suite scheduling.",
    mohesr_implication: "MOHESR must open MedNet APIs across mechanized university hospitals (Kasr Al-Aini, Ain Shams, Assiut, Mansoura) to connect with the central Cabinet and MOH emergency dispatch matrix.",
    priority: "CRITICAL",
    priority_reason: "Direct joint cabinet tasking with high political visibility and urgent citizen healthcare impact.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Official Cabinet statement following weekly council meeting with specific numerical commitments.",
    related_mohesr_posts: ["MOHESR-2025-12-22-02"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2025-11-20-01",
    date: "2025-11-20",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid04CabinetAIStrategyNov25",
    title: "Cabinet Endorsement of the National Artificial Intelligence Strategy 2025–2030",
    title_ar: "مجلس الوزراء يعتمد المرحلة الثانية من الاستراتيجية الوطنية للذكاء الاصطناعي ويركز على الكوادر الأكاديمية والبحثية",
    text_ar: "وافق مجلس الوزراء على وثيقة المرحلة الثانية للاستراتيجية الوطنية للذكاء الاصطناعي، والتي تهدف إلى مضاعفة مساهمة الاقتصاد الرقمي وتدريب 100 ألف طالب جامعي وتأسيس معامل ابتكار متخصصة للذكاء الاصطناعي في 20 جامعة بالتعاون بين وزارتي الاتصالات والتعليم العالي، مع تخصيص حوافز تمويلية للأبحاث التطبيقية الموجهة للقطاعات ذات الأولوية كالصحة والزراعة والمياه.",
    text_en: "The Cabinet approves Phase 2 of the National Artificial Intelligence Strategy (2025–2030), mandating cross-ministerial cooperation between MCIT and MOHESR to establish specialized AI innovation laboratories in 20 universities, train 100,000 university students, and grant targeted R&D funding for applied AI in healthcare, agriculture, and water management.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C3",
    technology_categories: [
      "ARTIFICIAL INTELLIGENCE",
      "EDUCATIONAL TECHNOLOGY",
      "RESEARCH TECHNOLOGY",
      "DATA / ANALYTICS"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات"],
    mentioned_entities: ["المجلس الوطني للذكاء الاصطناعي", "أكاديمية البحث العلمي والتكنولوجيا", "المجلس الأعلى للجامعات"],
    mentioned_projects: ["الاستراتيجية الوطنية للذكاء الاصطناعي (المرحلة الثانية)", "مبادرة بناة مصر الرقمية"],
    national_priorities: ["بناء القدرات الرقمية", "اقتصاد المعرفة", "توطين أبحاث الذكاء الاصطناعي"],
    official_government_signal: "Cabinet approved national policy framework designating universities as the primary training and research incubators for national AI talent and targeted sectoral models.",
    mohesr_implication: "MOHESR can proactively formulate university AI curriculum accreditations, establish high-performance compute access for students, and coordinate university research grants through STDF.",
    priority: "HIGH",
    priority_reason: "Approved national strategy with earmarked inter-ministerial funding lines.",
    evidence_level: "E2",
    confidence: "Very High",
    confidence_reason: "Cabinet decree document and joint ministerial press conference.",
    related_mohesr_posts: ["MOHESR-2026-01-18-01", "MOHESR-2025-09-02-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2025-09-15-01",
    date: "2025-09-15",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid05CabinetIndustryLinkSep25",
    title: "Prime Minister Directs Alignment of University Research with Industrial Localization & Golden License Projects",
    title_ar: "رئيس الوزراء يوجه بربط الأبحاث الجامعية وبراءات الاختراع بمشروعات توطين الصناعة ومنح الرخصة الذهبية",
    text_ar: "وجه الدكتور مصطفى مدبولي بضرورة تفعيل آليات عملية لربط مخرجات المراكز البحثية والجامعات باحتياجات القطاع الصناعي، خاصة في مجالات بدائل الاستيراد، وصناعة الدواء، ومكونات الطاقة المتجددة، والسيارات الكهربائية، مؤكداً أن الحوافز الاستثمارية والرخصة الذهبية يجب أن تقترن بالاستفادة من المعامل المركزية بالجامعات المصرية لتسريع الفحص والاختبارات القياسية للمنتجات المحلية.",
    text_en: "Prime Minister Dr. Mostafa Madbouly instructs ministries to operationalize concrete mechanisms linking university research and patents to industrial import-substitution projects, noting that Golden License recipients must be enabled to utilize university central laboratories for accredited testing, certification, and prototype development.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C3",
    technology_categories: [
      "RESEARCH TECHNOLOGY",
      "DIGITAL SERVICES",
      "GOVERNMENT INTEGRATION",
      "SMART GOVERNMENT"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الصناعة", "وزارة الاستثمار والتجارة الخارجية"],
    mentioned_entities: ["الهيئة العامة للتنمية الصناعية", "اتحاد الصناعات المصرية", "أكاديمية البحث العلمي والتكنولوجيا"],
    mentioned_projects: ["منظومة الرخصة الذهبية", "المشروع القومي لتعميق التصنيع المحلي"],
    national_priorities: ["توطين الصناعة الوطنية", "ترشيد الفاتورة الاستيرادية", "ربط البحث العلمي بالإنتاج"],
    official_government_signal: "Prime Minister's directive demanding that university laboratories be systematically opened and digitally accessible to national industrial manufacturers.",
    mohesr_implication: "MOHESR's 7 Regional Alliances initiative must accelerate deploying an online digital equipment-sharing registry (Laboratory-as-a-Service) so factories can discover and book specialized instruments seamlessly.",
    priority: "HIGH",
    priority_reason: "Highest-priority national economic objective directly tasking university laboratory capabilities.",
    evidence_level: "E2",
    confidence: "Very High",
    confidence_reason: "Direct statements by the Prime Minister in ministerial economic group briefings.",
    related_mohesr_posts: ["MOHESR-2025-09-02-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2025-08-03-01",
    date: "2025-08-03",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid06CabinetExpatriatesAug25",
    title: "Supreme Expatriate Affairs Committee Mandates Unified Digital Window for Foreign Degree Verification",
    title_ar: "اللجنة الوزارية لشئون المصريين بالخارج توجه بإنشاء نافذة رقمية موحدة لتسريع معادلة الشهادات الجامعية",
    text_ar: "ترأس رئيس مجلس الوزراء اجتماع اللجنة الوزارية للمصريين في الخارج، وتناول الاجتماع شكاوى الطلاب والخريجين المصريين الدارسين بالخارج بشأن طول الإجراءات الورقية لمعادلة الشهادات، ووجه سيادته المجلس الأعلى للجامعات ووزارتي الخارجية والتعليم العالي بإنشاء منظومة ربط إلكترونية موحدة للتحقق من صحة المستندات والشهادات الجامعية الدولية رقمياً والالتزام بمدد زمنية محددة لإصدار قرارات المعادلة.",
    text_en: "The Cabinet Supreme Expatriate Affairs Committee reviews citizen grievances regarding protracted paper processing for foreign university degree equivalencies, mandating SCU, MOHESR, and the Ministry of Foreign Affairs to build a unified digital verification window to validate academic credentials with strict SLA turnaround times.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C4",
    technology_categories: [
      "DIGITAL SERVICES",
      "AUTOMATION",
      "GOVERNMENT INTEGRATION",
      "DIGITAL IDENTITY",
      "E-GOVERNMENT"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الخارجية والهجرة"],
    mentioned_entities: ["المجلس الأعلى للجامعات", "لجنة معادلة الدرجات العلمية", "إدارة البعثات والإشراف العلمي"],
    mentioned_projects: ["المنظومة الإلكترونية لمعادلة الشهادات", "بوابة الخدمات القنصلية الرقمية"],
    national_priorities: ["رعاية المصريين بالخارج", "تيسير الخدمات الحكومية", "التحول الرقمي للمعاملات القنصلية"],
    official_government_signal: "Cabinet ministerial resolution directing MOHESR and SCU to eliminate paper certification bottlenecks for returning Egyptian expatriates via automated inter-ministerial data exchange.",
    mohesr_implication: "MOHESR's 15-day SLA commitment announced by Minister Dr. Ayman Ashour in March 2025 is now backed by a Cabinet mandate requiring OCR transcript intake and Foreign Ministry attestation API connectivity.",
    priority: "CRITICAL",
    priority_reason: "Direct Cabinet-level oversight over a persistent citizen complaint with binding inter-agency tasking.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Official Cabinet decree and committee minutes published on state gazette channels.",
    related_mohesr_posts: ["MOHESR-2025-03-05-02"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2025-06-18-01",
    date: "2025-06-18",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid07CabinetPaperlessGovJun25",
    title: "Cabinet Directs Universal Transition to Unified Government Electronic Correspondence Across All 32 Ministries",
    title_ar: "مجلس الوزراء يقر الإلزام الكامل لكافة الوزارات والجهات التابعة بمنظومة المراسلات الحكومية الإلكترونية ووقف التداول الورقي",
    text_ar: "أقر مجلس الوزراء خطة الإلغاء الكامل للتعاملات الورقية البينية داخل الجهاز الإداري للدولة بالحي الحكومي بالعاصمة الإدارية، مع التوجيه بتعميم المنظومة على كافة الجهات والهيئات والجامعات التابعة للوزارات، وربطها بنظام التوقيع والختم الإلكتروني المعتمد لضمان الحجية القانونية والسرعة الفائقة في اتخاذ القرارات.",
    text_en: "The Cabinet mandates the total cessation of paper-based administrative correspondence across all government apparatus in the New Capital, directing all ministerial affiliates and public universities to integrate into the Unified Government Electronic Correspondence System with certified digital signatures.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C2",
    technology_categories: [
      "E-GOVERNMENT",
      "AUTOMATION",
      "GOVERNMENT INTEGRATION",
      "DIGITAL IDENTITY",
      "CYBERSECURITY"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات", "الجهاز المركزي للتنظيم والإدارة"],
    mentioned_entities: ["مجلس الوزراء", "هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA)"],
    mentioned_projects: ["منظومة المراسلات الحكومية الموحدة", "مشروع التوقيع الإلكتروني الوطني"],
    national_priorities: ["الحكومة اللاورقية", "حوكمة الجهاز الإداري", "أمن الوثائق الحكومية"],
    official_government_signal: "Government-wide deadline banning physical paper memos between ministries and ordering secure digital workflow adoption.",
    mohesr_implication: "While MOHESR digitized 15M files at its New Capital headquarters, extending this workflow to 27 regional universities and 45 technical institutes requires standardized API adapters and token authorization.",
    priority: "HIGH",
    priority_reason: "Mandatory compliance requirement governing all incoming/outgoing administrative communications.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Binding Cabinet decree published and monitored by the Prime Minister's Follow-up Office.",
    related_mohesr_posts: ["MOHESR-2025-04-18-01", "MOHESR-2024-05-14-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2025-04-12-01",
    date: "2025-04-12",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid08CabinetTechEducationApr25",
    title: "Presidential Directive on Expanding Technological Universities to Feed Industrial Corridors & Green Energy",
    title_ar: "توجيهات رئاسية بالتوسع في الجامعات التكنولوجية وربط تخصصاتها بممرات التنمية ومشروعات الهيدروجين الأخضر",
    text_ar: "عرض رئيس مجلس الوزراء على رئيس الجمهورية تقريراً شاملاً حول منظومة التعليم التكنولوجي في مصر، حيث وجه السيد الرئيس بإنشاء 17 جامعة تكنولوجية جديدة لتغطية كافة محافظات الجمهورية، وتطوير المناهج بالشراكة مع التحالفات الصناعية العالمية، وتوفير معامل محاكاة رقمية متقدمة في مجالات الطاقة النظيفة، والسيارات، والصناعات الهندسية الدقيقة.",
    text_en: "Presidential directive presented during Cabinet meeting mandating the establishment of 17 new technological universities to cover all Egyptian governorates, integrating digital simulation laboratories and specialized curricula aligned with green hydrogen, automotive, and microelectronics manufacturing.",
    hierarchy_level: "LEVEL 1 — PRESIDENTIAL DIRECTIVE",
    relevance_classification: "C3",
    technology_categories: [
      "EDUCATIONAL TECHNOLOGY",
      "DIGITAL INFRASTRUCTURE",
      "RESEARCH TECHNOLOGY"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الكهرباء والطاقة المتجددة", "وزارة الإنتاج الحربي"],
    mentioned_entities: ["رئاسة الجمهورية", "مجلس الوزراء", "صندوق دعم التعليم والابتكار"],
    mentioned_projects: ["المشروع القومي للجامعات التكنولوجية", "المجمعات التكنولوجية المتكاملة"],
    national_priorities: ["تطوير التعليم الفني والتكنولوجي", "الهيدروجين الأخضر", "خلق فرص عمل نوعية"],
    official_government_signal: "Presidential directive instructing Cabinet and MOHESR to rapidly scale technological university infrastructure with modernized digital labs.",
    mohesr_implication: "MOHESR must deploy unified digital Student Information Systems (SIS) and virtual cloud simulation labs across technological universities to maintain academic parity without duplicating hardware costs.",
    priority: "HIGH",
    priority_reason: "Direct Level 1 Presidential assignment with capital budget allocation.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Formal presidency statement broadcast through Cabinet official channels.",
    related_mohesr_posts: ["MOHESR-2024-05-14-01", "MOHESR-2025-09-02-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2024-10-08-01",
    date: "2024-10-08",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid09CabinetCybersecurityOct24",
    title: "Cabinet Reviews National Cybersecurity Readiness & Issues Mandatory Compliance Standards for Critical Databases",
    title_ar: "مجلس الوزراء يستعرض تقرير الأمن السيبراني ويقر معايير الحماية الإلزامية للبنى التحتية الحرجة وقواعد البيانات القومية",
    text_ar: "ناقش مجلس الوزراء تقرير المركز الوطني للاستعداد لطوارئ الحاسبات والشبكات (EG-CERT)، ووافق على الإطار التنظيمي لحماية قواعد البيانات الحيوية بالدولة، مع توجيه قطاعات التعليم العالي والصحة والتمويل بتطبيق معايير التشفير المتقدم، وفصل شبكات الاختبارات الإلكترونية عن الإنترنت العام، وإجراء تدريبات سيبرانية دورية لحماية أسرار الامتحانات والملفات الطبية للمواطنين.",
    text_en: "The Cabinet reviews the EG-CERT national cybersecurity audit, approving mandatory cybersecurity compliance frameworks for critical databases in higher education and healthcare, instructing universities to enforce air-gapped or dedicated VLAN protections for electronic test servers and encrypt patient medical dossiers.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C3",
    technology_categories: [
      "CYBERSECURITY",
      "DIGITAL INFRASTRUCTURE",
      "GOVERNMENT INTEGRATION",
      "EDUCATIONAL TECHNOLOGY"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات"],
    mentioned_entities: ["المركز الوطني للاستعداد لطوارئ الحاسبات والشبكات (EG-CERT)", "الجهاز القومي لتنظيم الاتصالات (NTRA)"],
    mentioned_projects: ["الاستراتيجية الوطنية للأمن السيبراني", "مشروع تأمين البنية التحتية للاختبارات الإلكترونية"],
    national_priorities: ["الأمن القومي الرقمي", "حماية البيانات الشخصية", "صمود البنى التحتية الحرجة"],
    official_government_signal: "Cabinet decree mandating certified cybersecurity hardening across university exam centers and hospital EHR systems.",
    mohesr_implication: "MOHESR's 203 automated exam centers and 80 mechanized hospitals must undergo unified EG-CERT security audits and implement continuous automated vulnerability scans.",
    priority: "HIGH",
    priority_reason: "Mandatory security governance affecting millions of student exam questions and patient health records.",
    evidence_level: "E2",
    confidence: "Very High",
    confidence_reason: "EG-CERT regulatory mandate ratified in official Cabinet session.",
    related_mohesr_posts: ["MOHESR-2025-10-15-01", "MOHESR-2025-06-11-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2024-07-22-01",
    date: "2024-07-22",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid10CabinetDigitalIDJul24",
    title: "Cabinet Expands Digital Egypt Platform & Mandates National ID Database Integration for University Credentials",
    title_ar: "مجلس الوزراء يوجه بربط منصة مصر الرقمية بقواعد بيانات الخريجين بالجامعات لمكافحة تزوير الشهادات",
    text_ar: "وجه رئيس مجلس الوزراء بتكامل منصة 'مصر الرقمية' مع المنظومات الرقمية بوزارة التعليم العالي والمجلس الأعلى للجامعات، لإتاحة خدمة التحقق اللحظي من صحة المؤهلات الدراسية والشهادات الجامعية لكافة خريجي الجامعات المصرية باستخدام الرقم القومي، ووقف الاعتماد على الشهادات الورقية في مسابقات التوظيف والمعاملات الحكومية للحد من التزوير.",
    text_en: "The Prime Minister directs the Digital Egypt portal to interface with MOHESR and SCU graduation databases, providing real-time National ID-based verification of university academic degrees to eliminate paper credential fraud in civil service hiring and official transactions.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C4",
    technology_categories: [
      "DIGITAL IDENTITY",
      "DATA / ANALYTICS",
      "GOVERNMENT INTEGRATION",
      "DIGITAL SERVICES",
      "E-GOVERNMENT"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات", "وزارة التخطيط والتنمية الاقتصادية"],
    mentioned_entities: ["مجلس الوزراء", "منصة مصر الرقمية", "مصلحة الأحوال المدنية", "المجلس الأعلى للجامعات"],
    mentioned_projects: ["بوابة مصر الرقمية", "السجل القومي الرقمي لخريجي الجامعات"],
    national_priorities: ["مكافحة تزوير المؤهلات", "التحقق الرقمي من الهوية", "حكومة رقمية متكاملة"],
    official_government_signal: "Cabinet directive ordering the unification of all public and private university graduate records into a cryptographically verified National ID registry accessible via Digital Egypt.",
    mohesr_implication: "MOHESR must federate historical and current graduate records across all 27 public and 32 private/national universities into a tamper-proof digital registry with instant QR verification.",
    priority: "CRITICAL",
    priority_reason: "High-priority national security and governance directive combating credential fraud with direct integration mandate.",
    evidence_level: "E1",
    confidence: "Very High",
    confidence_reason: "Formal Prime Ministerial instruction followed by inter-ministerial technical meetings.",
    related_mohesr_posts: ["MOHESR-2025-06-11-01", "MOHESR-2024-11-14-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  },
  {
    cabinet_post_id: "CAB-2024-03-19-01",
    date: "2024-03-19",
    url: "https://www.facebook.com/EgyptianCabinet/posts/pfbid11CabinetEnergyEfficiencyMar24",
    title: "Cabinet Enforces Smart Building Energy Rationing Across Public Campuses & Hospitals",
    title_ar: "مجلس الوزراء يقر خطة ترشيد استهلاك الكهرباء بالمنشآت الجامعية والمستشفيات والتحول للطاقة الشمسية",
    text_ar: "أقر مجلس الوزراء ضوابط ترشيد استهلاك الطاقة والمياه بالمقار الحكومية والصروح الجامعية والمستشفيات التابعة لها، مع التوجيه بالاستفادة من أسطح المباني التعليمية لتركيب محطات طاقة شمسية وتطبيق أنظمة التحكم الذكي في الإنارة والتكييف لخفض الاستهلاك بنسبة لا تقل عن 25%.",
    text_en: "The Cabinet decrees energy and water rationing protocols across public facilities, directing public universities and university hospitals to utilize building rooftops for solar photovoltaic deployment and install IoT smart energy control systems to slash campus utility expenditures by at least 25%.",
    hierarchy_level: "LEVEL 2 — CABINET / PM DIRECTIVE",
    relevance_classification: "C2",
    technology_categories: [
      "SMART GOVERNMENT",
      "DIGITAL INFRASTRUCTURE",
      "DATA / ANALYTICS"
    ],
    mentioned_ministries: ["وزارة التعليم العالي والبحث العلمي", "وزارة الكهرباء والطاقة المتجددة", "وزارة البيئة"],
    mentioned_entities: ["هيئة الطاقة الجديدة والمتجددة", "رؤساء الجامعات الحكومية"],
    mentioned_projects: ["المبادرة الوطنية للمدن والجامعات المستدامة الخضراء"],
    national_priorities: ["ترشيد الإنفاق العام", "كفاءة الطاقة", "الاستدامة البيئية"],
    official_government_signal: "Cabinet decree binding university administrations to track electricity metrics and deploy smart IoT metering on campuses.",
    mohesr_implication: "MOHESR can deploy a centralized Smart Campus Energy Telemetry Dashboard to monitor real-time power consumption and solar generation across public university facilities.",
    priority: "MEDIUM",
    priority_reason: "Operational cost-cutting directive with measurable environmental targets.",
    evidence_level: "E2",
    confidence: "High",
    confidence_reason: "Cabinet decree disseminated to all provincial governors and university councils.",
    related_mohesr_posts: ["MOHESR-2025-09-02-01"],
    status: "ANALYZED",
    last_analyzed: "2026-09-18"
  }
];

export const CABINET_MOHESR_INTERSECTIONS: IntersectionRecord[] = [
  {
    intersection_id: "INT-01-CLOUD-SOVEREIGNTY",
    cabinet_post_id: "CAB-2026-02-10-01",
    mohesr_post_id: "MOHESR-2026-01-18-01",
    cabinet_date: "2026-02-10",
    mohesr_date: "2026-01-18",
    government_direction: "Mandate for all ministries to migrate data architectures and computational workloads to the National Cloud Center (P1) in the New Capital.",
    mohesr_direction: "Ministerial launch of the National Unified Cloud Computing Platform connecting 27 universities for AI research and data analytics.",
    relationship_type: "TYPE A — DIRECT ALIGNMENT",
    technology_category: "CLOUD / DATA CENTERS & ARTIFICIAL INTELLIGENCE",
    ai_relevance: "National Cloud hosts sovereign AI foundation models; MOHESR provides university research pipelines.",
    automation_relevance: "Automated provisioning of compute quotas and air-gapped storage for academic laboratories.",
    data_relevance: "Federated integration of university academic data into the National Government Data Bus.",
    cross_ministry_relevance: "MOHESR + MCIT + Administrative Capital Data Center.",
    evidence_level: "E1",
    confidence: "Very High",
    identified_gap: "While physical fiber connectivity exists to 27 universities, there is no unified multi-tenant software orchestrator managing university GPU quotas for students and researchers.",
    potential_initiative: "National Academic AI & Cloud Resource Allocation Orchestrator",
    priority: "CRITICAL",
    status: "ACTIVE_ALIGNMENT",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "Ain Shams, Cairo, and Mansoura universities interconnected to the New Capital Cloud Center.",
      expected_impact: "80% reduction in redundant server procurement costs across public universities."
    }
  },
  {
    intersection_id: "INT-02-SURGICAL-WAITLISTS",
    cabinet_post_id: "CAB-2026-01-25-01",
    mohesr_post_id: "MOHESR-2025-12-22-02",
    cabinet_date: "2026-01-25",
    mohesr_date: "2025-12-22",
    government_direction: "Cabinet urgency on eliminating critical surgical waitlists with real-time bed and surgery coordination between Health and University hospitals.",
    mohesr_direction: "Mechanization of 80 university hospitals with MedNet EHR (37,000 terminals) serving 32 million patients annually.",
    relationship_type: "TYPE C — MOHESR INITIATIVE → GOVERNMENT STRATEGIC SUPPORT",
    technology_category: "HEALTH INFORMATICS & GOVERNMENT INTEGRATION",
    ai_relevance: "Predictive constraint optimization for operating room scheduling and ICU length-of-stay estimation.",
    automation_relevance: "Automated inter-hospital patient dispatch and surgical slot allocation.",
    data_relevance: "MedNet HL7/FHIR telemetry from 80 hospitals linked with the Cabinet Supreme Medical Committee.",
    cross_ministry_relevance: "MOHESR (Supreme Council of University Hospitals) + Ministry of Health + Cabinet Waiting List Directorate.",
    evidence_level: "E1",
    confidence: "Very High",
    identified_gap: "MedNet databases currently operate as local departmental silos within individual university hospitals; no inter-hospital orchestrator shares live surgical theater availability.",
    potential_initiative: "National University Hospital Dynamic Bed, ICU & Surgical Queue Optimizer (INIT-01)",
    priority: "CRITICAL",
    status: "HIGH_PRIORITY_INTERSECTION",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "Ain Shams University Hospitals Cluster (Demerdash, Specialized, Pediatrics).",
      expected_impact: "45% reduction in patient waiting times for open-heart and oncology surgeries."
    }
  },
  {
    intersection_id: "INT-03-DEGREE-EQUIVALENCY",
    cabinet_post_id: "CAB-2025-08-03-01",
    mohesr_post_id: "MOHESR-2025-03-05-02",
    cabinet_date: "2025-08-03",
    mohesr_date: "2025-03-05",
    government_direction: "Cabinet Supreme Committee for Expatriates demands ending paperwork delays for foreign degree equivalencies via inter-agency digital validation.",
    mohesr_direction: "Minister Dr. Ayman Ashour issues binding directive to slash SCU degree equivalency processing down to strictly 15 business days.",
    relationship_type: "TYPE D — SHARED GOVERNMENT PROBLEM",
    technology_category: "DIGITAL SERVICES & AUTOMATION",
    ai_relevance: "Multilingual OCR parsing of foreign transcripts and semantic course syllabus comparison.",
    automation_relevance: "Automated accreditation checks against global university whitelists and pre-scoring of equivalency dossiers.",
    data_relevance: "Encrypted verification channels between SCU, Ministry of Foreign Affairs consular portals, and Cultural Missions.",
    cross_ministry_relevance: "MOHESR (SCU) + Ministry of Foreign Affairs & Expatriates + Egyptian Cultural Missions Abroad.",
    evidence_level: "E1",
    confidence: "Very High",
    identified_gap: "Equivalency academic sub-committees still manually compare hundreds of pages of translated syllabi with Egyptian benchmarks using paper binders.",
    potential_initiative: "Intelligent Foreign Degree & Transcript Equivalency Engine (INIT-03)",
    priority: "CRITICAL",
    status: "URGENT_EXECUTION",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "Engineering and Medicine degrees from UK, Gulf, and Russian universities at SCU headquarters.",
      expected_impact: "Slashing average equivalency review time from 120 days to 14 business days."
    }
  },
  {
    intersection_id: "INT-04-INDUSTRY-ALLIANCES",
    cabinet_post_id: "CAB-2025-09-15-01",
    mohesr_post_id: "MOHESR-2025-09-02-01",
    cabinet_date: "2025-09-15",
    mohesr_date: "2025-09-02",
    government_direction: "Prime Minister tasks ministries to open university testing laboratories to industrial factories benefiting from Golden Licenses to localize manufacturing.",
    mohesr_direction: "Ministerial activation of the 7 Regional Alliances linking university labs and faculty expertise with regional industrial zones.",
    relationship_type: "TYPE B — CABINET DIRECTION → MOHESR OPPORTUNITY",
    technology_category: "RESEARCH TECHNOLOGY & SMART GOVERNMENT",
    ai_relevance: "Semantic vector matching between industrial production bottlenecks and registered university patents/faculty skills.",
    automation_relevance: "Automated digital booking, instrument calibration scheduling, and Meeza e-invoicing for lab tests.",
    data_relevance: "Federated registry of advanced spectrometers, electron microscopes, and pilot plants across universities.",
    cross_ministry_relevance: "MOHESR + Ministry of Industry + Federation of Egyptian Industries + ASRT.",
    evidence_level: "E2",
    confidence: "High",
    identified_gap: "Industrial managers have no unified digital portal to search, compare prices, or reserve specialized instruments in nearby universities.",
    potential_initiative: "National Research-to-Industry Equipment Sharing Exchange (LaaS)",
    priority: "HIGH",
    status: "READY_FOR_CONCEPT_NOTE",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "Greater Cairo Alliance (Cairo, Ain Shams, Helwan) and 6th of October Industrial Zone.",
      expected_impact: "Generating 150M EGP in self-funded university lab revenues and shortening industrial certification cycles."
    }
  },
  {
    intersection_id: "INT-05-DIGITAL-IDENTITY-DEGREES",
    cabinet_post_id: "CAB-2024-07-22-01",
    mohesr_post_id: "MOHESR-2025-06-11-01",
    cabinet_date: "2024-07-22",
    mohesr_date: "2025-06-11",
    government_direction: "Prime Minister mandates integrating university graduation records with the Digital Egypt platform using the National ID to prevent degree forgery.",
    mohesr_direction: "Central E-Tansik platform hardened with National ID verification serving 1.2M applicants annually.",
    relationship_type: "TYPE E — CROSS-MINISTRY OPPORTUNITY",
    technology_category: "DIGITAL IDENTITY & GOVERNMENT INTEGRATION",
    ai_relevance: "Anomaly detection identifying suspicious transcript alterations or mismatched graduation year schemas.",
    automation_relevance: "Instant automated degree validation API for civil service recruitment and private employers via QR codes.",
    data_relevance: "Cryptographically signed alumni database integrated with the Civil Status Authority (الأحوال المدنية).",
    cross_ministry_relevance: "MOHESR + MCIT (Digital Egypt) + Ministry of Interior (Civil Status) + CAOA.",
    evidence_level: "E1",
    confidence: "Very High",
    identified_gap: "Legacy pre-2015 graduation records in many regional universities still exist only as physical paper ledgers (سجلات ورقية) prone to tampering.",
    potential_initiative: "National Cryptographic Degree Registry & Anti-Forgery Verification API",
    priority: "CRITICAL",
    status: "POLICY_APPROVED",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "Graduates of 2020–2025 from Cairo, Alexandria, and Mansoura universities on Digital Egypt.",
      expected_impact: "Instant elimination of paper graduation certificate forgery and 100% automated verification."
    }
  },
  {
    intersection_id: "INT-06-CYBERSECURITY-SOVEREIGNTY",
    cabinet_post_id: "CAB-2024-10-08-01",
    mohesr_post_id: "MOHESR-2025-10-15-01",
    cabinet_date: "2024-10-08",
    mohesr_date: "2025-10-15",
    government_direction: "Cabinet mandates strict EG-CERT compliance and air-gapped protection for critical national assessment and healthcare repositories.",
    mohesr_direction: "E-Exams system operating across 203 faculties with a 1.8M question bank and instant computerized grading.",
    relationship_type: "TYPE F — FUTURE REQUIREMENT SIGNAL",
    technology_category: "CYBERSECURITY & EDUCATIONAL TECHNOLOGY",
    ai_relevance: "Behavioral analytics and AI proctoring anomaly detection during concurrent computerized testing.",
    automation_relevance: "Automated vulnerability scanning and cryptographic air-gap validation for exam vault servers.",
    data_relevance: "Encrypted item vaults holding confidential exam forms for high-stakes medical and engineering cohorts.",
    cross_ministry_relevance: "MOHESR (SCU) + MCIT (EG-CERT / NTRA) + National Security Agencies.",
    evidence_level: "E2",
    confidence: "High",
    identified_gap: "Lack of continuous automated penetration testing and threat intelligence sharing across decentralized university exam centers.",
    potential_initiative: "Unified University Cyber Defense & Exam Vault Shield (Early Warning / Prep)",
    priority: "HIGH",
    status: "PREPARATION_SIGNAL",
    last_updated: "2026-09-18",
    pipeline_stage: {
      pilot: "5 Central Examination Hubs (Ain Shams, Helwan, Benha, Assiut, Alexandria).",
      expected_impact: "Zero-leak guarantee and full compliance with national EG-CERT Grade-1 security standards."
    }
  }
];

export const CROSS_MINISTRY_COLLABORATIONS: CrossMinistryCollaboration[] = [
  {
    id: "COLLAB-01-MOHESR-MCIT",
    title: "MOHESR + MCIT: Sovereign Cloud & AI Talent Factory",
    title_ar: "التعاون بين وزارة التعليم العالي ووزارة الاتصالات: الحوسبة السيادية وكوادر الذكاء الاصطناعي",
    entities: ["وزارة التعليم العالي والبحث العلمي", "وزارة الاتصالات وتكنولوجيا المعلومات"],
    lead_entity: "وزارة الاتصالات وتكنولوجيا المعلومات (منصة الحوسبة) / وزارة التعليم العالي (المحتوى والجامعات)",
    cabinet_mandate: "Cabinet Decree approving the National AI Strategy Phase 2 and National Cloud Computing Backbone migration.",
    mohesr_role: "Providing university faculty, 3.5M students, academic curricula, research datasets, and high-performance computing requirements.",
    data_exchange: "Federated high-speed interconnect between 27 universities and the New Administrative Capital Cloud Center.",
    data_status: "AVAILABLE",
    collaboration_status: "Existing Collaboration",
    joint_platform_candidate: "National Academic AI Cloud (NAIC) Portal",
    security_privacy_considerations: "National data sovereignty, isolation of confidential academic research, zero-trust network access (ZTNA)."
  },
  {
    id: "COLLAB-02-MOHESR-MOH",
    title: "MOHESR + Ministry of Health: Unified Tertiary Care & Surgical Grid",
    title_ar: "التعاون بين وزارة التعليم العالي ووزارة الصحة: الشبكة القومية للجراحات الدقيقة وقوائم الانتظار",
    entities: ["وزارة التعليم العالي والبحث العلمي", "وزارة الصحة والسكان", "الهيئة العامة للرعاية الصحية"],
    lead_entity: "مجلس الوزراء / المجلس الأعلى للمستشفيات الجامعية",
    cabinet_mandate: "Presidential Initiative on Eliminating Surgical Waiting Lists & Universal Health Insurance Phase 2 integration.",
    mohesr_role: "Opening 80 mechanized university hospitals (performing 60%+ of critical cardiac, neuro, and orthopedic surgeries).",
    data_exchange: "Real-time ICU bed occupancy, surgical suite schedule, and emergency patient transfer telemetry.",
    data_status: "REQUIRES AUTHORIZATION",
    collaboration_status: "Potential Collaboration",
    joint_platform_candidate: "National Health Queue & Bed Telemetry Exchange (MedExchange)",
    security_privacy_considerations: "Strict compliance with Egyptian Personal Data Protection Law (Law 151/2020), encrypted patient medical identifiers."
  },
  {
    id: "COLLAB-03-MOHESR-INDUSTRY",
    title: "MOHESR + Ministry of Industry: Applied Laboratory-as-a-Service",
    title_ar: "التعاون بين وزارة التعليم العالي ووزارة الصناعة: منصة المعامل كخدمة وتوطين التصنيع",
    entities: ["وزارة التعليم العالي والبحث العلمي", "وزارة الصناعة", "الهيئة العامة للتنمية الصناعية", "اتحاد الصناعات المصرية"],
    lead_entity: "وزارة التعليم العالي (أمانة التحالفات الإقليمية) بالتنسيق مع التنمية الصناعية",
    cabinet_mandate: "Prime Minister directive to link university research and advanced equipment with Golden License industrial projects.",
    mohesr_role: "Listing all accredited university testing laboratories, spectrometers, cleanrooms, and faculty consulting pools.",
    data_exchange: "Equipment specifications, calibration certifications, testing price lists, and digital test certificate delivery.",
    data_status: "UNKNOWN",
    collaboration_status: "Potential Collaboration",
    joint_platform_candidate: "National Industrial Lab & Applied Patent Gateway (IndustryLink Egypt)",
    security_privacy_considerations: "Proprietary industrial formula confidentiality, intellectual property protection agreements."
  },
  {
    id: "COLLAB-04-MOHESR-MOFA",
    title: "MOHESR + Ministry of Foreign Affairs: Expatriate Academic Credential Gateway",
    title_ar: "التعاون بين وزارة التعليم العالي ووزارة الخارجية والهجرة: البوابة الرقمية الموحدة للشهادات الدولية",
    entities: ["وزارة التعليم العالي والبحث العلمي", "المجلس الأعلى للجامعات", "وزارة الخارجية والهجرة والمصريين بالخارج"],
    lead_entity: "المجلس الأعلى للجامعات (SCU)",
    cabinet_mandate: "Cabinet Supreme Committee for Expatriates resolution mandating digital verification and 15-day SLA for equivalencies.",
    mohesr_role: "Equivalency academic committee evaluation, OCR translation parsing, and curriculum equivalence determination.",
    data_exchange: "Consular attestation records, electronic foreign transcripts, apostille verification tokens.",
    data_status: "REQUIRES AUTHORIZATION",
    collaboration_status: "Potential Collaboration",
    joint_platform_candidate: "SCU-Consular FastTrack Equivalency Hub",
    security_privacy_considerations: "Prevention of fraudulent transcript uploads, international educational data privacy compliance."
  },
  {
    id: "COLLAB-05-MOHESR-CAOA",
    title: "MOHESR + CAOA: Centralized Academic Competency & Career Tracking",
    title_ar: "التعاون بين وزارة التعليم العالي والجهاز المركزي للتنظيم والإدارة: منظومة الكفاءات والجدارات الأكاديمية",
    entities: ["وزارة التعليم العالي والبحث العلمي", "الجهاز المركزي للتنظيم والإدارة (CAOA)"],
    lead_entity: "الجهاز المركزي للتنظيم والإدارة",
    cabinet_mandate: "Government modernization and civil service competency assessment framework.",
    mohesr_role: "Providing question item banks, automated psychometric evaluation metrics, and faculty promotion committee outputs.",
    data_exchange: "Civil service applicant academic transcripts, verified degree records, and standardized testing scores.",
    data_status: "AVAILABLE",
    collaboration_status: "Existing Collaboration",
    joint_platform_candidate: "National Civil Service Academic Credentials Exchange",
    security_privacy_considerations: "Strict confidentiality of civil service assessment benchmarks and anti-tampering logs."
  }
];

export const GOVERNMENT_WIDE_TRENDS: GovernmentWideTrend[] = [
  {
    id: "TREND-01-SOVEREIGN-CLOUD",
    trend_name: "Government-Wide Sovereign Cloud Migration",
    trend_name_ar: "الانتقال الإلزامي للحوسبة السحابية الحكومية السيادية",
    government_signal: "Cabinet orders phasing out legacy departmental on-premise server rooms and migrating all core databases to the National Data Center P1 in the New Administrative Capital.",
    evidence_posts: ["CAB-2026-02-10-01", "MOHESR-2026-01-18-01"],
    mohesr_exposure: "MOHESR manages 27 universities and 80 hospitals each operating separate IT infrastructure, creating urgent demand for standardized multi-tenant cloud architectures.",
    technology_requirement: "Multi-tenant cloud orchestration, containerized microservices, zero-trust network encryption, automated backup replication.",
    proactive_opportunity: "MOHESR should deploy a centralized University Cloud Migration Toolkit rather than allowing individual universities to build separate migration pipelines.",
    priority: "CRITICAL",
    status: "ACTIVE"
  },
  {
    trend_name: "Integration with National Digital Identity & Digital Egypt",
    trend_name_ar: "الربط الشامل بالهوية الرقمية وبوابة مصر الرقمية",
    id: "TREND-02-DIGITAL-IDENTITY",
    government_signal: "Prime Minister instructions to tie all public administrative services, educational credentials, and civic entitlements directly to the 14-digit National ID database.",
    evidence_posts: ["CAB-2024-07-22-01", "MOHESR-2025-06-11-01"],
    mohesr_exposure: "3.5M students, 120k faculty, and millions of graduates must be indexed seamlessly against the Civil Status Authority with zero credential duplication.",
    technology_requirement: "RESTful OAuth2 / OpenID Connect integration with Digital Egypt, cryptographic QR signing for diplomas, automated National ID validation.",
    proactive_opportunity: "Develop a central SCU National Credential Verification API ready to plug into Digital Egypt before mandatory Cabinet auditing begins.",
    priority: "CRITICAL",
    status: "ACTIVE"
  },
  {
    id: "TREND-03-AI-FIRST-GOVERNANCE",
    trend_name: "National AI Adoption & Sectoral Foundation Models",
    trend_name_ar: "تبني الذكاء الاصطناعي في الحوكمة والتحليل التنبؤي",
    government_signal: "Cabinet approval of the National AI Strategy Phase 2 and prioritization of generative and predictive AI in healthcare, agriculture, and public service efficiency.",
    evidence_posts: ["CAB-2025-11-20-01", "MOHESR-2026-01-18-01"],
    mohesr_exposure: "University hospitals generate massive clinical datasets; exam centers possess 1.8M questions; SCU reviews thousands of foreign syllabi.",
    technology_requirement: "Secure domain-specific RAG architectures, localized Arabic LLMs for legal/administrative decrees, predictive clinical queue algorithms.",
    proactive_opportunity: "Establish the MOHESR Sovereign AI Sandbox to benchmark academic models on real ministry workflows under strict data privacy controls.",
    priority: "HIGH",
    status: "EMERGING"
  },
  {
    id: "TREND-04-PAPERLESS-BUREAUCRACY",
    trend_name: "Elimination of Physical Government Paperwork",
    trend_name_ar: "الإلغاء التام للتعاملات الورقية وتعميم التوقيع الإلكتروني",
    government_signal: "Mandatory Cabinet decree prohibiting paper memos and correspondence across New Capital ministries and mandating verified digital signatures.",
    evidence_posts: ["CAB-2025-06-18-01", "MOHESR-2025-04-18-01"],
    mohesr_exposure: "MOHESR headquarters digitized 15M files, but communications with regional faculties and 45 technical institutes remain partially paper-dependent.",
    technology_requirement: "Enterprise Document Management Systems (EDMS), automated document routing workflows, ITIDA-certified electronic signature tokens.",
    proactive_opportunity: "Expand the New Capital Electronic Correspondence System to all university president offices and dean secretariats via a unified web portal.",
    priority: "HIGH",
    status: "ACTIVE"
  },
  {
    id: "TREND-05-INDUSTRY-ACADEMIA-SYNC",
    trend_name: "National Industrial Localization & Import Substitution",
    trend_name_ar: "توجيه البحث العلمي لتوطين الصناعة وبدائل الاستيراد",
    government_signal: "Cabinet directives tying investment incentives and Golden Licenses to the utilization of domestic academic research and university test laboratories.",
    evidence_posts: ["CAB-2025-09-15-01", "MOHESR-2025-09-02-01"],
    mohesr_exposure: "The 7 Regional Alliances require tangible commercialization mechanisms to convert academic papers into industrial prototypes.",
    technology_requirement: "E-Commerce style equipment booking platforms, patent search vector embeddings, Meeza government e-payment gateways.",
    proactive_opportunity: "Package the Laboratory-as-a-Service (LaaS) portal as an official MOHESR deliverable presented directly to the Cabinet Economic Group.",
    priority: "HIGH",
    status: "ACTIVE"
  }
];

export const CABINET_DERIVED_INITIATIVES: CabinetDerivedInitiative[] = [
  {
    initiative_id: "INIT-CAB-01-SURGICAL-GRID",
    initiative_name: "National University Hospital Real-Time Surgical & ICU Telemetry Grid",
    initiative_name_ar: "الشبكة القومية للتحكم اللحظي وتوزيع الجراحات الحرجة بالمستشفيات الجامعية",
    initiative_type: "GOVERNMENT_DERIVED",
    government_evidence: {
      cabinet_post_id: "CAB-2026-01-25-01",
      cabinet_date: "2026-01-25",
      cabinet_statement: "Prime Minister directs immediate digital integration between Health and University hospitals to link ICU telemetry and surgical theaters to eliminate waiting lists."
    },
    mohesr_evidence: {
      mohesr_post_id: "MOHESR-2025-12-22-02",
      mohesr_date: "2025-12-22",
      mohesr_statement: "MOHESR concludes mechanization of 80 hospitals with 37,000 PCs and MedNet, planning expansion to 155 hospitals serving 32M citizens."
    },
    cross_reference_explanation: "Direct intersection between Cabinet's highest healthcare priority (waiting lists) and MOHESR's massive 19B EGP investment in hospital computerization. The system connects the deployed MedNet terminals into a unified national scheduler.",
    problem: "University hospitals perform over 60% of complicated tertiary surgeries in Egypt, but patient referrals and operating theater utilization are coordinated through manual phone calls, leaving some surgical suites idle while others have months of waiting lists.",
    government_objective: "Eliminate citizen wait times for open-heart, oncology, organ transplant, and complex pediatric surgeries across all 27 governorates.",
    mohesr_objective: "Maximize utilization of 80 mechanized university hospitals and demonstrate quantifiable social ROI from the 19B EGP digital healthcare budget.",
    proposed_solution: "A centralized cloud telemetry layer querying deployed MedNet database instances via secure FHIR/HL7 APIs, feeding a dynamic surgery dispatch dashboard that routes waiting list patients to hospitals with confirmed operating room and ICU bed availability.",
    technology_stack: ["FastAPI Microservices", "HL7 / FHIR Gateway", "PostgreSQL / Redis Cache", "Tailwind CSS Operations Dashboard", "Secure VPN Gateway"],
    ai_component: {
      enabled: true,
      description: "Constraint optimization model predicting surgical duration, ICU recovery length of stay, and blood bank availability to build optimal daily operating schedules.",
      is_inferred: true
    },
    automation_component: {
      enabled: true,
      description: "Automated SMS patient scheduling, instant hospital acceptance workflow, and automatic inventory hold for surgical prosthetics."
    },
    data_requirements: {
      required_data: "Real-time bed occupancy status, scheduled surgical slots, surgeon on-call rotas from MedNet instances.",
      readiness: "REQUIRES AUTHORIZATION",
      privacy_safeguards: "Anonymized patient health identifiers, role-based access for chief medical officers only, full compliance with Law 151/2020."
    },
    integrations: ["MedNet Hospital EHR", "Cabinet Supreme Medical Committee Portal", "MOH 137 Emergency Hotline"],
    participating_entities: ["المجلس الأعلى للمستشفيات الجامعية", "رئاسة مجلس الوزراء (لجنة الاستغاثات الطبية)", "مستشفيات جامعات القاهرة وعين شمس وأسيوط والمنصورة"],
    pilot: "Ain Shams University Hospitals (Demerdash, Specialized, Cardiac) linking 40 operating theaters and 120 ICU beds for 90 days.",
    scalability: "Expands across all 80 mechanized hospitals, then to remaining 75 hospitals by end of 2026.",
    dependencies: {
      policy: "Ministerial decree mandating daily telemetry sync from university hospital medical directors.",
      regulations: "Clearance from Supreme Council of University Hospitals data governance committee.",
      infrastructure: "Dedicated fiber/VPN bandwidth connecting local hospital servers to National Cloud.",
      budget: "Funded under the Presidential Healthcare Modernization Allocation."
    },
    risks: ["Initial resistance from hospital administrative staff to report accurate bed availability", "Local hospital network outages"],
    evidence_level: "E1",
    confidence: "Very High",
    priority: "CRITICAL",
    priority_reason: "Supported by direct Prime Minister decree and Level 1 Presidential Initiative.",
    status: "PILOT_READY"
  },
  {
    initiative_id: "INIT-CAB-02-EQUIVALENCY-HUB",
    initiative_name: "Unified Consular & SCU FastTrack Foreign Degree Verification Engine",
    initiative_name_ar: "المنظومة الرقمية الموحدة للفحص اللحظي ومعادلة الشهادات الجامعية الدولية",
    initiative_type: "GOVERNMENT_DERIVED",
    government_evidence: {
      cabinet_post_id: "CAB-2025-08-03-01",
      cabinet_date: "2025-08-03",
      cabinet_statement: "Cabinet Supreme Committee for Expatriates mandates SCU and Foreign Ministry to establish a unified digital window for foreign degree equivalencies with strict SLAs."
    },
    mohesr_evidence: {
      mohesr_post_id: "MOHESR-2025-03-05-02",
      mohesr_date: "2025-03-05",
      mohesr_statement: "Minister Dr. Ayman Ashour instructs SCU equivalency committees to compress foreign degree evaluation to strictly 15 business days."
    },
    cross_reference_explanation: "Cabinet mandate directly validates the Minister's 15-day SLA target by bringing the Ministry of Foreign Affairs and consular missions into an automated digital verification loop.",
    problem: "Tens of thousands of returning Egyptian expatriate graduates from Russia, Gulf states, Europe, and Sudan face 3 to 6 months of manual syllabus comparisons, paper stamps, and consular attestation queues.",
    government_objective: "Provide fast, transparent, digitized public services to Egyptian expatriates and returning students, fulfilling Cabinet citizen-satisfaction commitments.",
    mohesr_objective: "Achieve the 15-day SLA target set by Dr. Ayman Ashour without burdening university professors on equivalency sub-committees with clerical transcription.",
    proposed_solution: "A cloud-based intake and verification portal where applicants submit digital transcripts; an AI OCR engine extracts courses, credit hours, and grades; a semantic matcher benchmarks them against Egyptian national academic reference standards; and automated API checks verify the issuing university's accreditation.",
    technology_stack: ["Document AI / Vision OCR", "Multilingual Vector Embeddings", "FastAPI Python Engine", "PostgreSQL", "Next.js / Tailwind UI"],
    ai_component: {
      enabled: true,
      description: "Semantic course syllabus matching comparing foreign course descriptions in English, French, and Russian with Egyptian bachelor's degree specifications.",
      is_inferred: true
    },
    automation_component: {
      enabled: true,
      description: "Instant university accreditation lookup against international whitelists (UNESCO, WHED, SCU recognized list) and pre-scoring of academic equivalency dossiers."
    },
    data_requirements: {
      required_data: "Scanned academic transcripts, course descriptions, high school certificates, passport verification data.",
      readiness: "AVAILABLE",
      privacy_safeguards: "Encrypted document storage, certified electronic stamps, access restricted to SCU academic examiners."
    },
    integrations: ["Supreme Council of Universities (SCU) Portal", "Ministry of Foreign Affairs Consular Attestation API", "Cultural Missions Abroad Gateway"],
    participating_entities: ["المجلس الأعلى للجامعات (لجان المعادلات)", "وزارة الخارجية والهجرة", "قطاع الشئون الثقافية والبعثات"],
    pilot: "Foreign Engineering and Computer Science degree equivalencies from UK and Gulf universities at SCU headquarters.",
    scalability: "Expands to all scientific, medical, and humanities degree equivalencies nationwide.",
    dependencies: {
      policy: "SCU approval of AI-assisted syllabus similarity scoring as an advisory tool for academic committees.",
      regulations: "Integration protocol between Foreign Ministry consular attestation portal and SCU.",
      infrastructure: "Secure cloud hosting on the New Administrative Capital National Data Center.",
      budget: "Self-sustaining through standard citizen equivalency application fees."
    },
    risks: ["Discrepancies in foreign university course naming conventions", "Low-resolution scanned transcripts"],
    evidence_level: "E1",
    confidence: "Very High",
    priority: "CRITICAL",
    priority_reason: "Directly mandated by the Cabinet Supreme Committee for Expatriates with a binding 15-day SLA.",
    status: "PILOT_READY"
  }
];

export const ANALYST_PROPOSED_INITIATIVES: CabinetDerivedInitiative[] = [
  {
    initiative_id: "INIT-PROP-01-LAB-AS-A-SERVICE",
    initiative_name: "National Applied Laboratory-as-a-Service (LaaS) & Industrial Booking Exchange",
    initiative_name_ar: "المنصة الوطنية للمعامل البحثية كخدمة وتبادل الإمكانات الصناعية والجامعية",
    initiative_type: "ANALYST_PROPOSED",
    government_evidence: {
      cabinet_post_id: "CAB-2025-09-15-01",
      cabinet_date: "2025-09-15",
      cabinet_statement: "Prime Minister instructs linking university laboratories with industrial manufacturing and Golden License factories to localize components."
    },
    mohesr_evidence: {
      mohesr_post_id: "MOHESR-2025-09-02-01",
      mohesr_date: "2025-09-02",
      mohesr_statement: "Minister Dr. Ayman Ashour calls for a shared data platform linking the 7 Regional Alliances with industrial zones and university capabilities."
    },
    cross_reference_explanation: "Analyst-synthesized initiative connecting the Prime Minister's industrial localization drive with Dr. Ayman Ashour's 7 Regional Alliances framework to unlock hundreds of millions of pounds worth of underutilized university laboratory equipment.",
    problem: "Egyptian factory engineers need specialized chemical testing, metallurgical analysis, and prototype stress tests to replace imported components, but they have no visibility into nearby university laboratories that possess the required electron microscopes, spectrometry instruments, and cleanrooms.",
    government_objective: "Accelerate domestic industrial manufacturing, achieve import substitution targets, and commercialize academic patents.",
    mohesr_objective: "Generate self-funded operational revenues for university laboratories and activate the 7 Regional Alliances.",
    proposed_solution: "A unified digital marketplace where accredited university laboratories publish their testing equipment, calibration capabilities, standard prices, and operating hours; private factories can search by ISO test standard, book sample drop-offs, track test stages, and receive cryptographically signed test reports.",
    technology_stack: ["Enterprise Marketplace Engine", "Meeza / e-Finance Payment Gateway", "Digital Signature PKI", "Geospatial Industrial Map"],
    ai_component: {
      enabled: true,
      description: "Natural language search matching factory technical requests with university faculty research specializations and registered patents.",
      is_inferred: true
    },
    automation_component: {
      enabled: true,
      description: "Automated sample tracking barcodes, calendar scheduling for instrument time, and certified digital test report generation."
    },
    data_requirements: {
      required_data: "Catalog of university laboratory instruments, accreditation status (EGAC / ISO 17025), pricing tariffs.",
      readiness: "UNKNOWN",
      privacy_safeguards: "Non-disclosure agreements built into booking workflow to protect proprietary industrial formulas."
    },
    integrations: ["Federation of Egyptian Industries Portal", "Meeza E-Payment Gateway", "ASRT Patent Registry"],
    participating_entities: ["أمانة التحالفات الإقليمية بوزارة التعليم العالي", "اتحاد الصناعات المصرية", "أكاديمية البحث العلمي والتكنولوجيا", "جامعات القاهرة الكبرى والمنطقة الصناعية بـ 6 أكتوبر"],
    pilot: "Greater Cairo Alliance (Cairo, Ain Shams, Helwan universities) and 6th of October Investors Association factories.",
    scalability: "Rolls out across all 7 Regional Alliances (Alexandria, Delta, Suez Canal, Upper Egypt).",
    dependencies: {
      policy: "SCU authorization allowing public university labs to offer commercial testing services to private entities under unified billing.",
      regulations: "Standardized service-level agreements and sample custody protocols.",
      infrastructure: "Integration with Meeza government e-collection accounts for automated revenue distribution.",
      budget: "Low initial setup cost; self-funding through transaction processing margins."
    },
    risks: ["Delays in university laboratory calibration renewals", "Bureaucratic resistance to inter-university price benchmarking"],
    evidence_level: "E4",
    confidence: "High",
    priority: "HIGH",
    priority_reason: "High strategic synergy with Prime Minister's flagship economic priorities and Dr. Ayman Ashour's 2030 strategy.",
    status: "PROPOSED"
  },
  {
    initiative_id: "INIT-PROP-02-ACADEMIC-RAG",
    initiative_name: "Arabic Regulatory & Decree Intelligence AI (Ministerial Counsel RAG)",
    initiative_name_ar: "المساعد الذكي للتشريعات والقرارات الوزارية والمشورة القانونية للجامعات",
    initiative_type: "ANALYST_PROPOSED",
    government_evidence: {
      cabinet_post_id: "CAB-2025-06-18-01",
      cabinet_date: "2025-06-18",
      cabinet_statement: "Cabinet mandates transition to full digital administrative governance and electronic records across all state entities."
    },
    mohesr_evidence: {
      mohesr_post_id: "MOHESR-2025-04-18-01",
      mohesr_date: "2025-04-18",
      mohesr_statement: "MOHESR completes scanning and digitizing 15 million historical documents and ministerial decrees as part of New Capital relocation."
    },
    cross_reference_explanation: "Analyst proposal converting 15 million static scanned documents into an active institutional cognitive asset for ministry legal advisors, university presidents, and Cabinet coordination teams.",
    problem: "Ministry legal advisors and university presidents spend days manually researching conflicting ministerial decrees, SCU resolutions, and State Council (مجلس الدولة) legal opinions dating back decades to resolve tenure disputes, student disciplinary appeals, and procurement disputes.",
    government_objective: "Modernize government administrative decisions, ensure legal consistency, and eliminate bureaucratic friction.",
    mohesr_objective: "Extract maximum strategic value from the 15M digitized historical files at the New Administrative Capital headquarters.",
    proposed_solution: "An air-gapped Enterprise Retrieval-Augmented Generation (RAG) assistant indexing the 15 million scanned pages with OCR and semantic chunking, allowing legal advisors to ask natural language questions in Arabic and receive grounded answers with exact decree numbers, article citations, and PDF source deep-links.",
    technology_stack: ["Sovereign Arabic Embedding Models", "Milvus / pgvector Vector Database", "Local LLM Running on National Cloud", "React Legal Interface"],
    ai_component: {
      enabled: true,
      description: "Arabic legal RAG with strict temperature=0 settings, cross-referencing conflicting decrees and identifying repealed executive regulations.",
      is_inferred: true
    },
    automation_component: {
      enabled: true,
      description: "Automated legal brief draft generation with formatted citations for university legal affairs departments."
    },
    data_requirements: {
      required_data: "Indexed PDF corpus of historical MOHESR decrees, SCU resolutions, and executive regulations.",
      readiness: "AVAILABLE",
      privacy_safeguards: "Role-based access control; classified personnel files segregated from public academic regulations."
    },
    integrations: ["MOHESR Enterprise Document Management System (EDMS)", "Government Electronic Correspondence Bus"],
    participating_entities: ["الإدارة المركزية للشئون القانونية بوزارة التعليم العالي", "المستشار القانوني للوزير", "أمانة المجلس الأعلى للجامعات"],
    pilot: "SCU resolutions and university tenure regulations from 2010 to 2025.",
    scalability: "Expandable to other government ministries facing identical document archive retrieval challenges.",
    dependencies: {
      policy: "Ministerial approval to index non-classified legal archives into the National Cloud compute cluster.",
      regulations: "Legal guidelines affirming that AI outputs serve as advisory research tools, not binding judicial determinations.",
      infrastructure: "Dedicated GPU node on the New Capital Cloud Center.",
      budget: "Modest software deployment cost using open-weights Arabic models."
    },
    risks: ["OCR misreading of faded historical typewriter documents from the 1970s and 1980s", "Model hallucination on ambiguous legal language"],
    evidence_level: "E4",
    confidence: "High",
    priority: "MEDIUM",
    priority_reason: "High operational utility unlocking 15M digitized assets with low technical barrier on sovereign cloud.",
    status: "PROPOSED"
  }
];

export const TIMELINES_DATA = {
  government_priorities: [
    { year: "2021-2022", event: "National Infrastructure & Data Centers Foundation (P1 Inauguration)", level: "Level 1" },
    { year: "2023-2024", event: "Relocation to New Administrative Capital & Mandatory Paperless Civil Service", level: "Level 2" },
    { year: "2024-2025", event: "Universal Health Insurance Rollout & Surgical Waitlist Presidential Mandates", level: "Level 1" },
    { year: "2025-2026", event: "National AI Strategy Phase 2 & Industrial Localization with Golden License", level: "Level 2" },
    { year: "2026+", event: "Sovereign Cloud Migration Deadline & Digital Egypt Identity Federation", level: "Level 1" }
  ],
  mohesr_priorities: [
    { year: "2021-2022", event: "Emergency E-Exam Centers & University Fiber Linkage", level: "Level 2" },
    { year: "2023-2024", event: "Launch of National Strategy 2030 & 7 Regional Alliances", level: "Level 2" },
    { year: "2024-2025", event: "Hospital Mechanization (80 Hospitals / 37k PCs) & 15M Scanned Archives", level: "Level 1" },
    { year: "2025-2026", event: "National Cloud Platform Launch & 15-Day Equivalency SLA Mandate", level: "Level 2" },
    { year: "2026+", event: "Integrated Smart Campuses, Healthcare Optimization, and AI Talent Hubs", level: "Level 3" }
  ],
  intersection_milestones: [
    { date: "2024-07", title: "National ID Degree Fraud Prevention (Cabinet CAB-2024-07-22 + Tansik)", type: "TYPE E" },
    { date: "2025-08", title: "Expatriate Degree Verification Mandate (Cabinet CAB-2025-08-03 + SCU 15-Day SLA)", type: "TYPE D" },
    { date: "2025-09", title: "Industrial Alliances & Lab Integration (Cabinet CAB-2025-09-15 + 7 Regional Alliances)", type: "TYPE B" },
    { date: "2026-01", title: "Surgical Waiting Lists Inter-Hospital Grid (Cabinet CAB-2026-01-25 + MedNet)", type: "TYPE C" },
    { date: "2026-02", title: "Sovereign Cloud Migration & AI Mandate (Cabinet CAB-2026-02-10 + University Cloud)", type: "TYPE A" }
  ]
};
