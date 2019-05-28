import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  withLocalize,
  LocalizeContextProps,
  setActiveLanguage
} from "react-localize-redux";
import globalTranslation from "./global.json";
import EntryForm from "../containers/EntryFormContainer";
import WordList from "../containers/WordListContainer";

class Localizer extends React.Component<LocalizeContextProps> {
  constructor(props: LocalizeContextProps) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "French", code: "fr" }
      ],
      translation: globalTranslation,
      options: { renderToStaticMarkup }
    });
  }

  render() {
    return (
      <div>
        <EntryForm />
        <WordList />
      </div>
    );
  }
}

export default withLocalize(Localizer);
