"use client";
import StoryCard from "@/components/StoryCard";
import Title from "@/components/Title";
import React from "react";

const Stories = () => {
  const devStories = [
    {
      id: 1,
      name: "John Smith",
      designation: "Frontend Developer",
      companyName: "TechNova Solutions",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      designation: "UI/UX Designer",
      companyName: "Creative Minds Studio",
    },
    {
      id: 3,
      name: "Michael Brown",
      designation: "Backend Developer",
      companyName: "CloudSync Technologies",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Project Manager",
      companyName: "InnovateX Ltd",
    },
    {
      id: 5,
      name: "David Wilson",
      designation: "Software Engineer",
      companyName: "Digital Edge Corp",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      designation: "QA Engineer",
      companyName: "NextGen Systems",
    },
    {
      id: 7,
      name: "Robert Anderson",
      designation: "DevOps Engineer",
      companyName: "ScaleTech Solutions",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      designation: "Product Designer",
      companyName: "PixelCraft Agency",
    },
    {
      id: 9,
      name: "James Thomas",
      designation: "Mobile App Developer",
      companyName: "AppSphere Technologies",
    },
    {
      id: 10,
      name: "Sophia White",
      designation: "Business Analyst",
      companyName: "Visionary Ventures",
    },
  ];

  return (
    <div>
      <Title>Welcome to the Stories Page</Title>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {devStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default Stories;
