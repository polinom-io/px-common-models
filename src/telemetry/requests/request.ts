export interface RequestTelemetry {
  url: string;
  method: string;
  status: number;
  timestamp: string;
  duration: string;
  isSuccessful: boolean;
}
