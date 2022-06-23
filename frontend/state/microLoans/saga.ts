import { call, put, select, spawn, take } from "redux-saga/effects";

import { AppState } from "..";

import { initUpdateLoanData, updateLoanData } from "./actions";
import { fetchPossibleLoan } from "./updater";

function* fetchLoanInfo() {
  console.log("Fetch Deposited");
  try {
    const wallet = yield select(
      (state: AppState) => state.user?.wallets?.[0]?.address
    );
    if (!wallet) {
      return;
    }
    const loan = yield call(fetchPossibleLoan, { wallet });
    yield put(updateLoanData({ loan }));
  } catch (e) {
    console.error("Failed in fetch farm deposits saga");
    console.error(e);
  }
}

function* microloanSaga() {
  yield take(initUpdateLoanData);
  yield call(fetchLoanInfo);
  yield spawn(microloanSaga);
}

export default microloanSaga;
