export interface IEvent {
    id: number;
    type: string;
    category: string;
    mainText: string;
    options?: string[];
    idRightOpt?: number;
    keyword: string;
    reward: string;
}