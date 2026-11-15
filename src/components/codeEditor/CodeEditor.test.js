import React from "react";
import ReactDOM from "react-dom";
import CodeEditor from "./CodeEditor";
import {greeting, skillsSection} from "../../portfolio";

it("reflects configured portfolio content and provides a text alternative", () => {
  const container = document.createElement("div");
  ReactDOM.render(<CodeEditor />, container);
  expect(container.textContent).toContain(greeting.username);
  skillsSection.softwareSkills.slice(0, 4).forEach(skill => {
    expect(container.textContent).toContain(skill.skillName);
  });
  expect(
    container.querySelector('[role="img"]').getAttribute("aria-label")
  ).toContain(greeting.username);
  ReactDOM.unmountComponentAtNode(container);
});
