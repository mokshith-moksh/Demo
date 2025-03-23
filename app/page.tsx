"use client";
import { AnimatedTooltipPreview } from "@/components/ui/AnimatedCard";
import Image from "next/image";
import { motion } from "framer-motion";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="bg-transparent w-[100vw] min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-28 p-4">
      {/* Tabs Section */}
      <div className="w-full lg:w-auto mt-52 lg:mt-0 relative">
        <Tabs defaultValue="account" className="w-full relative">
          <TabsList className="w-auto">
            <TabsTrigger value="account" className="w-auto">
              Program
            </TabsTrigger>
            <TabsTrigger value="password">University</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Section1 />
          </TabsContent>
          <TabsContent value="password">
            <Section2 />
          </TabsContent>
        </Tabs>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center text-center lg:text-left">
        {/* Images */}
        <div className="flex justify-center items-center gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/images/boy.png"
              width={200}
              height={200}
              alt="DevFlow"
              className="w-24 lg:w-48"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/images/boy3.png"
              width={200}
              height={200}
              alt="DevFlow"
              className="w-24 lg:w-48"
            />
          </motion.div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold mt-6">
          <span className="text-blue-600">Study</span> in Russia -{" "}
          <span>your key to success</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-3 max-w-md lg:max-w-lg">
          Russia offers world-class education with globally recognized degrees.
          Explore top universities, affordable tuition, and opportunities for
          international students.
        </p>

        {/* Tooltip Section */}
        <div className="mt-6 flex items-center justify-center">
          <AnimatedTooltipPreview />
        </div>

        {/* Apply Button */}
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
}
