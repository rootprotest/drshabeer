"use client";
import { useState } from 'react';
import { FaHeartbeat, FaLungs, FaStethoscope, FaWeight, FaBurn, FaTint } from 'react-icons/fa';

const symptomsList = [
  { name: "Fever", icon: <FaBurn /> },
  { name: "Cough", icon: <FaLungs /> },
  { name: "Abdominal Pain", icon: <FaStethoscope /> },
  { name: "Bloating", icon: <FaStethoscope /> },
  { name: "Nausea", icon: <FaStethoscope /> },
  { name: "Vomiting", icon: <FaStethoscope /> },
  { name: "Diarrhea", icon: <FaStethoscope /> },
  { name: "Constipation", icon: <FaStethoscope /> },
  { name: "Weight Loss", icon: <FaWeight /> },
  { name: "Heartburn", icon: <FaBurn /> },
  { name: "Fatigue", icon: <FaHeartbeat /> },
  { name: "Blood in Stool", icon: <FaTint /> }
];

export default function SymptomCheckerPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleCheck = () => {
    if (selectedSymptoms.length === 0) {
      setResult("Please select at least one symptom.");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      let suggestion = "Your symptoms are common. Please monitor and consult a doctor if they persist.";
      let type = "info";

      if (selectedSymptoms.includes("Abdominal Pain") && selectedSymptoms.includes("Bloating")) {
        suggestion = "You may be experiencing gastrointestinal discomfort. Consider seeing a gastroenterologist.";
        type = "warning";
      } else if (selectedSymptoms.includes("Blood in Stool")) {
        suggestion = "This could indicate a serious condition. Seek medical advice immediately.";
        type = "danger";
      }

      setResult({ message: suggestion, type });
      setStatus("done");
    }, 1200);
  };

  return (
    <div className="symptom-checker-wrapper">
      <div className="container">
        <h2 className="page-title">Symptomatic Checker</h2>
        <p className="intro-text">Select the symptoms you’re experiencing and get preliminary suggestions.</p>

        <div className="symptom-grid">
          {symptomsList.map(({ name, icon }, index) => (
            <button
              key={index}
              className={`symptom-btn ${selectedSymptoms.includes(name) ? 'active' : ''}`}
              onClick={() => toggleSymptom(name)}
            >
              <span className="symptom-icon">{icon}</span>
              {name}
            </button>
          ))}
        </div>

        <button className="check-btn" onClick={handleCheck}>Check My Symptoms</button>

        {status === "loading" && <div className="progress-bar"><div className="progress-fill" /></div>}

        {status === "done" && result && (
          <div className={`result-box ${result.type}`}>
            <h4>Suggestion</h4>
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
