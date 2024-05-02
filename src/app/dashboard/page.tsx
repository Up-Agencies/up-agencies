import { useUser } from "@/hooks/queries/auth";
import { me } from "@/service/auth";
import { cookies } from "next/headers";

import { Suspense } from "react";

export default async function Home() {
  const token = cookies().get("up-agencies.sessionToken")?.value;

  const response = await fetch("https://up-agencies-api.onrender.com/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    priority: "auto",
  });
  const user = await response.json();

  return (
    <Suspense fallback={<p>LOADING....</p>}>
      <p>{user?.email}</p>
    </Suspense>
  );
}
