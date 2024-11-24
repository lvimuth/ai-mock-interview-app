"use client";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <section className="z-50 mt-10">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>
              <span className="text-sm font-medium">
                Introducing AI-Powered Mock Interviews
              </span>
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Prepare for Interviews{" "}
              <span className="text-primary">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Get ready for success with personalized, AI-generated mock
              interviews tailored to your job role.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/dashboard"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="font-bold text-3xl">How It Works?</h2>
          <h2 className="text-md text-gray-500">
            Get AI-generated mock interviews in 3 simple steps
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary hover:shadow-primary"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Choose Your Job Role
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Select the role you’re applying for, and our AI will generate
                tailored questions for your mock interview.
              </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary hover:shadow-primary"
              href="#"
            >
              <Edit className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Practice Your Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Record and refine your answers with AI-powered feedback and
                suggestions for improvement.
              </p>
            </a>

            <a
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-primary hover:shadow-primary"
              href="#"
            >
              <Share2 className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Track Your Progress
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Analyze your performance over time with detailed AI-generated
                reports and shareable summaries.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/sign-in"
              className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring focus:ring-primary"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
