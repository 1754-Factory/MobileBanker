import React from "react";

import junior_plant from "../../assets/image/loans/junior-plant.svg";
import senior_plant from "../../assets/image/loans/senior-plant.svg";
import starter_plant from "../../assets/image/loans/starter-plant.svg";

export enum LoanPurpose {
  Food,
  Water,
  Health,
  School,
  Bills,
  Transport,
  Other,
}

export enum LoanType {
  Starter = "Starter",
  Junior = "Junior",
  Senior = "Senior",
}

export interface MicroLoanInfo {
  name: string;
  duration: number;
  monthlyRate: string;
  amount: string;
  requiredPoints: number;
  type: LoanType;
}

export interface LoanDetails {
  id: string;
  deadline: number;
  totalBorrowed: string;
  amountPaid: string;
  monthlyRate: string;
  amountOwed: string;
}

export interface LoanFormFields {
  purpose?: LoanPurpose;
  estimatedTimeToRepay?: number;
  estNumberOfPayments?: number;
}

export const LoanTypeToSVG: { [t in LoanType]: React.ReactElement } = {
  [LoanType.Starter]: starter_plant,
  [LoanType.Junior]: junior_plant,
  [LoanType.Senior]: senior_plant,
};
