import { CustomNavButton } from "./CustomButton";

export function NavBar() {
  return (
    <nav>
      <CustomNavButton customButtonName={"Home"} navigateTo={"/"} />
      <CustomNavButton customButtonName={"About"} navigateTo={"/about"} />
    </nav>
  );
}
