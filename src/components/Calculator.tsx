import Button from './Button';
import Display from './Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const keyboardEl = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['C', '0', '=', '/']
  ];

  const handleClick = (keyValue: string) => {
    if (keyValue === 'C') {
      setCount('0');
    } else if (keyValue === '=') {
      try {
        setCount(evaluate(count));
      } catch (err) {
        if (err instanceof Error) {
          setCount("It's not a valid calculation");
          console.error(err);
        } else {
          console.log('Unknown error', err);
        }
      }
    } else {
      setCount((prev) => prev + keyValue);
    }
  };

  const [count, setCount] = useState('0');

  return (
    <div className="w-xs border-2 border-gray-400 rounded-2xl flex flex-col items-center md:w-xl bg-pink-100">
      <Display value={count} />
      {keyboardEl.map((row, index) => (
        <div key={index} className="flex w-full justify-around gap-2 p-2">
          {row.map((key) => (
            <Button handleClick={() => handleClick(key)} key={key}>
              {key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
