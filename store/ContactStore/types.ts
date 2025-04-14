import type { TContact } from "@/types/TContact";

export interface IContactStoreProps {
  form: TContact | null;
  handleForm: (id: TContact) => void;
  handleBack: () => void;
}
