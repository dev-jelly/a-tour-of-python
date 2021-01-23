import AceEditor from "react-ace/types";
import React from "react";

export default function CodeEditor() {
  const onChange = (value: string) => {};

  return (
    <div>
      <AceEditor
        mode="python"
        theme="github"
        onChange={onChange}
        name="python-code"
        editorProps={{ $blockScrolling: false }}
      />
    </div>
  );
}
