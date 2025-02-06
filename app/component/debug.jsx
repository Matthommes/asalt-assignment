"use client"
import { useState } from "react";

const challenge = {
  title: "Sorting Function Failure",
  scenario: "You are given a Python function that is supposed to sort a list of integers in ascending order using the bubble sort algorithm. However, the function is not working as expected—sometimes it returns an incorrectly sorted list or fails to sort at all.",
  buggyCode: `def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[j] > arr[j + 1]:  # Uh-oh! This might cause an error.
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
  steps: [
    {
      step: "Identify the Issue",
      explanation: "Running bubble_sort([5, 2, 9, 1, 5, 6]) causes an IndexError: list index out of range. This suggests an issue with accessing list elements beyond the valid index range."
    },
    {
      step: "Isolate the Problem",
      explanation: "The inner loop runs from 0 to len(arr), but arr[j + 1] causes an index out of range error when j reaches len(arr) - 1."
    },
    {
      step: "Solve the Problem",
      explanation: "Modify the inner loop to stop at len(arr) - i - 1 instead of len(arr). This ensures arr[j + 1] is always within bounds."
    }
  ],
  fixedCode: `def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - i - 1):  # Fix: Adjusted loop bounds
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,
  explanation: "The original function caused an IndexError due to accessing an out-of-bounds index in the inner loop. The fix ensures the loop stops before the last valid index to prevent errors."
};

export default function DebuggingChallenge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{challenge.title}</h1>
      <p className="text-gray-700 mb-4">{challenge.scenario}</p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-lg flex justify-between bg-blue-100 p-2 rounded"
      >
        View Debugging Steps {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="mt-2">
          {challenge.steps.map((step, index) => (
            <div key={index} className="mb-2">
              <p className="text-gray-700 font-medium">{step.step}:</p>
              <p>{step.explanation}</p>
            </div>
          ))}
        </div>
      )}
      <p className="text-gray-700 font-medium mt-4">Buggy Code:</p>
      <pre className="bg-red-100 p-2 rounded text-sm overflow-auto mb-2">
        {challenge.buggyCode}
      </pre>
      <p className="text-gray-700 font-medium">Fixed Code:</p>
      <pre className="bg-green-100 p-2 rounded text-sm overflow-auto mb-2">
        {challenge.fixedCode}
      </pre>
      <p className="text-gray-700 font-medium">Explanation:</p>
      <p>{challenge.explanation}</p>
    </div>
  );
}
