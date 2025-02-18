import "./about.css";
import { useState } from "react";
import type { User } from "~/types/User";
import { CustomFunctionButton } from "~/components/CustomButton";
import { NavBar } from "~/components/NavBar";

function introduction(): string {
  return "This is a page that is part of the examination process for the course Frontend och Ramverk.";
}

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
    <main className={aboutTheme}>
      <header className="text-container-about">
        <NavBar />
      </header>
      <section className="text-container-about">
        <h1 className="text-box-about">About page</h1>
      </section>
      <section className="text-container-about">
        <p className="text-box-about">{introduction()}</p>
      </section>
      <section className="text-container-about">
        <p className="text-box-about">My name is... {user.username}</p>
      </section>
      <section className="text-container-about">
        <CustomFunctionButton
          customButtonName={"Maddie"}
          customOnClickFunction={() => {
            updateUser("Maddie");
          }}
        />
        <CustomFunctionButton
          customButtonName={"Benjamin"}
          customOnClickFunction={() => {
            updateUser("Benjamin");
          }}
        />
      </section>
      <section className="text-container-about">
        <p className="text-box-about">Score: {score}</p>
      </section>
      <section className="text-container-about">
        <CustomFunctionButton
          customButtonName={"Score + 1"}
          customOnClickFunction={() => {
            addToScore(1);
          }}
        />
        <CustomFunctionButton
          customButtonName={"Score + 2"}
          customOnClickFunction={() => {
            addToScore(2);
          }}
        />
      </section>
      <section className="text-container-about">
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
