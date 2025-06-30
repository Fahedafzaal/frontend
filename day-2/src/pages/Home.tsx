import logo from "/Placeholder.png";

function Home() {
  return (
    <>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
                <h1 className="text-5xl font-bold">A high-quality solution for those who want a beautiful startup website quickly</h1>
            </div>
            <div className="max-w-[470px] max-h-[283px] flex flex-col pt-16 gap-5">
                <input type="text" className="w-full py-2.5 sm:py-3 md:py-4 px-4 block border-gray-200 rounded-full border-2 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email" />
                <input type="text" className="w-full py-2.5 sm:py-3 md:py-4 px-4 block border-gray-200 rounded-full border-2 sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password" />
                <button className="w-full bg-(--bg-color-landing-accent) text-white rounded-full py-2.5 sm:py-3 md:py-4 px-4">Sign In</button>
                <p className="text-base font-normal text-center">By signing up, you agree to the Terms of Service</p>
            </div>
        </div>
        <div className="w-full md:w-1/2">
            <img src={logo} alt="logo" />
            <p className="pt-8 w-full md:w-2/3">We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!</p>
        </div>
        </>
  );
}

export default Home;
