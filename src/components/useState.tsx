import React, { useState } from "react";

export function UseState() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
