import type { TSkill } from "@/types/TSkills";

export interface ISkill {
  id: TSkill["skill"];
  skill: string;
  img: string;
  management: number;
  experience: number;
  color: string;
}
