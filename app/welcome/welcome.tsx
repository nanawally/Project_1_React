import { Link } from "react-router";
import "./welcome.css";
import { CustomButton } from "~/components/CustomButton";
import { useState } from "react";

export function Welcome() {
    const [welcomeTheme, setTheme] = useState("welcomelight");
    const changeTheme = () => {
      if (welcomeTheme !== "welcomelight") setTheme("welcomelight");
      else setTheme("welcomedark");
    }
  return (
    <>
      <body className={welcomeTheme}>
        <header>
          <nav className="text-container">
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/about">About</Link>
            </button>
          </nav>
        </header>
        <main>
          <section className="text-container">
            <h1 className="text-box">Home page</h1>
          </section>
          <section className="text-container">
            <p className="text-box">
              This is a page that is part of the examination process for the
              course "Frontend och Ramverk".
            </p>
          </section>
          <section className="text-container">
            <CustomButton customButtonName={"example"} />
          </section>
          <section className="text-container">
            <button className="button-change-theme" onClick={changeTheme}>Change theme</button>
          </section>
        </main>
      </body>
    </>
  );
}
