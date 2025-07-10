// src/SampoornaCalculator.jsx
import { useState } from 'react';
import './App.css';

function SampoornaCalculator() {
  const [name, setName] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const baseArea = length * width;
  const extraSpace = baseArea * 0.2;
  const totalSpace = baseArea + extraSpace;
  const pricePerSqM = 5000;
  const quotation = totalSpace * pricePerSqM;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="calculator">
      <h2 style={{ color: "#4caf50", textAlign: "center" }}>🏗️ Sampoorna Builders</h2>
      <form onSubmit={handleSubmit} className="display">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Length (in meters)"
          value={length}
          required
          onChange={(e) => setLength(parseFloat(e.target.value))}
        />
        <input
          type="text"
          placeholder="Width (in meters)"
          value={width}
          required
          onChange={(e) => setWidth(parseFloat(e.target.value))}
        />
        <button type="submit">Get Quotation</button>
      </form>

      {submitted && (
        <div className="result">
          <p>Welcome to Sampoorna Builders, <strong>{name}</strong>!</p>
          <p>Base Area: {baseArea.toFixed(2)} m²</p>
          <p>Extra Space (20%): {extraSpace.toFixed(2)} m²</p>
          <p>Total Area: {totalSpace.toFixed(2)} m²</p>
          <p>Estimated Quotation: ₹{quotation.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default SampoornaCalculator;
