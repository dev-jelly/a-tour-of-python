import React from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import CodeEditor from "./components/editor/code-editor";
import NavBar from "./components/layout/nav-bar";
import gfm from "remark-gfm";
import Markdown from "./components/article/markdown";

const markdown = `
# 안녕 세계!
오른쪽 에디터에 아래 코드를 입력하고, 실행을 눌러보세요!
\`\`\`python
print("안녕 세계!")
\`\`\`
`;

function App() {
  document.onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
    }
  };
  return (
    <div>
      <NavBar />
      <div className={"container mx-auto h-full"}>
        <div className="grid grid-cols-3 h-full">
          <div className="p-4 prose">
            <Markdown plugins={[gfm]}>{markdown}</Markdown>
          </div>
          <div className="p-2 col-span-2">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
