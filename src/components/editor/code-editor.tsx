import AceEditor from "react-ace";
import React, {useEffect, useState} from "react";
import "../../index.css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import getConsole from "../../utils/get-console";

type CodeEditorProps = {
  initialCode: string;
};

export default function CodeEditor({ initialCode }: CodeEditorProps) {
    const win = window as any;

    const [code, setCode] = useState(initialCode);
    const [result, setResult] = useState(" ");

    const onChange = (value: string) => {
        setCode(value);
    };

    const run = async () => {
        win.brythonConsole = 'in processing...';
        await (async () => setResult(getConsole(code)))();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setResult(win.brythonConsole)
        }, 250);
        return () => clearInterval(interval);
    }, []);

    document.onkeydown = async (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "s") {
            e.preventDefault();
            await run()
        }
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
        value={code}
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
