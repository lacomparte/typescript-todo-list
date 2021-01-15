import * as React from "react";
import { useState } from "react";

interface CounterProps {
  startNumber: number;
}

const Counter: React.FC<CounterProps> = props => {
  const { startNumber } = props;
  const [number, setNumber] = useState(startNumber);
  const handlePlusClick = () => {
    setNumber(number + 1);
  }
  const handleMinusClick = () => {
    setNumber(number - 1);
  }

  return (
    <section>
      섹션
      <div>
        <p>{number}</p>
        <button onClick={handlePlusClick}>증가</button>
        <button onClick={handleMinusClick}>감소</button>
      </div>
    </section>
  );
}

export default Counter;