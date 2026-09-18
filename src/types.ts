export type HierarchyLevel = 
  | 'LEVEL 1 — PRESIDENTIAL DIRECTIVE'
  | 'LEVEL 2 — MINISTERIAL DIRECTIVE'
  | 'LEVEL 3 — MINISTRY STRATEGY'
  | 'LEVEL 4 — OPERATIONAL NEED';

export type TechnologyRelevance = 
  | 'A. DIRECT TECHNOLOGY RELEVANCE'
  | 'B. INDIRECT TECHNOLOGY RELEVANCE'
  | 'C. STRATEGIC TECHNOLOGY RELEVANCE'
  | 'D. LOW TECHNOLOGY RELEVANCE';

export type AIClassification = 
  | 'EXPLICIT_AI'
  | 'INFERRED_AI'
  | 'NONE';

export type EvidenceLevel = 'E1' | 'E2' | 'E3' | 'E4' | 'E5';

export type ConfidenceScore = 'Very High' | 'High' | 'Medium' | 'Low';

export interface PostRecord {
  post_id: string;
  post_url: string;
  publication_date: string;
  collection_date: string;
  post_title: string;
  post_text_ar: string;
  post_text_en: string;
  media_description: string;
  mentioned_people: string[];
  mentioned_entities: string[];
  mentioned_projects: string[];
  mentioned_programs: string[];
  technology_topics: string[];
  ai_topics: string[];
  automation_topics: string[];
  digital_transformation_topics: string[];
  operational_problems: string[];
  hierarchy_level: HierarchyLevel;
  technology_relevance: TechnologyRelevance;
  ai_classification: AIClassification;
  evidence_level: EvidenceLevel;
  confidence: ConfidenceScore;
  confidence_reason: string;
  related_posts: string[];
  related_initiatives: string[];
  initiative_candidates: string[];
  status: 'ANALYZED' | 'MONITORED' | 'ARCHIVED';
  last_analyzed: string;
}

export interface EvidenceSource {
  post_id: string;
  post_date: string;
  post_url: string;
  relevant_statement: string;
  source: string;
  evidence_level: EvidenceLevel;
}

export interface Initiative {
  id: string;
  name: string;
  arabic_name: string;
  problem: string;
  evidence: EvidenceSource[];
  proposed_solution: string;
  users: string[];
  departments_entities: string[];
  main_features: string[];
  ai_component: {
    what_ai_does: string;
    why_appropriate: string;
    data_needed: string;
    is_essential: boolean;
    is_inferred: boolean; // Must distinguish explicit vs inferred
  };
  automation_component: {
    candidate_process: string;
    current_problem: string;
    manual_steps: string[];
    bottleneck: string;
    automation_opportunity: string;
    expected_benefit: string;
  };
  expected_benefits: string[];
  implementation_difficulty: 'Low' | 'Medium' | 'High' | 'Very High';
  difficulty_reason: string;
  dependencies: {
    data: string;
    regulations: string;
    integrations: string;
    infrastructure: string;
    security: string;
  };
  potential_pilot: string;
  confidence: ConfidenceScore;
  confidence_reason: string;
  category: 'ACTIONABLE_OPPORTUNITY' | 'WORTH_INVESTIGATING';
}

export interface CrossPostInsight {
  id: string;
  theme: string;
  arabic_theme: string;
  related_post_ids: string[];
  common_pattern: string;
  emerging_requirement: string;
  evidence_summary: string;
  potential_interpretation: string;
  possible_technology_opportunity: string;
  confidence_level: ConfidenceScore;
}

export interface ThemeTrend {
  theme: string;
  arabic_theme: string;
  first_seen: string;
  frequency: number;
  recent_activity: 'High' | 'Medium' | 'Low';
  trend: 'Increasing' | 'Stable' | 'Emerging' | 'Declining';
}

// ==========================================
// EGYPTIAN CABINET & CROSS-REFERENCE TYPES
// ==========================================

export type CabinetRelevanceClassification = 
  | 'C0' // No Relevant Connection
  | 'C1' // General Government Relevance
  | 'C2' // Indirect MOHESR Relevance
  | 'C3' // Direct MOHESR Relevance
  | 'C4'; // Immediate MOHESR Action Signal

export type CabinetHierarchyLevel =
  | 'LEVEL 1 — PRESIDENTIAL DIRECTIVE'
  | 'LEVEL 2 — CABINET / PM DIRECTIVE'
  | 'LEVEL 3 — MINISTERIAL IMPLEMENTATION'
  | 'LEVEL 4 — OPERATIONAL OPPORTUNITY';

export type CrossReferenceType =
  | 'TYPE A — DIRECT ALIGNMENT'
  | 'TYPE B — CABINET DIRECTION → MOHESR OPPORTUNITY'
  | 'TYPE C — MOHESR INITIATIVE → GOVERNMENT STRATEGIC SUPPORT'
  | 'TYPE D — SHARED GOVERNMENT PROBLEM'
  | 'TYPE E — CROSS-MINISTRY OPPORTUNITY'
  | 'TYPE F — FUTURE REQUIREMENT SIGNAL';

export type OperationalPriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'MONITOR';

export type DataReadiness = 'AVAILABLE' | 'UNKNOWN' | 'REQUIRES AUTHORIZATION';

export interface CabinetPostRecord {
  cabinet_post_id: string;
  date: string;
  url: string;
  title: string;
  title_ar: string;
  text_ar: string;
  text_en: string;
  hierarchy_level: CabinetHierarchyLevel;
  relevance_classification: CabinetRelevanceClassification;
  technology_categories: string[];
  mentioned_ministries: string[];
  mentioned_entities: string[];
  mentioned_projects: string[];
  national_priorities: string[];
  official_government_signal: string;
  mohesr_implication: string;
  priority: OperationalPriority;
  priority_reason: string;
  evidence_level: EvidenceLevel;
  confidence: ConfidenceScore;
  confidence_reason: string;
  related_mohesr_posts: string[];
  status: 'ANALYZED' | 'MONITORED' | 'ARCHIVED';
  last_analyzed: string;
}

export interface IntersectionRecord {
  intersection_id: string;
  cabinet_post_id: string;
  mohesr_post_id: string;
  cabinet_date: string;
  mohesr_date: string;
  government_direction: string;
  mohesr_direction: string;
  relationship_type: CrossReferenceType;
  technology_category: string;
  ai_relevance: string;
  automation_relevance: string;
  data_relevance: string;
  cross_ministry_relevance: string;
  evidence_level: EvidenceLevel;
  confidence: ConfidenceScore;
  identified_gap: string;
  potential_initiative: string;
  priority: OperationalPriority;
  status: string;
  last_updated: string;
  pipeline_stage?: {
    pilot: string;
    expected_impact: string;
  };
}

export interface CrossMinistryCollaboration {
  id: string;
  title: string;
  title_ar: string;
  entities: string[];
  lead_entity: string;
  cabinet_mandate: string;
  mohesr_role: string;
  data_exchange: string;
  data_status: DataReadiness;
  collaboration_status: 'Existing Collaboration' | 'Potential Collaboration';
  joint_platform_candidate: string;
  security_privacy_considerations: string;
}

export interface GovernmentWideTrend {
  id: string;
  trend_name: string;
  trend_name_ar: string;
  government_signal: string;
  evidence_posts: string[];
  mohesr_exposure: string;
  technology_requirement: string;
  proactive_opportunity: string;
  priority: OperationalPriority;
  status: 'ACTIVE' | 'EMERGING' | 'MONITORED';
}

export interface CabinetDerivedInitiative {
  initiative_id: string;
  initiative_name: string;
  initiative_name_ar: string;
  initiative_type: 'GOVERNMENT_DERIVED' | 'ANALYST_PROPOSED';
  government_evidence: {
    cabinet_post_id: string;
    cabinet_date: string;
    cabinet_statement: string;
  };
  mohesr_evidence: {
    mohesr_post_id: string;
    mohesr_date: string;
    mohesr_statement: string;
  };
  cross_reference_explanation: string;
  problem: string;
  government_objective: string;
  mohesr_objective: string;
  proposed_solution: string;
  technology_stack: string[];
  ai_component: {
    enabled: boolean;
    description: string;
    is_inferred: boolean;
  };
  automation_component: {
    enabled: boolean;
    description: string;
  };
  data_requirements: {
    required_data: string;
    readiness: DataReadiness;
    privacy_safeguards: string;
  };
  integrations: string[];
  participating_entities: string[];
  pilot: string;
  scalability: string;
  dependencies: {
    policy: string;
    regulations: string;
    infrastructure: string;
    budget: string;
  };
  risks: string[];
  evidence_level: EvidenceLevel;
  confidence: ConfidenceScore;
  priority: OperationalPriority;
  priority_reason: string;
  status: 'PROPOSED' | 'UNDER_REVIEW' | 'PILOT_READY';
}
