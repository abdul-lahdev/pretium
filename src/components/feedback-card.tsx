import React from "react";


interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <div className="items-start text-left">
      <div>
        <h6 color="blue-gray">
          {client}
        </h6>
        <p
          className="mt-1 mb-5 block font-normal"
        >
          {title}
        </p>
        <p
          className="mb-6 font-normal text-gray-500"
        >
          &quot;{feedback}&quot;
        </p>
      </div>
    </div>
  );
}
export default FeedbackCard;