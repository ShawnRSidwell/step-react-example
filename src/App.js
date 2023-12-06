import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevClick() {
    setStep((step) => {
      step -= 1;
      if (step < 0) {
        step = 3;
      }
      return step;
    });
  }

  function handleNextClick() {
    setStep((step) => {
      step += 1;
      if (step > 3) {
        step = 0;
      }
      return step;
    });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step > 0 && "active"}>1</div>
        <div className={step > 1 && "active"}>2</div>
        <div className={step > 2 && "active"}>3</div>
      </div>

      <p className="message">
        {step === 0
          ? "Click for steps for success"
          : `Step ${step}: ${messages[step - 1]}`}
      </p>
      <div className="buttons">
        <button
          onClick={handlePrevClick}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
