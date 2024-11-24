"use client";

import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState();
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500">Congratulation</h2>
      <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
      <h2 className="text-primary text-lg my-3">
        Your overall interview rating: <strong>7/10</strong>
      </h2>
      <h2 className="text-sm text-gray-500">
        Find below interview question with correct answer, Your answer and
        feedback for improvement.
      </h2>
      {feedbackList &&
        feedbackList.map((item, index) => (
          <Collapsible key={index}>
            <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between w-full gap-7">
              {item.question} <ChevronsUpDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-2 mb-6">
                <h2
                  className={` p-2 border rounded-lg ${
                    item.rating >= 3 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <strong>Rating: </strong>
                  {item.rating}
                </h2>
                <h2
                  className={` p-2 border rounded-lg ${
                    item.rating >= 3
                      ? "bg-green-50 text-green-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <strong>Your Answer: </strong>
                  {item.userAns}
                </h2>
                <h2 className="text-green-500 bg-green-50 p-2 border rounded-lg ">
                  <strong>Correct Answer: </strong>
                  {item.correctAns}
                </h2>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
    </div>
  );
}

export default Feedback;
