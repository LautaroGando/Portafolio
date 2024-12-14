import { ISkill } from "@/interfaces/ISkill";

export interface IMenuSkillsContext {
    menuSkills: boolean;
    filterSkills: ISkill[];
    activeCategory: string;
    handleToggleMenuSkills: () => void;
    handleCloseMenuSkills: () => void;
    handleFilterSkills: (category: string) => void;
};