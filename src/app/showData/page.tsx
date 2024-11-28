import Link from "next/link";
import Delete from "@/components/Delete";
import React from "react";

interface PostType {
  author: string;
  date: string;
  postTitle: string;
  postDescription: string;
  _id: string;
}

const handleData = async () => {
  const response = await fetch(
    "https://mongo-db-usage.vercel.app/api/get_post_data",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (data.success) {
    return data.result;
  } else {
    alert("No data to show");
  }
};

const page = async () => {
  const postData: PostType[] = await handleData();
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
      <div className="flex flex-col gap-6">
        {postData.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
          >
            <div className="text-gray-600 text-sm">Author: {item.author}</div>
            <div className="text-gray-500 text-sm">Date: {item.date}</div>
            <h2 className="text-xl font-semibold mt-2">{item.postTitle}</h2>
            <p className="text-gray-700 mt-2">{item.postDescription}</p>
            <div className="flex gap-4 mt-4">
              <Link
                href={`showData/${item._id}`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <Delete id={item._id} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href={"/sendingData"}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
        >
          Add User
        </Link>
      </div>
    </div>
  );
};

export default page;
