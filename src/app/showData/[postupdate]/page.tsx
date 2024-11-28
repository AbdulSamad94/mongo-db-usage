"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type PutValue = {
  params: {
    postupdate: string;
  };
};

const Page = (props: PutValue) => {
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const router = useRouter();

  const id = props.params.postupdate;

  useEffect(() => {
    const handleApi = async () => {
      const res = await fetch(`http://localhost:3000/api/putApiMethod/${id}`);
      const data = await res.json();

      if (data.success) {
        const response = data.result;
        setAuthor(response.author);
        setDate(response.date);
        setPostDescription(response.postDescription);
        setPostTitle(response.postTitle);
      } else {
        alert("Couldn't fetch data.");
      }
    };
    handleApi();
  }, [id]);

  const updataData = async () => {
    const response = await fetch(
      `https://mongo-db-usage.vercel.app/putApiMethod/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, date, postTitle, postDescription }),
      }
    );
    const data = await response.json();

    if (data.success) {
      alert("Data updated successfully");
      router.push("/showData");
      router.refresh();
    } else {
      alert("Update failed! Try again.");
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Post</h1>
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
        onClick={updataData}
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </div>
  );
};

export default Page;
