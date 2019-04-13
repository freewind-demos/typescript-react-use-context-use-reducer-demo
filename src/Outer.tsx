import React, {useContext} from 'react'
import Inner from "./Inner";
import {StoreContext} from "./StoreContext";

export default function Outer() {
  const store = useContext(StoreContext)
  return <div>
    <h1>Outer</h1>
    <div>Context value: {JSON.stringify(store)}</div>
    <Inner/>
  </div>;
};
