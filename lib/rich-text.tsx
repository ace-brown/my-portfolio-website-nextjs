import { Fragment } from "react";

/** Renders "**bold**" segments of a plain string as <strong>. */
export function richText(text: string) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index}>{part}</strong>
      ) : (
        <Fragment key={index}>{part}</Fragment>
      ),
    );
}
