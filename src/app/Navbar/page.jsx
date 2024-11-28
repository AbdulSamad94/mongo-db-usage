import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-6 mt-10">
       <Link href="home"><li className="cursor-pointer">home</li></Link>
       <Link href="login">Login</Link>
       <Link href="register">Register</Link>
       <Link href="forget-password">Forget password</Link>
      </ul>
    </div>
  );
}

export default page;
