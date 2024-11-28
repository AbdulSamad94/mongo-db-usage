"use client";

import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/get_post_data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, date, postTitle, postDescription }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Data sent successfully");
      setAuthor("");
      setDate("");
      setPostTitle("");
      setPostDescription("");
    } else {
      alert("Couldn't send data");
      setAuthor("");
      setDate("");
      setPostTitle("");
      setPostDescription("");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create a Post</h1>
      <div className="flex flex-col gap-4">
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          value={author}
          placeholder="Enter author"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          placeholder="Enter date"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e) => setPostTitle(e.target.value)}
          type="text"
          value={postTitle}
          placeholder="Enter post title"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          onChange={(e) => setPostDescription(e.target.value)}
          value={postDescription}
          placeholder="Enter post description"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
      <div className="mt-6 text-center">
        <Link
          href={"/showData"}
          className="text-blue-500 hover:underline hover:text-blue-600"
        >
          Show Data
        </Link>
      </div>
    </div>
  );
};

export default Page;
