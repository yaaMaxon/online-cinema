"use client";

import Button from "../Button";
import QuestionItem from "../QuestionItem";
import { frequentlyAskedQuestions } from "./QuestionsBoxSettings";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useRouter } from "next/navigation";

const QuestionsBox = () => {
  const router = useRouter();
  const isMediaLessThan1024 = useMediaQuery(1024);

  const half = Math.ceil(frequentlyAskedQuestions.length / 2);
  const leftColumn = frequentlyAskedQuestions.slice(0, half);
  const rightColumn = frequentlyAskedQuestions.slice(half);

  const handleButtonClick = () => {
    router.push("/support");
  };

  return (
    <div>
      <div className="mb-10 lg:mb-[60px] lg:flex lg:justify-between lg:items-center">
        <div>
          <h2 className="text-white text-xl font-semibold mb-2.5 lg:text-[28px]">
            Frequently Asked Questions
          </h2>
          <p className="text-default text-sm mb-5 lg:text-base">
            Got questions? We`ve got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <Button onClick={handleButtonClick}>Ask a Question</Button>
      </div>

      <div className="lg:flex lg:justify-between">
        <ul className="lg:w-[48%]">
          {leftColumn.map(({ question, answer }, index) => (
            <QuestionItem
              key={index}
              position={`0${index + 1}`}
              question={question}
              answer={answer}
            />
          ))}
        </ul>
        <ul className="lg:w-[48%]">
          {isMediaLessThan1024
            ? rightColumn
                .slice(0, 2)
                .map(({ question, answer }, index) => (
                  <QuestionItem
                    key={index + half}
                    position={`0${index + 1 + half}`}
                    question={question}
                    answer={answer}
                  />
                ))
            : rightColumn.map(({ question, answer }, index) => (
                <QuestionItem
                  key={index + half}
                  position={`0${index + 1 + half}`}
                  question={question}
                  answer={answer}
                />
              ))}
          {}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsBox;
