import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import FuncClick from "./FuncClick";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SideBAr from "./SideBar";

interface Props {
  to: string;
  children?: React.ReactNode;
}

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header_title">
        TtackStudy
      </Link>
      <ul>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Register">Register</CustomLink>
        {/* <SideBAr /> */}
      </ul>
    </header>
  );
}

function CustomLink({ to, children }: Props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default Header;
