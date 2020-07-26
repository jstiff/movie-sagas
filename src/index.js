import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
//import { get } from "../server/routes/movies.router";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("NEED_MOVIES", getMoviesFromServer);
  yield takeEvery("MAKE_CHANGES", editDetailsPage);
  yield takeEvery("NEED_GENRES", findSomeGenres);
}

function* findSomeGenres(action) {
  console.log("findGeneres", action);
  try {
    const response = yield Axios.get(`/genres/${action.payload}`);
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    console.log("findSomeGenres", error);
  }
}

function* getMoviesFromServer(action) {
  try {
    const response = yield Axios.get("/movies/");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.log("error Inside GetMoviesFromServer!!!", error);
  }
}
function* editDetailsPage(action) {
  try {
    console.log("EDIT SAGA Details", action.payload.id);
    yield Axios({
      method: "PUT",
      url: `/edit/${action.payload.id}`,
      payload: { description: action.payload.description },
    });
  } catch (error) {
    console.log("ERROR in editDetailsPage", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
