import * as React from "react";
import { IWord } from "../types";
import WordDisplay from "./WordDisplay";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

export interface IWordListProps {
  words: IWord[];
}

export default class WordList extends React.Component<IWordListProps> {
  constructor(props: IWordListProps) {
    super(props);
  }

  render() {
      return (
            <Table><TableHead><TableCell>Vernacular</TableCell><TableCell>Gloss</TableCell></TableHead>
                {this.props.words.map((item, index) => (
                 <WordDisplay key={index} word={item} />
                ))}
            </Table>
    );
  }
}
