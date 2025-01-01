import { FunctionComponent } from "react";

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <div className="sm:flex w-full lg:justify-end sm:justify-center hidden">
      <section className="relative">
        <nav className="flex w-full">
          <div className="px-5 xl:px-12 py-6 flex w-full">
            <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
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
