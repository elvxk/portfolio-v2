import stable from "../assets/img/stable.webp";
import ps1 from "../assets/img/portfolio/semvr/sm1.webp";
import ps2 from "../assets/img/portfolio/semvr/sm2.webp";

const SemvrModal = () => {
  return (
    <div
      id="semvr-modal"
      tabindex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bgMain rounded-lg shadow">
          <div className="flex flex-col justify-between px-4 pt-4 rounded-t">
            <div className="flex items-center justify-between py-4 rounded-t">
              <h1 className="font-Bold fbold text-4xl">SEMVR DISCORD BOT</h1>
              <button
                type="button"
                className="text-black bg-transparent hover:bg-black hover:text-brown rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="semvr-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="strip"></div>
          </div>

          <div className="px-4">
            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              <div className="relative mx-6 h-96 overflow-hidden">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    draggable="false"
                    src={ps1}
                    className="drop-shadow-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="semvr"
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <img
                    draggable="false"
                    src={ps2}
                    className="drop-shadow-lg absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="semvr"
                  />
                </div>
              </div>

              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full group-hover:bg-black/75 ">
                  <svg
                    className="w-2 h-2 text-black group-hover:text-brown"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full group-hover:bg-black/75 ">
                  <svg
                    className="w-2 h-2 text-black group-hover:text-brown"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between px-4 pb-4 rounded-t items-center">
            <div className="strip"></div>
            <img
              draggable="false"
              className="py-4"
              src={stable}
              alt="portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemvrModal;
