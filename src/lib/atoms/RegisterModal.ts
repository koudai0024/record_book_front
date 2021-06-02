import { atom } from "recoil";

export const RegisterModalState = atom<boolean>({
  key: "RegisterModal",
  default: false,
});
