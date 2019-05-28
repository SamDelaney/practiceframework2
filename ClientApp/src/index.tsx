import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { LocalizeProvider, localizeReducer } from "react-localize-redux";
import { createStore, Store, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";

import "./index.css";
import App from "./App";
import { storeReducer } from "./reducers/index";
import { StoreState, AppState } from "./types/index";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const rootReducer = combineReducers({
  store: storeReducer,
  localize: localizeReducer
});

export const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </LocalizeProvider>
  </Provider>,
  rootElement
);

registerServiceWorker();
