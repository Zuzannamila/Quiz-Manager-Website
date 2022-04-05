export interface IQuiz {
    id: string;
    title: string;
    description: string;
    category: string;
}

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    quiz: IQuiz;
  }
