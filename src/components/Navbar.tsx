const NavBar = () => {
  return (
    <div className="sm:flex w-full lg:justify-end sm:justify-center">
      <section className="relative">
        <nav className="flex w-full">
          <div className="md:px-4 px-1 xl:px-12 py-6 flex w-full">
            <ul className="flex md:px-4 px-1 mx-auto font-semibold font-heading xl:space-x-12 space-x-4 items-center text-xs ">
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
              <li>
                <a className="hover:underline" href="#reach-out">
                  Connect
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
