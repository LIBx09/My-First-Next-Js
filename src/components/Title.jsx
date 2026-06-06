import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-zinc-500 to-zinc-700 text-white p-4 rounded-lg mb-4">
      <h2 className="text-5xl font-bold mt-10">{children}</h2>
    </div>
  );
};

export default Title;
