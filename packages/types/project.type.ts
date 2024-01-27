export type Project = {
  priority: number;
  name: string;
  description: string;
  logoUrl: string;
  tags: string[];
  status: "standby" | "inProgress" | "done";
  startDate?: string | null;
  endDate?: string | null;
};
