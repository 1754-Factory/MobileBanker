import { createReducer } from "@reduxjs/toolkit";
import BigNumber from "bignumber.js";

import {
  LoanDetails,
  LoanFormFields,
  LoanType,
  MicroLoanInfo,
} from "../../constants/MicroLoans";

import { updateCreditScore, updateFormField, updateLoanData } from "./actions";

export type MicroLoanState = {
  opportunities: MicroLoanInfo[];
  currentLoan?: LoanDetails;
  score?: number;
  form: LoanFormFields;
};

const initialOpportunities: MicroLoanInfo[] = [
  {
    name: "Starter Loan",
    duration: 60 * 24 * 60 * 60,
    monthlyRate: "1000000000",
    requiredPoints: 0,
    amount: new BigNumber("10e+18").toFixed(0),
    type: LoanType.Starter,
  },
  {
    name: "Junior Loan",
    duration: 20 * 24 * 60 * 60,
    monthlyRate: "1000000000",
    requiredPoints: 600,
    amount: new BigNumber("30e+18").toFixed(0),
    type: LoanType.Junior,
  },
  {
    name: "Senior Loan",
    duration: 20 * 24 * 60 * 60,
    monthlyRate: "5000000000",
    requiredPoints: 700,
    amount: new BigNumber("10e+18").toFixed(0),
    type: LoanType.Senior,
  },
];

const initialState: MicroLoanState = {
  opportunities: initialOpportunities,
  form: {},
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateCreditScore, (state, { payload: { score } }) => {
      state.score = score;
    })
    .addCase(updateLoanData, (state, { payload: { loan } }) => {
      state.currentLoan = loan;
    })
    .addCase(updateFormField, (state, { payload: { field, detail } }) => {
      state.form[field] = detail;
    })
);
