import Link from "next/link";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <Navbar />
      <div>hello Samadis here</div>
      <div className="m-auto">
        <Link
          className="text-center mt-4 py-2 px-5 border-black border flex justify-center items-center w-40"
          href="/showData"
        >
          Go to current data section
        </Link>
      </div>
    </div>
  );
}
