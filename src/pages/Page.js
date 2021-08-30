import React from "react";
import { useGlobalContext } from "../context";

export default function Page() {
  const { article, useFetchArticle } = useGlobalContext();
  const staticUrl = `http://strapi.bezdomniaki.com${window.location.pathname}`;
  useFetchArticle(staticUrl);
  if (article) {
    console.log(article);
    const { tytul, opis, published_at, zdjecie } = article;

    return (
      <main className="page">
        <h1 className="page__title">{tytul}</h1>
        {zdjecie ? (
          <div className="page__image-wrapper">
            <img
              src={`http://strapi.bezdomniaki.com/${zdjecie.formats.medium.url}`}
              className="page__main-image"
            ></img>
          </div>
        ) : null}
        <div className="page__content">{opis}</div>
      </main>
    );
  }
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
