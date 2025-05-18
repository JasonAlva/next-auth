"use client";
import { useSession, signOut } from "next-auth/react";

const dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Hello{session?.user?.email} </h1>
      <button onClick={() => signOut()}>signOut</button>
    </div>
  );
};

export default dashboard;
