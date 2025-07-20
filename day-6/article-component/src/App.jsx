import { useState } from "react";
import avatar from "/avatar-michelle.jpg";
import drawers from "/drawers.jpg";
import share from "/icon-share.svg";
import facebook from "/icon-facebook.svg";
import twitter from "/icon-twitter.svg";
import pinterest from "/icon-pinterest.svg";

function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const handleShareClick = () => {
    setIsShareOpen(!isShareOpen);
  };

  const ShareContent = ({ isMobile = false }) => (
    <div className="flex items-center gap-6 bg-primary p-5 rounded-b-lg md:rounded-xl md:px-8">
      <p className="text-tertiary font-medium tracking-[0.5em] md:text-lg">
        SHARE
      </p>
      <img src={facebook} alt="Facebook" className="cursor-pointer" />
      <img src={twitter} alt="Twitter" className="cursor-pointer" />
      <img src={pinterest} alt="Pinterest" className="cursor-pointer" />
      {isMobile && (
        <div
          className="ml-auto mr-2 rounded-full bg-quaternary p-2 cursor-pointer active:bg-secondary"
          onClick={handleShareClick}
        >
          <img src={share} alt="Close Share" className="" />
        </div>
      )}
    </div>
  );

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-quaternary p-6">
        <div className="max-w-md bg-white rounded-lg shadow-sm md:max-w-4xl">
          <div className="md:flex">
            <div className="md:w-[35%]">
              <img
                src={drawers}
                alt="Drawers"
                className="rounded-t-lg w-full h-72 object-cover object-top md:object-left md:h-full"
              />
            </div>
            <div className="p-6 space-y-4 md:w-[65%] md:p-8">
              <h2 className="text-xl font-bold pt-4 md:text-2xl">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p className="text-md font-medium text-primary">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>

              {(!isShareOpen || window.innerWidth >= 768) && (
                // Auther Date Section
                <div className="flex items-center gap-6 pt-6 md:pt-2">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <p className="font-bold md:text-md">Michelle Appleton</p>
                    <p className="text-primary md:text-md">28 Jun 2020</p>
                  </div>
                  <button
                    className="ml-auto mr-2 rounded-full bg-quaternary p-2 cursor-pointer"
                    onClick={handleShareClick}
                  >
                    <img src={share} alt="Share" className="w-4 h-4" />

                    {isShareOpen && (
                      <div className="hidden md:block absolute top-125 right-90">
                        <ShareContent />
                        <div
                          className="w-0 h-0 absolute top-17 right-32 
                            border-l-[7px] border-l-transparent
                            border-t-[13px] border-t-primary
                            border-r-[7px] border-r-transparent"
                        ></div>
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>

            {isShareOpen && (
              <div className="md:hidden">
                <ShareContent isMobile={true} />
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="attribution text-center text-lg text-gray-400">
        Challenge by <a href="https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/fahedafzaal" target="_blank">Fahed Afzaal</a>.
      </div>
    </>
  );
}

export default App;
