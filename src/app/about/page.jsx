"use client";
import Title from "@/components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>Welcome to about us page</Title>
      <nav className="flex  gap-2">
        <Link href="/about/teams">Teams</Link>
        <Link href="/about/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default About;
