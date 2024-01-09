import portfolio from "../assets/img/portfolio.webp";
import pesenstudio from "../assets/img/portfolio/pesenstudio/pesenstudio.webp";
import semvr from "../assets/img/portfolio/semvr/semvr.webp";
import stxrp from "../assets/img/portfolio/stxrp/stxrp.webp";

import PesenstudioModal from "../components/PesenstudioModal";
import SemvrModal from "../components/SemvrModal";
import StrikerModal from "../components/StrikerModal";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pb-10 pt-0">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center items-center flex-col">
        <img
          draggable="false"
          className="h-auto max-w-full py-4"
          src={portfolio}
          alt="Hi i am Pradipta R. Sandri"
        />

        <div className="flex flex-col gap-4 justify-between xl:grid grid-cols-3 pt-2">
          <div className="borderer flex flex-col justify-between">
            <h1 className="font-Bold text-6xl text-center uppercase">
              PESEN STUDIO MLG
            </h1>
            <div className="flex justify-center">
              <img
                draggable="false"
                className="h-auto max-w-80 py-4 hidden xl:block"
                src={pesenstudio}
                alt="pesenstudiomlg"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-Hapna text-justify text-lg py-4">
                A website for booking music studios in Malang City by
                implementing geolocation and payment gateway.
              </h2>
              <button
                type="button"
                data-modal-target="pesenstudio-modal"
                data-modal-toggle="pesenstudio-modal"
                className="btn-border font-Bold text-4xl"
              >
                PREVIEW
              </button>
            </div>
          </div>

          <div className="borderer flex flex-col justify-between">
            <h1 className="font-Bold text-6xl text-center uppercase">
              SEMVR Discord Bot
            </h1>
            <div className="flex justify-center">
              <img
                draggable="false"
                className="h-auto max-w-80 py-4 hidden xl:block"
                src={semvr}
                alt="semvr bot"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-Hapna text-justify text-lg py-4">
                Organise your server and having fun with your friend in server.
                SEMVR can auto welcomer message and more. Create a reaction role
                for your server, and more.
              </h2>
              <button
                type="button"
                data-modal-target="semvr-modal"
                data-modal-toggle="semvr-modal"
                className="btn-border font-Bold text-4xl"
              >
                PREVIEW
              </button>
            </div>
          </div>

          <div className="borderer flex flex-col justify-between">
            <h1 className="font-Bold text-6xl text-center uppercase">
              Strikersix Roleplay
            </h1>
            <div className="flex justify-center">
              <img
                draggable="false"
                className="h-auto max-w-80 py-4 hidden xl:block"
                src={stxrp}
                alt="Strikersix Roleplay"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-Hapna text-justify text-lg py-4">
                A GTA V roleplay server for FiveM. created using the QB-Core
                framework. and the website for the server, contains server
                information, donations, connect server etc.
              </h2>
              <button
                type="button"
                data-modal-target="stxrp-modal"
                data-modal-toggle="stxrp-modal"
                className="btn-border font-Bold text-4xl"
              >
                PREVIEW
              </button>
            </div>
          </div>
        </div>
        <div className="dotted mt-4"></div>
      </div>
      <PesenstudioModal />
      <SemvrModal />
      <StrikerModal />
    </section>
  );
};

export default Portfolio;
