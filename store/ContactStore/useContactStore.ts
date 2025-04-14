import { create } from "zustand";
import { IContactStoreProps } from "./types";
import type { TContact } from "@/types/TContact";

export const useContactStore = create<IContactStoreProps>((set) => ({
  form: null,
  handleForm: (id: TContact) => set(() => ({ form: id })),
  handleBack: () => set(() => ({ form: null })),
}));
