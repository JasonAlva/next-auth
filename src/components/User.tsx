"use client";
import { useSession } from "next-auth/react";
const User = () => {
  const session = useSession();
  return (
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default User;
