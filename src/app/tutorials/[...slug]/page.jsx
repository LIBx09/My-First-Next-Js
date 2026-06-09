import React from "react";

const TutorialsTopic = ({ params }) => {
  const result = params;
  console.log("where is slug", result);
  return (
    <div>
      <h2> this is tutorials page</h2>
    </div>
  );
};

export default TutorialsTopic;
