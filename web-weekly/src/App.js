import React from "react";
import { ContextProvider } from "./reducer";

import Counter from "./Counter";
import CounterTest from "./CounterTest";
import Preview from './Preview'
import Portal from './Portal'

const App = () => {

  return (
    <ContextProvider>
      <Counter />
      <CounterTest />

      <Preview />
      <Portal />
    </ContextProvider>
  );
};

export default App;
