import AceEditor from "react-ace";
import React, { useState } from "react";
import "../../index.css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import getConsole from "../../utils/get-console";

export default function CodeEditor() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const onChange = (value: string) => {
    setCode(value);
  };

  const run = () => {
    setResult(getConsole(code));
  };

  return (
    <div className={"space-y-0.5"}>
      <button
        className={"m-1 text-xl bg-blue-600 py-1 text-white w-20"}
        onClick={run}
      >
        실행
      </button>
      <AceEditor
        width={"100%"}
        wrapEnabled={true}
        mode="python"
        theme="github"
        onChange={onChange}
        name="python-code"
        editorProps={{ $blockScrolling: false }}
      />
      <hr />
      <pre className={"text-white bg-black m"} id={"result"}>
        {result}
      </pre>
    </div>
  );
}
