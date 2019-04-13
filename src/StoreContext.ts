import {createContext} from "react";
import {Store} from "./Store";

export type ContextType = Store & { dispatch: any }

function defaultStoreRequiredButNotUsedInThisCase(): ContextType {
  return undefined as any;
}

export const StoreContext = createContext<ContextType>(defaultStoreRequiredButNotUsedInThisCase());
