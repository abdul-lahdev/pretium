"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function StudentsFeedback() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const data = [
    {
      head: 'What types of mental health services do you offer?',
      body: `We offer individual counseling, therapy for specific concerns (such as anxiety, 
depression, or trauma), group sessions, and 24/7 crisis support. All services are 
provided by licensed mental health professionals.`,
    },
    {
      head: 'How do I know if I need therapy or counseling?',
      body: `We offer individual counseling, therapy for specific concerns (such as anxiety, 
depression, or trauma), group sessions, and 24/7 crisis support. All services are 
provided by licensed mental health professionals.`,
    },
    {
      head: 'Is everything I share confidential?',
      body: `We offer individual counseling, therapy for specific concerns (such as anxiety, 
depression, or trauma), group sessions, and 24/7 crisis support. All services are 
provided by licensed mental health professionals.`,
    },
    {
      head: 'How do I get started with Pretium?',
      body: `We offer individual counseling, therapy for specific concerns (such as anxiety, 
depression, or trauma), group sessions, and 24/7 crisis support. All services are 
provided by licensed mental health professionals.`,
    },
    {
      head: 'Are your services available online or in person?',
      body: `We offer individual counseling, therapy for specific concerns (such as anxiety, 
depression, or trauma), group sessions, and 24/7 crisis support. All services are 
provided by licensed mental health professionals.`,
    },
  ];

  return (
    <section className="pb-20 lg:pb-36 bg-white">
      <div className="w-[90%] xl:w-[70%] mx-auto px-0 md:px-3 py-10 rounded-[16px]" data-aos="fade-up">
        <h1 className="text-[var(--dark1)] text-[38px]/[58px] md:text-[48px]/[71px] lg:text-[64px]/[73px] font-normal text-center mb-8">
          Need Help Now?
          <span className="inline lg:block">
            We’re Here <span className="text-[var(--purple1)]">24/7</span>
          </span>
        </h1>

        <div className="bg-[var(--grey1)] p-5 rounded-[16px] w-full xl:w-[60%]  mx-auto mt-16">
          {data.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              className="mb-4 "
            >
              <AccordionHeader className={`border-b-0 text-[var(--dark1)] text-[24px] font-medium pb-[6px] px-3 rounded-tl-[12px] rounded-rl-[12px]  ${open === index + 1 ? "bg-white" : "bg-transparent"}`} onClick={() => handleOpen(index + 1)}>
                {item.head}
              </AccordionHeader>
              <AccordionBody className='text-[var(--dark2)] text-[16px] font-normal bg-white px-3 rounded-bl-[12px] rounded-br-[12px]'>
                {item.body}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
