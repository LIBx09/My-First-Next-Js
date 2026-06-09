import Link from "next/link";
import React from "react";

const StoryCard = ({ story }) => {
  // console.log("what is the story?", story);
  return (
    <div>
      <div
        key={story.id}
        className="max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl "
      >
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
            JS
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">{story.name}</h2>
            <p className="text-sm text-gray-500">{story.designation}</p>
          </div>
        </div>

        <div className="my-5 border-t border-gray-100"></div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Employee ID
            </p>
            <p className="text-gray-700">#EMP</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Company
            </p>
            <p className="text-gray-700">{story.companyName}</p>
          </div>
        </div>

        <Link
          href={`/stories/${story.id}`}
          className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
