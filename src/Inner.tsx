import React, {useContext} from "react";
import {StoreContext} from "./StoreContext";

export default function Inner() {
  const store = useContext(StoreContext)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    store.dispatch({
        type: 'set-message',
        newMessage: event.currentTarget.value
      }
    )
  }

  return <div>
    <h2>Inner</h2>
    <div>Context value: {JSON.stringify(store)}</div>
    <input type='text' defaultValue={store.message} onChange={onChange}/>
  </div>
};
