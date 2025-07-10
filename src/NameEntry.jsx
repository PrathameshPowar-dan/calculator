import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './samp.css';

function NameEntry() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/random/dimensions", { state: { name } });
  };

  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="public\building.mp4" type="video/mp4" />
      </video>
      <div className="name-overlay">
        <form onSubmit={handleSubmit} className="name-form">
          <h2>What's your name?</h2>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
}

export default NameEntry;
