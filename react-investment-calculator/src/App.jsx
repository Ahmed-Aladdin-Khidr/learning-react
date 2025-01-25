import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";


function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isThereDurations = inputs.duration > 0;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [id]: ( parseFloat(value) >= 0 ? parseFloat(value) : 0 ),
    }));
  };

  return (
    <>
      <Header title="React Investment Calculator" />

      <UserInput inputs={inputs} onChange={handleChange}/>
      
      {isThereDurations && <Result inputs={inputs} />}
    </>
  );
}

export default App;
