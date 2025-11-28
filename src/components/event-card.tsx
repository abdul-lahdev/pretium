import React from "react";
import Image from "next/image";


interface EventCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function EventCard({ img, title, desc, buttonLabel }: EventCardProps) {
  return (
    <div >
      <div className="mx-0 mt-0 mb-6 h-48">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2">
            {title}
          </h5>
        </a>
        <p className="mb-6 font-normal !text-gray-500">
          {desc}
        </p>
        <button >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default EventCard;
