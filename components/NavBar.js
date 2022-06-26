import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          display: inline;
        }

        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
