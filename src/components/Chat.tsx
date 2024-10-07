import React from "react";
import "./Chat.css";
import mic from "../assets/images/microphone.png";
import stop from "../assets/images/stop.png";
import useSpeechRecognition from "../hooks/useSpeechRecognition";

interface ChatProps {
  question: string;
  answer: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isHistory?: boolean;
}

const Chat: React.FC<ChatProps> = ({
  question,
  answer,
  onChange,
  isHistory,
}) => {
  const { text, isListening, startListening, stopListening } =
    useSpeechRecognition(); // todo 음성 입력 시 텍스트 입력 차단 -> [...answer, text]

  return (
    <div className="chat-container">
      <div className="chat-inner chat-q">
        <p className="chat-content">{question}</p>
      </div>
      {isHistory && (
        <div className="chat-inner chat-a">
          <p className="chat-content">{answer}</p>
        </div>
      )}
      {!isHistory && (
        <div className="chat-inner chat-a">
          <textarea
            className="chat-textarea"
            placeholder="이곳에 채팅 또는 음성으로 답변 입력"
            value={answer}
            onChange={onChange}
          />
          <button
            className="chat-mic-button"
            onClick={isListening ? stopListening : startListening}
          >
            <img
              src={isListening ? stop : mic}
              alt="microphone"
              className="chat-mic-img"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
