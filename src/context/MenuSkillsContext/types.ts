import { ISkill } from "@/interfaces/ISkill";

export interface IMenuSkillsContext {
    menuSkills: boolean;
    filterSkills: ISkill[];
    handleToggleMenuSkills: () => void;
    handleCloseMenuSkills: () => void;
    handleFilterSkills: (category: string) => void;
};