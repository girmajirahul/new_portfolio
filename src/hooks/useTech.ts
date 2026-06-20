import axiosInstance from "@/axios/axios";
import { useEffect, useState } from "react";

type TechBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; language: string; code: string; filename?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone?: "info" | "warn"; text: string };

type TechItem = {
    _id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tags: string[];
    stack: string[];
    content: TechBlock[];
};

export function useTech() {
    const [techblogs, setData] = useState<TechItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTech = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axiosInstance.get("/api/tech");
            setData(response.data.data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTech();
    }, []);

    return { techblogs, loading, error, refetch: fetchTech };
}