import React from "react";
import { useGlobalContext } from "../context";
import ArticleInList from "../components/ArticleInList";
export default function Home() {
  const { loading, error, data, useFetch } = useGlobalContext();
  useFetch("http://strapi.bezdomniaki.com/categories/home");
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (data) {
    const { articles } = data;
    return (
      <main>
        <h1 className="section-title">Aktualności</h1>
        {articles.map((article) => {
          const {
            _id,
            tytul,
            published_at,
            opis,
            link,
            zdjecie: {
              formats: {
                thumbnail: { url, height },
              },
            },
          } = article;
          return (
            <ArticleInList
              key={_id}
              _id={_id}
              tytul={tytul}
              published_at={published_at}
              opis={opis}
              link={link}
              url={url}
              height={height}
            />
          );
        })}
      </main>
    );
  }
}
