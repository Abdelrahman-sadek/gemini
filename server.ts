import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy initialization for Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "MOHESR Digital Transformation Agents Server" });
});

// AI Plan & Recommendations Generation Endpoint
app.post("/api/generate-ai-plan", async (req, res) => {
  try {
    const { topicTitle, topicType, planType, context, lang } = req.body;
    const client = getAIClient();

    const isArabic = lang === 'ar';
    const planTypeLabel = 
      planType === 'implementation' 
        ? (isArabic ? 'خطة تنفيذ وتشغيل استراتيجية شاملة (30-60-90 يوماً)' : 'Comprehensive 30-60-90 Day Operational Implementation Roadmap')
        : planType === 'recommendations'
        ? (isArabic ? 'توصيات استراتيجية تنفيذية لقيادات وزارة التعليم العالي ومجلس الوزراء' : 'Executive Strategic Recommendations for MOHESR Leadership & Cabinet')
        : planType === 'risk_mitigation'
        ? (isArabic ? 'مصفوفة تقييم وإدارة المخاطر والتحوط والامتثال للسيادة الرقمية' : 'Risk Assessment, Data Sovereignty & Strategic Mitigation Matrix')
        : (isArabic ? 'المعمارية التقنية، تكامل قواعد البيانات، ونموذج تدفق البيانات' : 'Technical System Architecture & Inter-Agency Data Flow Model');

    if (client) {
      const prompt = `You are the Chief Digital Transformation & Strategy Advisor to the Minister of Higher Education and Scientific Research (MOHESR) and the Cabinet of Egypt.
Task: Generate an authoritative, highly detailed, realistic, and actionable ${planTypeLabel} for the following Egyptian government topic:

Topic Title: ${topicTitle}
Topic Category: ${topicType}
Context Details: ${JSON.stringify(context, null, 2)}
Output Language: ${isArabic ? 'Arabic (العربية الفصحى الحكومية الرسمية الرصينة)' : 'English'}

Provide a well-structured markdown report including:
1. Executive Strategic Intent & Objective (الهدف والغاية الاستراتيجية)
2. Detailed ${planTypeLabel} with concrete numbered action points
3. Inter-Agency Dependencies & Responsible Stakeholders (e.g. MOHESR, Cabinet, MCIT, Ministry of Health, Universities, SCU)
4. Technology, Sovereign Cloud (P1 Center), AI & Data Infrastructure Requirements
5. Risk Safeguards & Compliance with Egyptian Personal Data Protection Law (Law 151/2020)
6. Quantifiable KPIs & Expected National Impact within 12 Months

Keep the tone professional, authoritative, structured, and immediately actionable for ministerial leadership.`;

      const response = await client.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });

      const generatedText = response.text || "";
      return res.json({ 
        success: true, 
        planText: generatedText,
        source: "gemini-3.8-flash"
      });
    }

    // High quality contextual fallback if GEMINI_API_KEY is not configured
    const fallbackText = isArabic
      ? `### ${planTypeLabel}
#### الموضوع: ${topicTitle}

**1. الهدف والغاية الاستراتيجية (Executive Intent):**
- تحقيق التكامل الميداني مع توجيهات مجلس الوزراء ورؤية مصر 2030 للتحول الرقمي المستدام.
- تسريع وتيرة الأتمتة بالجامعات الحكومية الـ 27 والمستشفيات الجامعية التابعة والمجلس الأعلى للجامعات.

**2. محاور خطة العمل والتوصيات التنفيذية:**
- **المرحلة الأولى (أول 30 يوماً):** إطلاق لجنة فنية مشتركة بين الإدارة المركزية للتحول الرقمي بوزارة التعليم العالي والجهات الشريكة (مجلس الوزراء / الاتصالات / الصحة).
- **المرحلة الثانية (60 يوماً):** إعداد بيئة اختبار تجريبية (Sandboxed Pilot) واستكمال الربط الشبكي مع مركز البيانات والحوسبة السحابية الحكومي (P1).
- **المرحلة الثالثة (90 يوماً):** التعميم المرحلي، وتدريب الكوادر الأكاديمية والتقنية، وإصدار دليل إجراءات تشغيلي موحد معتمد.

**3. متطلبات البنية الرقمية والتكامل:**
- تفعيل واجهات برمجة التطبيقات الآمنة (Secure REST / FHIR / HL7 APIs) لتبادل البيانات دون وسيط ورقي.
- تطبيق التشفير المعتمد وشهادات التوقيع الإلكتروني الصادرة من هيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA).
- الامتثال الكامل لقانون حماية البيانات الشخصية رقم 151 لسنة 2020 ومعايير المركز الوطني للاستعداد لطوارئ الحاسبات (EG-CERT).

**4. مؤشرات الأداء المستهدفة (KPIs):**
- خفض زمن الاستجابة للإجراءات الحكومية بنسبة لا تقل عن 65%.
- القضاء التام على الفجوات البينية بين الإدارات وتحقيق نسبة رضا مستفيدين تتجاوز 90%.`
      : `### ${planTypeLabel}
#### Topic: ${topicTitle}

**1. Executive Strategic Intent:**
- Operationalize immediate alignment with Egyptian Cabinet directives and Egypt Vision 2030 for sustainable digital governance.
- Modernize workflows across 27 public universities, university hospitals, and the Supreme Council of Universities (SCU).

**2. Core Actionable Roadmap:**
- **Phase 1 (Days 1–30):** Establish a joint steering taskforce between MOHESR Digital Transformation Directorate and key partner ministries.
- **Phase 2 (Days 31–60):** Deploy a secured sandboxed pilot interconnected with the National Government Cloud (P1 Center) in the New Administrative Capital.
- **Phase 3 (Days 61–90):** Nationwide rollout, administrator certification, and publication of certified Standard Operating Procedures (SOPs).

**3. Infrastructure & Inter-Agency Interoperability:**
- Deploy sovereign REST/FHIR/HL7 API gateways eliminating physical paperwork.
- Enforce cryptographic validation and ITIDA-accredited digital signatures.
- Ensure strict adherence to Egyptian Personal Data Protection Law (Law 151/2020) and EG-CERT sovereign security protocols.

**4. Target Key Performance Indicators (KPIs):**
- Reduce inter-agency processing latency by at least 65%.
- Achieve 100% auditable digital trace with over 90% stakeholder satisfaction.`;

    return res.json({
      success: true,
      planText: fallbackText,
      source: "curated_strategic_framework"
    });
  } catch (error: any) {
    console.error("Error generating AI plan:", error);
    res.status(500).json({ 
      success: false, 
      error: error?.message || "Failed to generate AI plan" 
    });
  }
});

// Vite middleware for development vs static serve for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MOHESR Digital Transformation Agents server running on http://localhost:${PORT}`);
  });
}

startServer();
