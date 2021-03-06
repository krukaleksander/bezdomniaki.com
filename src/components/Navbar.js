import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Navbar() {
  const { menu, useFetchMenu, setPath } = useGlobalContext();
  useFetchMenu("http://strapi.bezdomniaki.com/menus/");
  if (menu) {
    return (
      <nav className="menu">
        <ul className="main-menu">
          {menu.map((link) => {
            const { _id, nazwa, podkategorie, url, menus, isSingle } = link;
            if (podkategorie) {
              if (menus.length < 1) {
                if (isSingle) {
                  return (
                    <Link
                      key={_id}
                      to={`/articles${url}`}
                      className=""
                      onClick={() => setPath(`/articles${url}`)}
                    >
                      {nazwa}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={_id}
                    to={url}
                    className=""
                    onClick={() => setPath(`/categories${url}`)}
                  >
                    {nazwa}
                  </Link>
                );
              }

              return (
                <div key={_id} className="with-submenu">
                  {nazwa}
                  <ul className="submenu">
                    {menus.map((submenu) => {
                      const { nazwa, url, _id, isSingle } = submenu;
                      if (!isSingle) {
                        return (
                          <Link
                            key={_id}
                            to={`/categories${url}`}
                            onClick={() => setPath(`/categories${url}`)}
                          >
                            {nazwa}
                          </Link>
                        );
                      }
                      return (
                        <Link
                          key={_id}
                          to={`/articles${url}`}
                          onClick={() => setPath(`/articles${url}`)}
                        >
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
