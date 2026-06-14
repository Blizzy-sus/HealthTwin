// ─── Typed API Service ──────────────────────────────────────────────────────
// Connects to the FastAPI backend at http://localhost:8000
// All interfaces map 1-to-1 with the backend Pydantic schemas in handoff.md

const BASE_URL = (import.meta as any).env?.VITE_API_BASE ?? 'http://localhost:8000';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, options);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// ─── Response types ──────────────────────────────────────────────────────────

export interface UserResponse {
  id: string;
  name: string;
  age: number;
}

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

export interface MetricLogRequest {
  user_id: string;
  metric_name: string;
  value: number;
  recorded_date: string;
}

export interface MetricResponse {
  id: string;
  user_id: string;
  metric_name: string;
  value: number;
  recorded_date: string;
}

export interface ReportValue {
  name: string;
  value: string;
  plain_english: string;
  status: string; // "normal" | "above_range" | "below_range"
}

export interface ReportTranslation {
  values: ReportValue[];
  summary: string;
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
  status: 'green' | 'yellow' | 'red';
  reason: string;
}

export interface FamilyDashboard {
  guardian_id: string;
  members: FamilyMember[];
}

// ─── API calls ───────────────────────────────────────────────────────────────

// Dashboard → GET /twin/demo-user-001/status
// Twin Status → GET /twin/demo-user-001/status
export const getTwinStatus = (userId = 'demo-user-001'): Promise<TwinStatus> =>
  request<TwinStatus>(`/twin/${userId}/status`);

// Log Metrics → POST /twin/metrics/log
export const logMetric = (body: MetricLogRequest): Promise<MetricResponse> =>
  request<MetricResponse>('/twin/metrics/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

// Reports → POST /reports/upload  (multipart)
export const uploadReport = (file: File): Promise<ReportTranslation> => {
  const form = new FormData();
  form.append('file', file);
  return request<ReportTranslation>('/reports/upload', { method: 'POST', body: form });
};

// Simulator → POST /simulator/forecast
export const getForecast = (
  userId = 'demo-user-001',
  lifestyleChanges: Record<string, number> = { walk_minutes: 30, weight_loss_kg: 5 }
): Promise<ForecastResponse> =>
  request<ForecastResponse>('/simulator/forecast', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: userId, lifestyle_changes: lifestyleChanges }),
  });

// Family → GET /family/demo-user-001/dashboard
export const getFamilyDashboard = (guardianId = 'demo-user-001'): Promise<FamilyDashboard> =>
  request<FamilyDashboard>(`/family/${guardianId}/dashboard`);
