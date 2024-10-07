import React, { useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Chat from "../components/Chat";
import "./AIPage.css";

const AIPage = () => {
  const questions = ["질문1", "질문2", "질문3", "질문4", "질문5"];
  const [answers, setAnswers] = useState<string[]>(["", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    const newValues = [...answers];
    newValues[index] = value;
    setAnswers(newValues);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>AI질문</title>
      </Helmet>
      <div className="ai-container">
        <div className="ai-inner">
          {questions.map((v, i) => (
            <Chat
              key={i}
              question={v}
              answer={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
            />
          ))}
          {/* <Chat
            question="팀 프로젝트를 진행하면서 어려운 점은 무엇이었으며, 어떻게 해결하여 나갔나요?"
            answer="팀프로젝트를 진행하면서 어려웠던 점은 ~ 이고, 그 것을 ~로 해결하였습니다."
            isHistory={true}
          /> */}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AIPage;
