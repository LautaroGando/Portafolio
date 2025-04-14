import { IFormPersonal, IFormTeam } from "@/interfaces/IForm";
import { TContact } from "@/types/TContact";

export interface IFormValuesOptionData {
  value: string;
  label: string;
}

export interface IFormValuesData {
  name: string;
  type?: string;
  select?: boolean;
  textarea?: boolean;
  placeholder?: string;
  options?: IFormValuesOptionData[];
}

export interface IFormData {
  id: TContact;
  initialValues: IFormPersonal | IFormTeam;
  title: string;
  formValues: IFormValuesData[];
}
