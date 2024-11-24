import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Webcam from "react-webcam";

function RecordAnsSection() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-5 m-10">
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
          <Button variant='outline' className=''> Record Answer</Button>
    </div>
  );
}

export default RecordAnsSection;
