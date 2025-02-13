import { Link } from "react-router";
import "./about.css";

export function About() {
  return (
    <>
      <body className="body">
        <header>
          <nav className="text-container-about">
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/about">About</Link>
            </button>
          </nav>
        </header>
        <main>
          <section className="text-container-about">
            <h1 className="text-box-about">About page</h1>
          </section>
          <section className="text-container-about">
            <p className="text-box-about">
              This is a page that is part of the examination process for the
              course "Frontend och Ramverk"
            </p>
          </section>
        </main>
      </body>
    </>
  );
}
