import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 rounded-lg border border-gray-200 bg-white p-5 shadow-md">
        <Link
          href="/dashboard"
          className="mb-4 text-xl font-bold text-gray-800"
        >
          Dashboard Navbar
        </Link>
        <nav>
          <div className="flex flex-col gap-3">
            <Link href="/dashboard/add-stories">Add-Stories</Link>
            <Link href="/dashboard/my-profiles">My Profiles</Link>
            <Link href="/dashboard/settings">Settings</Link>
          </div>
        </nav>
      </div>
      <div className="col-span-9 rounded-lg border border-gray-200 bg-white p-5 shadow-md">
        {children}{" "}
      </div>
    </div>
  );
};

export default layout;
