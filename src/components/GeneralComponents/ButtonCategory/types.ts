type TNameCategory = 'MÁS SOBRE MÍ' | 'HABILIDADES' | 'PROYECTOS' | 'CONTACTO';

export interface IButtonCategoryProps {
  category: TNameCategory;
  link: string;
  linkRef: string;
}
