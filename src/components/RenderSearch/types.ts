export interface IRenderData {
  index: number;
  user: {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    rank: number;
    stars: number;
    subscribed: boolean;
    uid: string;
  };
  search: string;
}
