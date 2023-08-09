export type ActivityType = "daily" | "weekly" | "monthly";

export interface Activity {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    },
    weekly: {
      current: number;
      previous: number;
    },
    monthly: {
      current: number;
      previous: number;
    }
  },
  type?: ActivityType;
  color?: string;
  icon?: number;
}