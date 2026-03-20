export interface IEvent {
    id: number;
    type: string;
    category: "comedy" | "travel" | "fashion" | "technology" | "toys" | "gaming" | "default";
    title?: string;
    mainText: string;
    options?: string[];
    idRightOpt?: number;
    keyword: string;
    reward: string;
}