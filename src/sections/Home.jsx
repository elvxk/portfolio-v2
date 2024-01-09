import header from "../assets/img/ROLES_HEADER.webp";
import trader from "../assets/img/TRADER.webp";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="max-w-screen-xl mx-auto px-4 pt-6 xl:flex gap-4 ">
          <div className="flex justify-between flex-col">
            <div>
              <img
                draggable="false"
                className="h-auto max-w-full"
                src={header}
                alt="Hi i am Pradipta R. Sandri"
              />
              <h1 className="font-Hapna text-justify text-lg py-4 text-black md:text-2xl">
                Bachelors of Informatics | Web Developer | UI/UX Enthusiast |
                Frontend Enthusiast | Music Enthusiast
              </h1>
              <h1 className="font-Bold fbold text-4xl hidden xl:block pb-2 uppercase">
                From Indonesia
              </h1>
            </div>

            <button className="btn-border font-Bold text-3xl py-1 items-center flex justify-center uppercase">
              Download curriculum vitae
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img
              draggable="false"
              className="h-auto max-w-full hidden xl:block"
              src={trader}
              alt="Hero Pradipta R. Sandri"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
