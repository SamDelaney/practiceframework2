import * as React from "react";
import { IWord } from "../types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export interface IWordDisplayProps {
  word: IWord;
}

export default class WordDisplay extends React.Component<IWordDisplayProps> {
  constructor(props: IWordDisplayProps) {
    super(props);
  }

  render() {
      return (
        <TableRow>
        <TableCell>{this.props.word.vern}</TableCell>
        <TableCell>{this.props.word.gloss}</TableCell>
        </TableRow>
    );
  }
}
