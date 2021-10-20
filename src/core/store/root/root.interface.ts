import { CheckingAccountState } from "../../../features/checkingAccount";

export interface RootState {
  error: Error | string | null;
  checkingAccount: CheckingAccountState;
}
