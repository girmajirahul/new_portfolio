import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";

type Blog = {
  _id: string;
  slug:string;
  excerpt:string;
  date:string;
  readingTime:string;
  tags:string[];

  title: string;
  content: string[];
};

export function useBlogs() {
  const [blogs, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get("/api/blogs");
      setData(response.data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error, refetch: fetchBlogs };
}