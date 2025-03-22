"use client";
import { AnimatedTooltipPreview } from "@/components/ui/AnimatedCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs } from "@/components/ui/tabs";
const tabData = [
  {
    title: "Programs",
    value: "Programs",
    content: <p>Welcome to the Home tab!</p>,
  },
  {
    title: "Universities",
    value: "Universities",
    content: <p>This is your Profile tab.</p>,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start w-full min-h-screen gap-6 p-4">
      {/* Left Side - Visible on all devices */}
      <div className="w-full md:w-[50%] flex flex-col h-full justify-end mt-6 md:mt-0 ">
        <Tabs tabs={tabData} activeTabClassName="bg-blue-600 text-white" />
      </div>
      {/* Images - Hidden on mobile, visible on tablets and larger devices */}
      {/* Right Side - Hidden on mobile, visible on tablets and larger devices */}
      <div className="w-full md:w-[50%] flex flex-col h-full justify-end mt-6 md:mt-0">
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="md:flex justify-center items-center gap-24 hidden">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={"/assets/images/boy.png"}
                width={230}
                height={230}
                alt="DevFlow"
              />
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={"/assets/images/boy3.png"}
                width={230}
                height={230}
                alt="DevFlow"
              />
            </motion.div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-600">Study</span> in Russia -{" "}
            <span>your key to success</span>
          </h1>

          <p className="text-gray-600 mt-3 max-w-lg">
            Russia offers world-class education with globally recognized
            degrees. Explore top universities, affordable tuition, and
            opportunities for international students.
          </p>

          {/* Tooltip Section */}
          <div className="mt-6 flex items-center justify-center bg-purple-100 text-gray-900 px-4 py-3 rounded-full">
            <AnimatedTooltipPreview />
          </div>

          {/* Content Below the Tooltip */}
          <div className="mt-8 text-center">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
