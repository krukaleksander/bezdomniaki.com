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
    const { articles } = data;
    return (
      <main>
        {articles.map((article) => {
          const {
            tytul,
            opis,
            zdjecie: {
              formats: {
                thumbnail: { url },
              },
            },
          } = article;
          return (
            <article key="id">
              <img src={`http://strapi.bezdomniaki.com/${url}`} alt="" />
              <h1>{tytul}</h1>
              <p>{opis}</p>
            </article>
          );
        })}
      </main>
    );
  }
}
