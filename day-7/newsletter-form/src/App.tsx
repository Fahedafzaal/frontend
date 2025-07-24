import signUpMobile from "/illustration-sign-up-mobile.svg";
import signUpDesktop from "/illustration-sign-up-desktop.svg";
import listIcon from "/icon-list.svg";

function App() {
  return (
    <>
      <main className="w-screen h-screen md:bg-blue-700 md:flex md:items-center md:justify-center">
        <div className="flex flex-col items-center justify-center md:flex-row md:p-6 md:bg-white md:rounded-3xl md:max-w-4xl md:mx-auto">
        <div className="card-image">
          <picture>
            <source srcSet={signUpDesktop} media="(min-width: 768px)" />
            <img src={signUpMobile} alt="Sign Up" />
          </picture>
        </div>
        <div className="card-content flex flex-col p-6 mt-4 gap-6 md:order-first md:mr-4">
          <h1 className="text-4xl font-bold md:text-6xl">Stay updated!</h1>
          <p className="text-md">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="text-md flex flex-col gap-3">
            <li className="flex items-start gap-2">
              <img src={listIcon} className="mt-0.5" alt="List Icon" />
              Product discovery and building what matters
            </li>
            <li className="flex items-start gap-2">
              <img src={listIcon} className="mt-0.5" alt="List Icon" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-start gap-2">
              <img src={listIcon} className="mt-0.5" alt="List Icon" />
              And much more!
            </li>
          </ul>
          <div className="card-form">
            <form className="max-w-sm">
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-bold">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray text-sm rounded-lg block w-full p-4"
                  placeholder="email@company.com"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-lg block w-full p-4 hover:bg-gradient-to-r from-pink-500 to-orange-500"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default App;
