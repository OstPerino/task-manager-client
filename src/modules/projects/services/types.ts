import { Task } from "@/modules/tasks/types/types";

export interface Project {
  id: number;
  title: string;
  description: string;
  boards: Task[];
}
