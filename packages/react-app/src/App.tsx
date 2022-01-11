import { sum } from "awesome-sum-lib";

export default function App() {
  const s = sum(1, 1);
  return <div className="App">Sum : {s}</div>;
}
