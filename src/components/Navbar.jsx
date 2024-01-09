import logo from "../assets/img/logo.webp";

const Navbar = () => {
  return (
    <nav
      x-data="{ open: false }"
      className="bg-bgNav border-b-4 border-black sticky top-0 z-50"
    >
      <div className="max-w-screen-xl flex justify-between items-center px-4 py-2 mx-auto">
        <a href="#" className="flex items-center">
          <img draggable="false" src={logo} alt="Pradipta R. Sandri Logo" />
        </a>

        <button
          x-on:click="open = !open"
          x-show="!open"
          type="button"
          className="xl:hidden border-brown text-brown text-2xl"
        >
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>

        <button
          x-on:click="open = !open"
          x-show="open"
          type="button"
          className="xl:hidden border-brown text-brown text-2xl"
        >
          <ion-icon name="chevron-up-outline"></ion-icon>
        </button>

        <div className="hidden xl:block">
          <ul className="flex justify-between gap-8">
            <li>
              <a
                href="#home"
                className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
              >
                Home
              </a>
            </li>
            <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
              |
            </span>
            <li>
              <a
                href="#about"
                className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
              >
                About
              </a>
            </li>
            <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
              |
            </span>
            <li>
              <a
                href="#portfolio"
                className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
              >
                Portfolio
              </a>
            </li>
            <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
              |
            </span>
            <li>
              <a
                href="#contact"
                className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        x-show="open"
        className="block xl:hidden px-4 py-4 bg-bgNav border-t-4 border-black"
      >
        <ul className="flex justify-between">
          <li>
            <a
              href="#home"
              className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
            >
              Home
            </a>
          </li>
          <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
            |
          </span>
          <li>
            <a
              href="#about"
              className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
            >
              About
            </a>
          </li>
          <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
            |
          </span>
          <li>
            <a
              href="#portfolio"
              className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
            >
              Portfolio
            </a>
          </li>
          <span className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2">
            |
          </span>
          <li>
            <a
              href="#contact"
              className="text-brown font-RDRLino hover:underline underline-offset-4 decoration-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
