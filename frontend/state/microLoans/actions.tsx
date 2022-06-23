import { createAction } from "@reduxjs/toolkit";

import { LoanDetails } from "../../constants/MicroLoans";

export const updateLoanData = createAction<{
  loan: LoanDetails;
}>("microLoan/updateLoanData");

export const updateCreditScore = createAction<{
  score: number;
}>("microLoan/updateCreditScore");

export const updateFormField = createAction<{
  field: string;
  detail: string | number;
}>("microLoan/updateFormField");

export const initUpdateLoanData = createAction("microLoan/updateLoanData");
