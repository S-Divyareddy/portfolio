import React from "react";
// Content is visible immediately; CSS respects the visitor's motion preference.
export function Fade({children}) {
  return <div className="gentle-reveal">{children}</div>;
}
export const Slide = Fade;
