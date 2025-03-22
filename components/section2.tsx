"use client";
import { useState, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Section2() {
  const [levelOfEducation, setLevelOfEducation] = useState("");
  const [fieldOfEducation, setFieldOfEducation] = useState("");

  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLevelOfEducation(event.target.value);
  };

  const handleFieldChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFieldOfEducation(event.target.value);
  };

  return (
    <div className="w-full max-w-lg bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-8 mx-auto border border-white/20 relative">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="flex gap-2 mb-7 justify-between h-12">
          <TabsTrigger value="account">Major Programs</TabsTrigger>
          <TabsTrigger value="password">Additional Programs</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Direction of preparation
            </label>
            <select
              value={levelOfEducation}
              onChange={handleLevelChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Choose Direction of preparation</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="phd">PhD</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              City
            </label>
            <select
              value={fieldOfEducation}
              onChange={handleFieldChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Choose City</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="arts">Arts</option>
            </select>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Semister
            </label>
            <select
              value={fieldOfEducation}
              onChange={handleFieldChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Choose Semister</option>
              <option value="engineering">Engineering</option>
              <option value="business">Business</option>
              <option value="arts">Arts</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-lg font-medium text-gray-800 mb-2">
              Duration of study
            </label>
            <select
              value={levelOfEducation}
              onChange={handleLevelChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Choose Duration of study</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="phd">PhD</option>
            </select>
          </div>
        </TabsContent>
      </Tabs>
      <Button className="w-full py-3 text-lg font-semibold text-white bg-[#5467FF] transition-all duration-200 shadow-md">
        Search
      </Button>
    </div>
  );
}
