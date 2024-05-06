import { Link } from "react-router-dom";
import { HeaderComp } from "../Header/header.styled.js";

export default function Header() {
  return (
    <HeaderComp backgroundColor="red" textAlign="center">
      <Link to="/" style={{ textDecoration: "none"}}>
        <h1>Pokédex</h1>
      </Link>
    </HeaderComp>
  );
}
