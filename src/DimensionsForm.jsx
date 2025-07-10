import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './samp.css'

function DimensionsForm() {
    const { state } = useLocation();
    const name = state?.name || 'Guest';

    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const baseArea = length * width;
    const extraSpace = baseArea * 0.2;
    const totalArea = baseArea + extraSpace;
    const quotation = totalArea * 5000;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <video autoPlay loop muted playsInline className="bg-video">
                <source src="/building.mp4" type="video/mp4" />
            </video>

            {!submitted ? (
                <div className="name-overlay">
                    <h2 className="dimension-heading">Hey {name}</h2>

                    <form onSubmit={handleSubmit} className="name-form">
                        <p>Please enter the dimensions of your plot:</p>
                        <input
                            type="text"
                            placeholder="Length (m)"
                            value={length}
                            required
                            onChange={(e) => setLength(parseFloat(e.target.value))}
                        />
                        <input
                            type="text"
                            placeholder="Width (m)"
                            value={width}
                            required
                            onChange={(e) => setWidth(parseFloat(e.target.value))}
                        />
                        <button type="submit">Get Quotation</button>
                    </form>
                </div>
            ) : (
                <div className="result">
                    <h2 className='result-name'>{name} here is your quotation</h2>
                    <p><strong>Base Area:</strong> {baseArea.toFixed(2)} m²</p>
                    <p><strong>Extra Space (20%):</strong> {extraSpace.toFixed(2)} m²</p>
                    <p><strong>Total Area:</strong> {totalArea.toFixed(2)} m²</p>
                    <p><strong>Estimated Quotation:</strong> ₹{quotation.toFixed(2)}</p>
                </div>
            )}
        </>
    );
}

export default DimensionsForm;
