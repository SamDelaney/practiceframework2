import * as React from "react";
import "./EntryForm.css";
import { MaterialInputHelper } from "../types";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

export interface IEntryFormProps {
  name: string;
  AddWord?: (vern: string, gloss: string) => void;
}

interface IEntryFormState {
  inputVern: string;
  inputGloss: string;
}

export default class EntryForm extends React.Component<
  IEntryFormProps,
  IEntryFormState
> {
  constructor(props: IEntryFormProps) {
    super(props);

    // This is to bind context when passing onClick as a callback
    this.onClick = this.onClick.bind(this);

    //default state
    this.state = {
      inputVern: "",
      inputGloss: ""
    };
  }

  onClick() {
    if (this.props.AddWord) {
      this.props.AddWord(this.state.inputVern, this.state.inputGloss);
    }
  }

  updateVern(evt: React.ChangeEvent<MaterialInputHelper>) {
    const newValue = evt.target.value;
    this.setState(state => ({
      inputVern: newValue
    }));
  }

  updateGloss(evt: React.ChangeEvent<MaterialInputHelper>) {
    const newValue = evt.target.value;
    this.setState(state => ({
      inputGloss: newValue
    }));
  }

  render() {
    return (
      <div>
        <h2>Enter {this.props.name} Words:</h2>

        <TextField
          className="textField"
          label="Vernacular"
          onChange={evt => this.updateVern(evt)}
          margin="normal"
        />
        <TextField
          className="textField"
          label="Gloss"
          onChange={evt => this.updateGloss(evt)}
          margin="normal"
        />
        <br />
        <Button onClick={this.onClick}> Add Word </Button>
      </div>
    );
  }
}
