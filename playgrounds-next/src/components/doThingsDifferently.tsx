'use client'

import { useState } from "react"
import { PlusIcon } from "./icons/plusIcon"

const items = [
  {
    title: "Democratizing AI for Everyone",
    description:
      "We're on a mission to democratize AI with powerful open-source tools, from low-level frameworks to user-facing apps .",
  },
  {
    title: "Do it your way.",
    description:
      "We're on a mission to democratize AI with powerful open-source tools, from low-level frameworks to user-facing apps .",
  },
  {
    title: "Premium technology, in an easy format.",
    description:
      "We're on a mission to democratize AI with powerful open-source tools, from low-level frameworks to user-facing apps .",
  },
]

export const DoThingsDifferently = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="flex w-full flex-col gap-y-[80px] px-4 py-32 md:py-[112px] md:px-[112px] text-white">
      <div className="flex flex-col max-w-[1216px] w-full items-center justify-center mx-auto">
        <div className="flex flex-col text-[28px] md:text-[52px] items-center text-center">
          <span>
            {" "}
            We do things a bit <span className="italic font-ivypresto">differently</span>.
          </span>
          <span className="text-[18px] text-[#D4D4D4] mt-4">
            {" "}
            Create powerful AI workflows that solve real problems in minutes, not days.
          </span>
        </div>
      </div>
      <div className="w-full justify-between flex flex-col md:flex-row gap-y-6 gap-x-16 items-center max-w-[1216px] mx-auto">
        <div className="flex flex-col flex-1 order-1 md:order-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative ${index === 0 ? "" : "pt-4 md:pt-8"} pb-4 md:pb-8 border-[#333333] ${index < items.length - 1 ? "border-b" : ""}`}
              style={{ paddingBottom: openIndex === index ? "120px" : "32px" }}
            >
              <div
                className="w-full flex justify-between gap-x-6 items-center cursor-pointer relative z-10"
                onClick={() => toggleItem(index)}
              >
                <span className="text-[20px] md:text-[28px]">{item.title}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleItem(index)
                  }}
                  className={`flex items-center gap-x-2 text-[13px] font-medium flex-shrink-0 transition-opacity duration-300 ${openIndex !== index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <PlusIcon /> 
                  Read more
                </button>
              </div>
              <div
                className={`absolute left-0 right-0 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pt-4">
                  <span className="text-[#D4D4D4] text-base leading-relaxed">{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="order-0 md:order-1 rounded-lg flex border border-[#343435] bg-[url('/assets/different-bg.webp')] bg-cover bg-center bg-no-repeat w-full h-[300px] md:w-[576px] md:h-[576px] flex-shrink-0"></div>
      </div>
    </div>
  )
}
