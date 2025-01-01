import { FunctionComponent } from "react";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <div className="sm:flex w-full lg:justify-end sm:justify-center">
      <section className="relative">
        <nav className="flex w-full">
          <div className="md:px-4 px-1 xl:px-12 py-6 flex w-full">
            <ul className="flex md:px-4 px-1 mx-auto font-semibold font-heading xl:space-x-12 md:space-x-4 items-center">
              <li>
                <a className="hover:underline" href="#about-me">
                  About Me
                </a>
              </li>

              <li>
                <a className="hover:underline" href="#experiences">
                  Experiences
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#techonologies">
                  Technologies
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
