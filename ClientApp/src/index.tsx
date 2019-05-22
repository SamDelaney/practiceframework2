import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import { rootReducer } from "./reducers/index";
import { StoreState } from "./types/index";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
export const store: Store<StoreState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();
