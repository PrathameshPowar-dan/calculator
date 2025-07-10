import { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('= 0');
  const [lastAnswer, setLastAnswer] = useState('');

  const handleClick = (value) => {
    switch (value) {
      case 'AC':
        setExpression('');
        setResult('= 0');
        break;

      case 'DEL':
        setExpression(prev => prev.slice(0, -1));
        break;

      case '=':
        try {
          const formatted = expression
            .replace(/π/g, 'pi')
            .replace(/√/g, 'sqrt')
            .replace(/Ans/g, lastAnswer);

          const evalResult = evaluate(formatted);
          setResult(`= ${evalResult}`);
          setLastAnswer(evalResult);
          setExpression(evalResult.toString());
        } catch (err) {
          setResult('= Error');
        }
        break;

      case 'sin':
      case 'cos':
      case 'tan':
      case 'log':
      case 'ln':
      case 'sqrt':
        setExpression(prev => prev + `${value}(`);
        break;

      case 'π':
      case 'e':
      case '!':
      case '%':
        setExpression(prev => prev + value);
        break;

      case 'Ans':
        setExpression(lastAnswer.toString());
        break;

      default:
        setExpression(prev => prev + value);
    }
  };

  const buttonValues = [
    'AC', 'DEL', '(', ')',
    'sin', 'cos', 'tan', '^',
    'log', 'ln', '√', '!',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'Ans', '+',
    'π', 'e', '%', '='
  ];

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} placeholder="0" readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttonValues.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={btn === '=' ? 'equal' : ''}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
