"use client";

import PlusIcon from "../../../assets/plus.svg";
import MinusIcon from "../../../assets/minus.svg";
import { useState } from "react";

type Props = {
  question: string;
  position: string;
  answer: string;
};

const QuestionItem = ({ question, position, answer }: Props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleIsAnswerVisible = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <li
      className="px-2.5 py-10 cursor-pointer lg:p-6"
      onClick={handleIsAnswerVisible}
    >
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4 ">
          <span className="text-white text-lg font-medium p-3 bg-[#1F1F1F] rounded-md  border-[#262626] border-[1px]">
            {position}
          </span>
          <span className="text-white text-lg font-medium lg:text-xl">
            {question}
          </span>
        </div>
        <button type="button">
          {isAnswerVisible ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      {isAnswerVisible && (
        <p className="text-default text-sm mt-3 lg:text-base">{answer}</p>
      )}
    </li>
  );
};

export default QuestionItem;
