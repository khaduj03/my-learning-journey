import React from "react";

import "./App.css";
import CounterMemo from "./components/ReactHooks/useMemo";
function App() {
  return (
    <div className="bg-red-500 flex justify-center items-center">
      <CounterMemo />
    </div>
  );
}

export default App;
