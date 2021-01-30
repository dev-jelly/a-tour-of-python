import React, { useEffect, useState } from "react";
import "./App.css";
import CodeEditor from "./components/editor/code-editor";
import NavBar from "./components/layout/nav-bar";
import gfm from "remark-gfm";
import Markdown from "./components/article/markdown";
import { useMarkdown } from "./utils/get-markdown";
import { useCode } from "./utils/get-code";

const supportLangs = ["ko-kr"];

const extractOnlyHash = (hash: string) => {
  return hash.split("#")[1].split("?")[0];
};
const getHashByUrl = () => {
  const hash = new URL(window.location.href).hash;
  if (!hash) return "";
  return extractOnlyHash(new URL(window.location.href).hash ?? "");
};

function App() {
  const [hash, setHash] = useState(getHashByUrl());
  const [lang, setLang] = useState(
    window.navigator.language.toLowerCase() ?? "ko-kr"
  );

  useEffect(() => {
    if (!supportLangs.includes(lang)) {
      setLang("ko-kr");
    }
  }, [lang]);

  useEffect(() => {
    if (!hash && lang) {
      setHash(`intro/hello-world`);
    }
  }, [hash, lang]);

  window.onhashchange = () => {
    setHash(getHashByUrl());
  };

  const markdown = useMarkdown(lang, hash);
  const code = useCode(lang, hash);

  if (markdown.loading || code.loading) {
    return <p>Loading...</p>;
  }

  if (markdown.error || !markdown.value) {
    return <p>There is Something Wrong</p>;
  }

  return (
    <div>
      <NavBar />
      <div className={"container mx-auto h-full"}>
        <div className="grid grid-cols-3 h-full">
          <div className="p-4 prose">
            <Markdown plugins={[gfm]}>{markdown.value}</Markdown>
          </div>
          <div className="p-2 col-span-2">
            <CodeEditor initialCode={code.value ?? ""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
