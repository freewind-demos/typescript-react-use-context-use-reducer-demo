import {createContext, Dispatch} from "react";
import {Action, Store} from "./Store";

export type ContextType = [Store, Dispatch<Action>]

function defaultStoreRequiredButNotUsedInThisCase(): ContextType {
  return undefined as any;
}

export const StoreContext = createContext<ContextType>(
  // defaultStoreRequiredButNotUsedInThisCase()
  [{message: ''}, () => undefined]
);
