import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

type ArticlesListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticlesListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
