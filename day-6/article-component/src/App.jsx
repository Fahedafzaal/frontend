import { useState } from "react";
import avatar from "/avatar-michelle.jpg";
import drawers from "/drawers.jpg";
import share from "/icon-share.svg";

function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const handleShareClick = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-quaternary p-6 md:p-12">
        <div className="max-w-md bg-white rounded-lg shadow-sm md:max-w-[44rem]">
          <div className="md:flex">
            <div className="md:w-[35%]">
              <img
                src={drawers}
                alt="Drawers"
                className="rounded-t-lg w-full h-72 object-cover object-top md:object-left md:h-full"
              />
            </div>
            <div className="p-6 space-y-4 md:w-[65%]">
              <h2 className="text-xl font-bold pt-4 md:text-lg">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p className="text-md font-medium text-primary md:text-sm">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
              <div className="flex items-center gap-6 pt-6 md:pt-2">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <p className="font-bold md:text-sm">Michelle Appleton</p>
                  <p className="text-primary md:text-sm">28 Jun 2020</p>
                </div>
                <div
                  className="ml-auto mr-2 rounded-full bg-quaternary p-2 cursor-pointer"
                  onClick={handleShareClick}
                >
                  <img src={share} alt="Share" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          {isShareOpen && (
            <div className="">
              <p>Share</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
