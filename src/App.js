import React, { useState } from "react";
import { questions } from "./components/data";
import Question from "./components/Question.js";
import "./App.css";

function App() {
  const [question, setQuestion] = useState(questions);
  return (
    <main>
      <div className="container">
        <section className="info">
          <Question question={question} />
        </section>
      </div>
    </main>
  );
}

export default App;
