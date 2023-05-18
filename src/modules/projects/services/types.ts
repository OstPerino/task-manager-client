import { Task } from "@/modules/tasks/types/types";

export interface Project {
  id: number;
  name: string;
  description: string;
  boards: Task[];
}
