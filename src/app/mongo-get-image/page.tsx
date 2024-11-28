"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageData = {
  contentType: string;
  data: string;
  _id: string;
  alt?: string;
};

const GetMongoImage = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://mongo-db-usage.vercel.app/api/get-mongo-img"
        );
        const data = await response.json();
        console.log("Successfully fetched", data);
        if (data.success && Array.isArray(data.Images)) {
          setImages(data.Images);
        } else {
          alert("Couldn't fetch data");
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred while fetching data.");
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <div>
        {images.map((item) => (
          <div key={item._id}>
            <Image
              src={`data:${item.contentType};base64,${Buffer.from(
                item.data
              ).toString("base64")}`}
              alt={item.alt || "Image"}
              width={300}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMongoImage;
