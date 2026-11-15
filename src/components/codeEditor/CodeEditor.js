import React from "react";
import {greeting, skillsSection} from "../../portfolio";
export default function CodeEditor() {
  const lines = [
    <span className="code-comment">{"// A little about me"}</span>,
    <span>
      <b>const</b> developer = {"{"}
    </span>,
    <span>
      {" "}
      name: <em>{JSON.stringify(greeting.username)}</em>,
    </span>,
    <span> stack: [</span>,
    ...skillsSection.softwareSkills.slice(0, 4).map(skill => (
      <span>
        {" "}
        <em>{JSON.stringify(skill.skillName)}</em>,
      </span>
    )),
    <span> ],</span>,
    <span>
      {" "}
      passion: <em>"Building thoughtful experiences"</em>
    </span>,
    <span>{"}"};</span>,
    <span> </span>,
    <span>
      <b>export default</b> developer;
    </span>
  ];
  return (
    <div
      className="code-editor"
      role="img"
      aria-label={`Code editor showing ${greeting.username}'s name and technology stack`}
    >
      <div className="editor-title">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>portfolio.js</span>
        <span className="editor-symbol">{"</>"}</span>
      </div>
      <div className="editor-tab">
        JS <span>portfolio.js</span>
      </div>
      <div className="editor-code" aria-hidden="true">
        {lines.map((line, i) => (
          <div className="code-line" key={i}>
            <span className="line-number">{i + 1}</span>
            <code>{line}</code>
          </div>
        ))}
      </div>
      <div className="editor-status">
        <span>⎇ main</span>
        <span>JavaScript · UTF-8</span>
      </div>
    </div>
  );
}
