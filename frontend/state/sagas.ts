import { spawn } from "redux-saga/effects";

import microloanSaga from "./microLoans/saga";

export default function* rootSaga() {
  yield spawn(microloanSaga);
}
