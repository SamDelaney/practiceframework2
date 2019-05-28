import * as constants from "../constants";
import { Action } from "redux";
import { IWord } from "../types";
import axios from "axios";

const apiUrl = "localhost:27017/v1/collection/";
export const AxiosHeaders = {
  "Access-Control-Allow-Origin": "*"
};

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface AddWord extends ActionWithPayload<IWord> {
  type: constants.ADD_WORD;
  payload: IWord;
}

export type WordAction = AddWord; // | OtherActionInterfaces

//action creator
export function AddWord(word: IWord): AddWord {
  axios.post(apiUrl, word, { headers: AxiosHeaders }).then(function() {
    console.log("word added");
  });
  return { type: constants.ADD_WORD, payload: word };
}
