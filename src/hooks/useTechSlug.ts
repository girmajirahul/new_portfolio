import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";

export function useTechBySlug(slug: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTech = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axiosInstance.get(`/api/tech/slug/${slug}`);

      setData(response.data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchTech();
    }
  }, [slug]);

  return {
    data,
    loading,
    error,
    refetch: fetchTech,
  };
}