import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";


interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <div className="border">
      <div className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </p>
        </div>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <h5 className="mb-2 normal-case">
            {title}
          </h5>
        </a>
        <p className="mb-6 font-normal !text-gray-500">
          {desc}
        </p>
        <button   >{label}</button>
      </div>
    </div>
  );
}

export default CourseCard;