"use client";
import { useRouter } from "next/navigation";
interface Idtype {
  id: string;
}

const Delete = ({ id }: Idtype) => {
  const router = useRouter();
  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3000/api/putApiMethod/${id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );
    const data = await response.json();
    if (data.success) {
      alert("data deleted succesfully");
      router.push("/showData");
    } else {
      alert("Couldnt delete data");
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default Delete;
