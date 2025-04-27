import "./App.css";
import Quiz from "./Quiz";
import questions from "./questions";

function App() {
  return (
    <div className="App">
      <h1>Azure AZ-900 Questions</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
