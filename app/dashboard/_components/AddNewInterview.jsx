"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircle } from "lucide-react";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { db } from "@/utils/db";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();

  const onSubmit = async (event) => {
    setLoading(true);
    // Prevent the default form submission behavior
    event.preventDefault();

    console.log("Job Position:", jobPosition);
    console.log("Job Description:", jobDescription);
    console.log("Years of Experience:", jobExperience);

    const InputPrompt = `job position: ${jobPosition}, job description: ${jobDescription}, Years of Experience: ${jobExperience}. Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview question with answers in json format . Give question and answers as field in JSON`;

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    try {
      if (MockJsonResp) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: MockJsonResp,
            jobPosition: jobPosition,
            jobDesc: jobDescription,
            jobExperience: jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format("DD-MM-YYYY"),
          })
          .returning({ mockId: MockInterview.mockId });
        console.log("Inserted new mock interview: ", resp);
      } else {
        console.error(
          "MockJsonResp is missing, cannot insert new mock interview"
        );
      }
    } catch (error) {
      console.error(
        "An error occurred while inserting new mock interview:",
        error
      );
    }
    // Close the dialog after form submission
    setOpenDialog(false);
    setLoading(false);
  };

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details about your job position/role, Job description
                    and years of experience
                  </h2>
                  <div className="mt-5 my-2">
                    <label htmlFor="jobPosition">Job Role/Job Position</label>
                    <Input
                      id="jobPosition"
                      placeholder="Ex. Full Stack Developer"
                      required
                      value={jobPosition}
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="mt-5 my-2">
                    <label htmlFor="jobDescription">
                      Job Description/Tech Stack (In Short)
                    </label>
                    <Textarea
                      id="jobDescription"
                      placeholder="Ex. React, Angular, NodeJS, MySQL etc."
                      required
                      value={jobDescription}
                      onChange={(event) =>
                        setJobDescription(event.target.value)
                      }
                    />
                  </div>
                  <div className="mt-5 my-2">
                    <label htmlFor="jobExperiences">Years of Experience</label>
                    <Input
                      id="jobExperiences"
                      type="number"
                      min="0"
                      max="25"
                      placeholder="Ex. 5"
                      required
                      value={jobExperience}
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end mt-5">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        'Generating from AI'
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
