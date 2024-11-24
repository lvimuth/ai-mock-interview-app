"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { CircleStopIcon, Mic } from "lucide-react";
import { toast } from "sonner";

function RecordAnsSection() {
  const [userAnswer, setUserAnswer] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  useEffect(() => {
    results.map((results, index) =>
      setUserAnswer((prevAns) => prevAns + results?.transcript)
    );
  }, [results]);

  const SaveUserAnswer = () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 0) {
        toast("Error while saving your anser, Please record again.");
        return;
      }
    } else {
      startSpeechToText();
    }
  };

  return (
    <div className="flex items-center justify-center flex-col gap-7">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-5 ml-10 mt-10">
        <Image
          src={"/webcam.svg"}
          width={50}
          height={50}
          className="absolute"
          alt={""}
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button variant="outline" className="" onClick={SaveUserAnswer}>
        {" "}
        {isRecording ? (
          <h2 className="text-red-500 flex gap-2 items-center">
            <CircleStopIcon /> Stop Recording
          </h2>
        ) : (
          <h2 className="flex gap-2 items-center text-primary">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
      <Button onClick={() => console.log(userAnswer)}>Show User Answer</Button>
    </div>
  );
}

export default RecordAnsSection;
