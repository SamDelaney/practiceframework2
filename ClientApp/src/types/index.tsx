import { LocalizeState } from "react-localize-redux";

export interface AppState {
  store: StoreState;
  localize: LocalizeState;
}

export interface StoreState {
  languageName: string;
  words: {
    vern: string;
    gloss: string;
  }[];
}

export interface IWord {
  vern: string;
  gloss: string;
}

export type MaterialInputHelper =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
