import { Fraction, Token, TokenAmount } from "@ubeswap/sdk";
import BigNumber from "bignumber.js";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "..";
import { LoanDetails } from "../../constants/MicroLoans";
import { TOKENS_BY_NAME } from "../../constants/Tokens";

import { updateFormField, updateLoanData } from "./actions";

const CREAL = new Token(42220, TOKENS_BY_NAME["CREAL"], 18);

export type MicroLoanDetails = {
  amountOwed: TokenAmount;
  totalBorrowed: TokenAmount;
  amountPaid: TokenAmount;
  deadline: number;
  id: string;
  monthlyRate: Fraction;
};

export const useLoanOpportunities = () =>
  useSelector((state: AppState) =>
    state.microLoans.opportunities.map((loan) => ({
      ...loan,
      amount: new TokenAmount(CREAL, loan.amount),
    }))
  );

export const useUpdateLoan = () => {
  const dispatch = useDispatch();
  return React.useMemo(
    () => (loan: LoanDetails) => dispatch(updateLoanData({ loan })),
    []
  );
};

export const useCrediScore = () =>
  useSelector((state: AppState) => state.microLoans.score);

export const useCurrentLoan = (): MicroLoanDetails =>
  useSelector((state: AppState) =>
    state.microLoans.currentLoan
      ? {
          ...state.microLoans.currentLoan,
          totalBorrowed: new TokenAmount(
            CREAL,
            state.microLoans.currentLoan.totalBorrowed
          ),
          amountOwed: new TokenAmount(
            CREAL,
            state.microLoans.currentLoan.amountOwed
          ),
          amountPaid: new TokenAmount(
            CREAL,
            state.microLoans.currentLoan.amountPaid
          ),
          monthlyRate: new Fraction(
            state.microLoans.currentLoan.monthlyRate,
            new BigNumber("1e+10").toFixed(0)
          ),
        }
      : undefined
  );

export const useEnterField = () => {
  const dispatch = useDispatch();
  return React.useMemo(
    () => (field: string, detail: string | number) =>
      dispatch(updateFormField({ field, detail })),
    []
  );
};

export const useMicroLoanForm = () =>
  useSelector((state: AppState) => state.microLoans.form);
