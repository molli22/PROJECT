import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  to: string;
  children?: React.ReactNode;
}

function NavBar() {
  return (
    <nav className="nav">
      <h1>Nav</h1>
      <Link to="/" className="site_title">
        Site-title
      </Link>
      <ul>
        <CustomLink to="/Grades">Grades</CustomLink>
        <CustomLink to="/Schedule">Schedule</CustomLink>
      </ul>
    </nav>
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

export default NavBar;
