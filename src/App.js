import React from "react";
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";

const numState = atom({
  key: "numState",
  default: 0,
});

const Counter = () => {
  const [number, setNumber] = useRecoilState(numState);
  return <button onClick={() => setNumber(number + 1)}>Increment</button>;
};

const Display = () => {
  const number = useRecoilValue(numState);
  return <div>{number}</div>;
};

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Recoil</h1>
        <Counter />
        <Display />
      </div>
    </RecoilRoot>
  );
};

export default App;
