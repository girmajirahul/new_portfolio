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

export function useBlogs(page:number=1,limit:number=2) {
  const [blogs, setData] = useState<Blog[]>([]);
   const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBlogs: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`/api/blogs?page=${page}&limit=${limit}`);
      setData(response.data.data.data);
       const result = response.data.data;
       setPagination({
        currentPage: result.currentPage,
        totalPages: result.totalPages,
        totalBlogs: result.totalBlogs,
        hasNextPage: result.hasNextPage,
        hasPreviousPage: result.hasPreviousPage,
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page,limit]);

  return { blogs,pagination, loading, error, refetch: fetchBlogs };
}