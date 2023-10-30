export interface Player {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

export interface PlayersData {
  [uid: string]: Player;
}

export interface FilteredDataItem {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  rank: number;
  stars: number;
  subscribed: boolean;
  uid: string;
}

export type FilteredData = FilteredDataItem[];
