"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter Your Password");
    if (password === "1234") {
      alert("Access granted!");
      console.log(router);
      router.push("/dashboard");
    } else {
      alert("Access denied!");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-base-200">
      <div className="max-w-md mx-auto flex flex-col items-center text-center">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button
          onClick={handleBtn}
          className="btn border rounded-2xl p-2 cursor-pointer "
        >
          Share Story
        </button>
      </div>
    </div>
  );
}
