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


export function useBlogBySlug(slug: string) {
  const [data, setData] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(
        `api/blogs/slug/${slug}`
      );

      setData(response.data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  return { data, loading, error, refetch: fetchBlog };
}