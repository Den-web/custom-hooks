import React from 'react';
import useClipy from "use-clippy";

export function UseClippy() {
  const [clipboard, setClipboard] = useClipy();

  return (
    <div>
      <div>Clipboard</div>
      <div>{clipboard}</div>

      <button onClick={() => setClipboard("nnamdi")}>Set Clipboard</button>
    </div>
  )
}
