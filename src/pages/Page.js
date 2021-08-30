import React from "react";
import { useGlobalContext } from "../context";

export default function Page() {
  const { article, useFetchArticle } = useGlobalContext();
  const staticUrl = `http://strapi.bezdomniaki.com${window.location.pathname}`;
  useFetchArticle(staticUrl);
  if (article) {
    const { tytul, opis } = article;
    return (
      <main className="page">
        <h1 className="page__title">{tytul}</h1>
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
