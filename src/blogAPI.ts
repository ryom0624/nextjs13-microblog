import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store", // SSR
    // cache: "force-cache", // SSG (default)
    // next: { revalidate: 1 }, // ISR
  });

  if (!res.ok) throw new Error("Failed to fetch articles");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    // cache: "no-store", // SSR
    // cache: "force-cache", // SSG (default)
    next: { revalidate: 60 }, // ISR
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw new Error("Failed to fetch articles");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

export const createArticle = async (id: string, title: string, content: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      content,
      createdAt: new Date().toISOString(),
    }),
  });

  if (!res.ok) throw new Error("Failed to create article");

  const createdArticle = await res.json();
  return createdArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete article");

  const deletedArticle = await res.json();
  return deletedArticle;
};
