import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Navbar() {
  const { menu, useFetchMenu } = useGlobalContext();
  useFetchMenu("http://strapi.bezdomniaki.com/menus/");
  if (menu) {
    return (
      <nav className="menu">
        <ul className="main-menu">
          {menu.map((link) => {
            const { _id, nazwa, podkategorie, url, menus } = link;
            // działa :D
            if (podkategorie) {
              if (menus.length < 1) {
                return (
                  <Link key={_id} to={url} className="">
                    {nazwa}
                  </Link>
                );
              }

              return (
                //zamieniłem link na diva
                <div key={_id} className="with-submenu" to="#">
                  {nazwa}
                  <ul className="submenu">
                    {menus.map((submenu) => {
                      const { nazwa, url, _id } = submenu;
                      return (
                        <Link key={_id} to={url}>
                          {nazwa}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    );
  }
  return <p>Loading...</p>;
}
