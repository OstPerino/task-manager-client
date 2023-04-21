
export interface Task {
  title: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  boards: Task[];
}