export interface IProjectTechnologyData {
  id: number;
  icon: string;
  technology: string;
}
export interface IProjectsData {
  id: number;
  title: string;
  urlGithub: string;
  href: string;
  img: string;
  description: string;
  technologies: IProjectTechnologyData[];
}
