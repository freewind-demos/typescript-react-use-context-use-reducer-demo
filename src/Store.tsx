import React, {useReducer} from "react";
import {StoreContext} from "./StoreContext";

export type Store = {
  message: string
}

export type Action = {
  type: 'set-message',
  newMessage: string
}

function reducer(state: Store, action: Action): Store {
  switch (action.type) {
    case 'set-message':
      return {...state, message: action.newMessage}
  }
}

type Props = {
  initStore: Store,
  children: any,
}

export function WithStore({initStore, children}: Props) {
  const [store, dispatch] = useReducer(reducer, initStore)
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>
}
