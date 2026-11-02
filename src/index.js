import { css } from "@emotion/react";

// 1. Descendant selector: the space before `:` is significant.
export const descendantPseudo = css`
  & :first-child {
    color: red;
  }
`;

// 2. Whitespace inside a quoted string is content, not formatting.
export const contentString = css`
  &::before {
    content: "Note: a, b";
  }
`;

// 3. Unquoted protocol-relative URL is treated as a `//` line comment.
export const protocolRelativeUrl = css`
  background: url(//cdn.example.com/a.png);
  color: red;
`;
