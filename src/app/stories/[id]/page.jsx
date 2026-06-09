import Link from "next/link";
import React from "react";

const StoriesDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log("where is the id?", id);

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

  const story = devStories.find((item) => item.id == id);
  if (!story) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-md">
          <h1 className="mb-2 text-3xl font-bold text-red-600">
            Story Not Found
          </h1>
          <p className="mb-4 text-gray-600">
            The story you are looking for does not exist.
          </p>
          <Link
            href="/stories"
            className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-600">
              {story.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold">{story.name}</h1>
              <p className="mt-1 text-blue-100">{story.designation}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Designation
              </h2>
              <p className="text-gray-600">{story.designation}</p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                Company
              </h2>
              <p className="text-gray-600">{story.companyName}</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 p-5">
            <h2 className="mb-3 text-lg font-semibold text-gray-800">
              About Developer
            </h2>
            <p className="leading-relaxed text-gray-600">
              {story.name} is working as a {story.designation} at{" "}
              {story.companyName}. They contribute to modern software
              development projects and help build innovative digital solutions.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link
              href="/stories"
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-white transition hover:bg-black"
            >
              Back to Stories
            </Link>

            <button className="rounded-lg border border-blue-600 px-5 py-2.5 text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesDetailsPage;
