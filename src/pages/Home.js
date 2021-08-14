import React from "react";
import { useGlobalContext } from "../context";

export default function Home() {
  const { loading, error, data, useFetch } = useGlobalContext();
  const homePage = useFetch(
    "http://strapi.bezdomniaki.com/categories/6110d82659af4802124aa0cc"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (data) {
    console.log(data);
    const { articles } = data;
    return (
      <main>
        <h1 className="section-title">Aktualności</h1>
        {articles.map((article) => {
          const {
            tytul,
            published_at,
            opis,
            zdjecie: {
              formats: {
                thumbnail: { url, height },
              },
            },
          } = article;
          return (
            <article key="id">
              <img
                src={`http://strapi.bezdomniaki.com/${url}`}
                alt=""
                style={{ height: height }}
              />
              <div>
                <h1>{tytul}</h1>
                <span>{published_at.slice(0, 10)}</span>
                <p>{opis.slice(0, 400) + "..."}</p>
                <a href="#">Czytaj więcej</a>
              </div>
            </article>
          );
        })}
      </main>
    );
  }
}
