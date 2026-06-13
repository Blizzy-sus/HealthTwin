import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:8000',
});

export interface Baseline {
  metric_name: string;
  average: number;
  latest: number;
  data_points: number;
}

export interface TrendAlert {
  metric_name: string;
  direction: string;
  consecutive_days: number;
  deviation_pct: number;
  message: string;
}

export interface TwinStatus {
  user_id: string;
  user_name: string;
  baselines: Baseline[];
  trend_alerts: TrendAlert[];
  deviation_summary: string;
}

export interface MetricResponse {
  id: string;
  user_id: string;
  metric_name: string;
  value: number;
  recorded_date: string;
}

export interface ReportTranslationValue {
  name: string;
  value: string;
  plain_english: string;
  status: string;
}

export interface ReportTranslation {
  values: ReportTranslationValue[];
  summary: string;
}

export interface SymptomAnalysisPattern {
  pattern: string;
  resembles: string;
  recommended_test: string;
  urgency: string;
}

export interface SymptomAnalysisResponse {
  analysis: SymptomAnalysisPattern[];
  disclaimer: string;
}

export interface ForecastScenario {
  label: string;
  projected_risks: Record<string, number>;
  health_age_estimate: number;
  description: string;
}

export interface ForecastResponse {
  user_id: string;
  current_age: number;
  scenario_a: ForecastScenario;
  scenario_b: ForecastScenario;
  disclaimer: string;
}

export interface FamilyMember {
  name: string;
  status: string;
  reason: string;
}

export interface FamilyDashboard {
  guardian_id: string;
  members: FamilyMember[];
}

export const twinApi = {
  getTwinStatus: async (userId: string) => {
    const { data } = await api.get<TwinStatus>(`/twin/${userId}/status`);
    return data;
  },
  logMetric: async (userId: string, metricName: string, value: number, recordedDate: string) => {
    const { data } = await api.post<MetricResponse>(`/twin/metrics/log`, {
      user_id: userId,
      metric_name: metricName,
      value: value,
      recorded_date: recordedDate,
    });
    return data;
  },
  uploadReport: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await api.post<ReportTranslation>(`/reports/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  analyzeSymptoms: async (symptoms: string) => {
    const { data } = await api.post<SymptomAnalysisResponse>(`/symptoms/analyze`, { symptoms });
    return data;
  },
  getForecast: async (userId: string, lifestyleChanges: Record<string, any>) => {
    const { data } = await api.post<ForecastResponse>(`/simulator/forecast`, {
      user_id: userId,
      lifestyle_changes: lifestyleChanges,
    });
    return data;
  },
  getFamilyDashboard: async (guardianId: string) => {
    const { data } = await api.get<FamilyDashboard>(`/family/${guardianId}/dashboard`);
    return data;
  },
};
