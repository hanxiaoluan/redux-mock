import React from "react";
import { createStore } from "redux";
import Counter from "./components/Counter";
import "./App.css";
import counter from "./reducers";

export let store = createStore(counter);

function App() {
  return (
    <div className="App">
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </div>
  );
}

export default App;
