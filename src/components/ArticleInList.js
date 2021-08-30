import React from "react";

export default function ArticleInList({
  _id,
  tytul,
  published_at,
  opis,
  link,
  url,
  height,
}) {
  console.log(link);
  return (
    <article key={_id}>
      <img
        src={`http://strapi.bezdomniaki.com/${url}`}
        alt=""
        style={{ height: height }}
      />
      <div>
        <h1>{tytul}</h1>
        <span>{published_at.slice(0, 10)}</span>
        <p>{opis.slice(0, 400) + "..."}</p>
        <a href={`${window.location.origin}/articles/${link}`}>Czytaj więcej</a>
      </div>
    </article>
  );
}
