import React, {useContext} from "react";
import {StoreContext} from "./StoreContext";

export default function Inner() {
  const [store, dispatch] = useContext(StoreContext)

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
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
