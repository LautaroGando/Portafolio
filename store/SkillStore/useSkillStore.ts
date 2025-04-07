import { create } from "zustand";
import { ISkillStoreProps } from "./types";
import type { TSkill } from "@/types/TSkills";
import { skillData } from "@/data/SkillsComponents/SkillData/skill-data";
import { ISkill } from "@/interfaces/ISkill";

export const useSkillStore = create<ISkillStoreProps>((set) => ({
  skill: {
    id: 1,
    skill: "Lenguajes",
  },
  detailSkill: null,
  selectedColor: '',
  changeSkill: (newSkill: TSkill) =>
    set((state) => {
      if (state.skill.skill === newSkill.skill) return {};
      return { skill: newSkill };
    }),
  viewDetailSkill: (skillName: string) => {
    const selectedSkill = skillData.find(
      (sk: ISkill) => sk.skill === skillName
    );
    set({ detailSkill: selectedSkill });
  },
}));
