import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import BlogPage from "@/components/blogs/blog";
import PostPage from "@/components/blogs/blogDetails";
import TechIndex from "@/components/blogs/tech";
import TechPostPage from "./components/blogs/techDetails";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={4000}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/tech" element={<TechIndex />} />
        <Route path="/tech/:slug" element={<TechPostPage />} /> */}
      </Routes>

    </>
  );
}
