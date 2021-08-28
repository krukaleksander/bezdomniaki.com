import React from "react";
import { GoHome } from "react-icons/go";
import { GiSittingDog } from "react-icons/gi";
import { FaCat, FaInfoCircle } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { HiFire } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Navbar() {
  const { menu, useFetchMenu } = useGlobalContext();
  const navigation = useFetchMenu("http://strapi.bezdomniaki.com/menus/");
  if (menu) {
    console.log(menu);
  }
  return (
    <nav className="menu">
      <ul className="main-menu">
        <Link to="/" className="">
          <GoHome /> Główna
        </Link>
        <Link className="with-submenu" to="#">
          <GiSittingDog /> Psy
          <ul className="submenu">
            <Link to="categories/psy-do-adopcji">Psy do adopcji</Link>
            <Link to="categories/psy-adoptowane"> Psy adoptowane </Link>
            <Link to="categories/psy-za-tm"> Psy za TM </Link>
          </ul>
        </Link>
        <Link className="with-submenu" to="#">
          <FaCat /> Koty
          <ul className="submenu">
            <Link to="categories/koty-do-adopcji">Koty do adopcji</Link>
            <Link to="categories/koty-adoptowane"> Koty adoptowane </Link>
            <Link to="categories/koty-za-tm"> Koty za TM </Link>
          </ul>
        </Link>
        <Link className="with-submenu" to="#">
          <FaInfoCircle />
          Informacje
          <ul className="submenu">
            <Link to="page/historia">Historia</Link>
            <Link to="page/nasze-dzialania"> Nasze działania </Link>
            <Link to="page/sklad"> Skłąd Fundacji </Link>
            <Link to="page/status">Status</Link>
          </ul>
        </Link>
        <Link className="with-submenu" to="#">
          <HiFire />
          Pomoc
          <ul className="submenu">
            <Link to="page/domy-tymaczasowe">Tymczas</Link>
            <Link to="page/wolontariat"> Wolontariat </Link>
            <Link to="page/wsparcie-rzeczowe"> Ws. rzeczowe </Link>
            <Link to="page/wsparcie-finansowe">Ws. finansowe</Link>
          </ul>
        </Link>
        <Link to="page/kontakt">
          <TiContacts />
          Kontakt
        </Link>
      </ul>
    </nav>
  );
}
