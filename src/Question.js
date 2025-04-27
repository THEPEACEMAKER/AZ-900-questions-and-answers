import React, { useState, useEffect } from "react";

function Question({ question, showAnswers }) {
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isOptionCorrect = (optionIndex) =>
    (showAnswers || isShowingAnswers) && question.options[optionIndex].answer;

  const handleToggleAnswers = () => {
    setIsShowingAnswers((prev) => !prev);
    setSelectedOptions([]);
  };

  const handleOptionSelect = (optionIndex) => {
    const isCorrect = question.options[optionIndex].answer;
    const newSelectedOptions = [
      ...selectedOptions,
      {
        index: optionIndex,
        showAnswer: true && !showAnswers,
        correct: isCorrect,
      },
    ];
    setSelectedOptions(newSelectedOptions);

    if (!isCorrect && !showAnswers) {
      setTimeout(() => {
        setSelectedOptions((prev) =>
          prev.filter((opt) => opt.index !== optionIndex)
        );
      }, 500);
    }
  };

  useEffect(() => {
    setSelectedOptions([]);
    setIsShowingAnswers(false);
  }, [showAnswers]);

  return (
    <div key={`question-${question.id}`} className="question-block">
      <h3>Question #{question.id}</h3>

      {question.note && (
        <div className="question-note">
          <strong>Note:</strong>{" "}
          <span style={{ whiteSpace: "pre-wrap" }}>{question.note}</span>
        </div>
      )}

      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
        {question.question}
      </pre>

      <ol className="options">
        {question.options.map((option, key) => {
          const selected = selectedOptions.find((o) => o.index === key);
          const isSelectedCorrect = selected?.correct;
          const isSelected = selected?.showAnswer;

          return (
            <li
              key={`question-${question.id}-option-${key}`}
              className={[
                isOptionCorrect(key) ? "correct" : "",
                isSelected ? (isSelectedCorrect ? "correct" : "incorrect") : "",
              ].join(" ")}
              onClick={() => handleOptionSelect(key)}
            >
              {option.value}
            </li>
          );
        })}
      </ol>

      {(showAnswers || isShowingAnswers) && question.comment && (
        <div className="question-comment" style={{ marginTop: "1em" }}>
          <strong>Comment:</strong>
          <p style={{ whiteSpace: "pre-wrap" }}>{question.comment}</p>
        </div>
      )}

      {!showAnswers && (
        <button onClick={handleToggleAnswers}>
          {isShowingAnswers ? "Hide Answers" : "Show Answers"}
        </button>
      )}

      <p>Tags: {question.tags.join(", ")}</p>
    </div>
  );
}

export default Question;
