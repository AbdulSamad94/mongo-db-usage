"use client";

import { useState } from "react";

const UploadImg = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file) {
      alert("please select any of the files");
      return;
    }
    const data = new FormData();
    data.append("file", file);
    try {
      const result = await fetch("/api/upload-img-route", {
        method: "POST",
        body: data,
      });
      const response = await result.json();
      if (response.success) {
        alert("Img succesfully uploaded");
      } else {
        alert("Couldnt upload the img");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFile(e.target.files?.[0] || null)
          }
          type="file"
        />
        <br />
        <br />
        <button onClick={handleClick} type="submit">
          upload img
        </button>
      </div>
    </div>
  );
};

export default UploadImg;
