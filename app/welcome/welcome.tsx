import "./welcome.css";
import {
  CustomFunctionButton,
  CustomNavButton,
} from "~/components/CustomButton";
import { useState } from "react";

export function Welcome() {
  const [welcomeTheme, setTheme] = useState("welcomelight");
  const changeTheme = () => {
    if (welcomeTheme !== "welcomelight") setTheme("welcomelight");
    else setTheme("welcomedark");
  };
  return (
    <>
      <body className={welcomeTheme}>
        <header>
          <nav className="text-container">
            <CustomNavButton customButtonName={"Home"} navigateTo={"/"} />
            <CustomNavButton customButtonName={"About"} navigateTo={"/about"} />
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
            <CustomFunctionButton
              customButtonName={"Change Theme"}
              customOnClickFunction={() => {
                changeTheme();
              }}
            />
          </section>
        </main>
      </body>
    </>
  );
}
