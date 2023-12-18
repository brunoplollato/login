"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getAllProducts } from "../api/products/products.service";
import LogoutButton from "@/components/logoutButton";

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log("session", session);

  return (
    <>
      <h1>Protected Page</h1>
      <p>You can view this page because you are signed in.</p>
      <LogoutButton />
    </>
  );
}
