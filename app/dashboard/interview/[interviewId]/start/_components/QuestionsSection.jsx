import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const textToSpeech = (text) => {
    console.log(text);
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else alert("Sorry, Your browser does not support speech");
  };

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockInterviewQuestion &&
            mockInterviewQuestion?.map((question, index) => (
              <h2
                className={`p-2 m-1 bg-secondary rounded-full text-xs md:text-xs text-center cursor-pointer ${
                  activeQuestionIndex == index && "bg-blue-500 text-white"
                }`}
              >
                Question {index + 1}
              </h2>
            ))}
        </div>
        <h2 className="my-5 text-sm md:text-md">
          {mockInterviewQuestion[activeQuestionIndex]?.question}
        </h2>
        <Volume2
          className="cursor-pointer"
          onClick={() => {
            console.log("clicked");
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question);
          }}
        />
        <div className="border border-blue-200 rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm mt-2 text-primary">
            Click on Record Answer when you want to answer the wuestion. At the
            end of interview we will give you the feedback along with correct
            answer for each of question and your answer to compare it.
          </h2>
        </div>
      </div>
    )
  );
}

export default QuestionsSection;
