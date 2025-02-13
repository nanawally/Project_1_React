import { Link } from "react-router";
import "./about.css";
import { useState } from "react";
import type { User } from "~/types/User";

export function About() {
  const [score, setScore] = useState<number>(0);
  function addToScore(chosenNumber: number) {
    setScore((prev) => prev + chosenNumber);
  }

  const [user, setUser] = useState<User>({ username: "", password: "" });
  function updateUser(newName: string) {
    setUser((prevUser) => ({ ...prevUser, username: newName }));
  }

  const [aboutTheme, setTheme] = useState("aboutlight");
  const changeTheme = () => {
    if (aboutTheme !== "aboutlight") setTheme("aboutlight");
    else setTheme("aboutdark");
  };

  return (
    <>
      <body className={aboutTheme}>
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
              course "Frontend och Ramverk".
            </p>
          </section>
          <section className="text-container-about">
            <p className="text-box-about">My name is... {user.username}</p>
          </section>
          <section className="text-container-about">
            <button
              onClick={() => {
                updateUser("Maddie");
              }}
            >
              Maddie
            </button>
            <button
              onClick={() => {
                updateUser("Benjamin");
              }}
            >
              Benjamin
            </button>
          </section>
          <section className="text-container-about">
            <p className="text-box-about">Score: {score}</p>
          </section>
          <section className="text-container-about">
            <button
              onClick={() => {
                addToScore(1);
              }}
            >
              Score + 1
            </button>
            <button
              onClick={() => {
                addToScore(2);
              }}
            >
              Score + 2
            </button>
          </section>
          <section className="text-container-about">
            <button className="button-change-theme-about" onClick={changeTheme}>
              Change theme
            </button>
          </section>
        </main>
      </body>
    </>
  );
}
