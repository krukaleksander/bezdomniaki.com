import React from "react";
import ArticleInList from "../components/ArticleInList";
import { useGlobalContext } from "../context";

export default function Category() {
  const { categoryArticles, useFetchCategory } = useGlobalContext();
  const staticUrl = `http://strapi.bezdomniaki.com${window.location.pathname}`;

  useFetchCategory(staticUrl);

  if (categoryArticles) {
    const { articles, Nazwa } = categoryArticles;
    return (
      <main>
        <h1 className="section-title">{Nazwa}</h1>
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
  return <h1>loading...</h1>;
}
