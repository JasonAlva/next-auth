import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/login-form";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "@/components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Server side </h1>
      <p>{JSON.stringify(session)}</p>
      <h1>Clinet side</h1>
      <User />
    </div>
  );
}
