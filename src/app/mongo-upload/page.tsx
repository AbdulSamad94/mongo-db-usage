"use client";
import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Could'nt find any files");
      return;
    }
    const data = new FormData();
    data.append("file", file);

    try {
      const response = await fetch(
        "https://mongo-db-usage.vercel.app/api/upload-mongo-img",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Files uploaded successfully!");
      } else {
        alert("Files uploaded failed");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files?.[0] || null)
          }
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Page;
