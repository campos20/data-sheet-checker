import { useState } from "react";
import "./App.css";
import { SheetCompare } from "./component/SheetCompare";

export const App = () => {
  const [content1, setContent1] = useState<string[][]>([]);
  const [content2, setContent2] = useState<string[][]>([]);
  return (
    <div className="App">
      <SheetCompare
        content1={content1}
        content2={content2}
        setContent1={setContent1}
        setContent2={setContent2}
      />
    </div>
  );
};
