import "./welcome.css";
import { CustomFunctionButton } from "~/components/CustomButton";
import { useState } from "react";
import { NavBar } from "~/components/NavBar";

export function Welcome() {
  const [welcomeTheme, setTheme] = useState("welcomelight");
  const changeTheme = () => {
    if (welcomeTheme !== "welcomelight") setTheme("welcomelight");
    else setTheme("welcomedark");
  };

  return (
    <main className={welcomeTheme}>
      <header className="text-container">
        <NavBar />
      </header>
      <section className="text-container">
        <h1 className="text-box">Home page</h1>
      </section>
      <section className="text-container">
        <p className="text-box">
          This is a page that is part of the examination process for the course
          "Frontend och Ramverk".
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
  );
}
