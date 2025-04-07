import { ISkill } from "@/interfaces/ISkill";
import type { TSkill } from "@/types/TSkills";

export interface ISkillStoreProps {
  skill: TSkill;
  detailSkill: ISkill | null;
  selectedColor: string;
  changeSkill: (skill: TSkill) => void;
  viewDetailSkill: (skillName: string) => void;
}
