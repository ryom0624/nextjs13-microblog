"use client";

import { createArticle } from "@/blogAPI";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    // console.log(id, title, content);
    const res = await createArticle(id, title, content);
    router.push("/");
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className={`py-2 px-4 rounded-md bg-orange-500 hover:bg-orange-300`} disabled={loading}>
          送信
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
