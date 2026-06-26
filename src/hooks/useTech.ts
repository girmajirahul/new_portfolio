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

export function useTech(page: number = 1, limit: number = 5) {
    const [techblogs, setData] = useState<TechItem[]>([]);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalBlogs: 0,
        hasNextPage: false,
        hasPreviousPage: false,
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTech = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axiosInstance.get(`/api/tech?page=${page}&limit=${limit}`);
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
        fetchTech();
    }, [page,limit]);

    return { techblogs, pagination , loading, error, refetch: fetchTech };
}