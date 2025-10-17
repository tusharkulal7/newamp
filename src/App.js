
import './App.css';

import { useState } from "react";
function App() {
const [weight, setWeight] = useState("");
const [height, setHeight] = useState("");
const [bmi, setBmi] = useState(null);
function calculateBMI() {
const h = height / 100; // convert cm to meters
const result = (weight / (h * h)).toFixed(2);
setBmi(result);
}
return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>BMI Calculator</h1>
<input
type="number"
placeholder="Weight (kg)"
value={weight}
onChange={(e) => setWeight(e.target.value)}
/>
<br /><br />
<input
type="number"
placeholder="Height (cm)"
value={height}
onChange={(e) => setHeight(e.target.value)}
/>
<br /><br />
<button onClick={calculateBMI}>Calculate BMI</button>
<br /><br />
{bmi && <h2>Your BMI is {bmi}</h2>}
</div>
);
}
export default App;