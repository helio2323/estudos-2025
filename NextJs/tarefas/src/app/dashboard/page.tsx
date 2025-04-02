'use server'


import { getSession } from "next-auth/react"
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GoogleProfile } from "next-auth/providers/google";
import { OAuthConfig } from "next-auth/providers/oauth";
import { getServerSession as nextAuthGetServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return <h1>Dashboard</h1>;
}

async function getServerSession(authOptions: { providers: OAuthConfig<GoogleProfile>[]; secret: string; }) {
  return await nextAuthGetServerSession(authOptions);
}

