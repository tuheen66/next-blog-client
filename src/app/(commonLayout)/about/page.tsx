/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { getBlogs } from "@/actions/blog.action";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState();
   const [error, setError] = useState<{ message: string } | null>(null);



  useEffect(() => {
    (async () => {
      const { data } = await getBlogs();
      setData(data);
      setError(error)
    })();
  }, []);
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
}
