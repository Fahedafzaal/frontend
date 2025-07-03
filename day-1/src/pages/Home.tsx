import profile from "../assets/profile.png";

function Home() {
  return (
    <>
      <section className="flex flex-col gap-4 md:flex-row items-center mt-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-start line-clamp-2">
            Hi, I am John, Creative Technologist
          </h1>
          <p className="text-base font-normal text-start line-clamp-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="text-xl font-medium text-white bg-(--color-secondary) w-52 h-11 px-4 py-2 my-2">
            Download Resume
          </button>
        </div>
        <div className="flex-1">
          <img className="ml-auto" src={profile} alt="John Doe" />
        </div>
      </section>

      <section className="bg-(--color-quaternary) mt-16">
        <div className="flex justify-between">
          <h2>Recent posts</h2>
          <a href="/">View all</a>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex-1 bg-white w-1/3">
            <h3 className="text-2xl font-bold">
              Making a design system from scratch
            </h3>
            <div className="flex">
              <p className="text-base font-normal">12 Feb 2020</p>
              <p>Design, Pattern</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="flex-1 bg-white w-1/3">
            <h3 className="text-2xl font-bold">
              Creating pixel perfect icons in Figma
            </h3>
            <div className="flex justify-evenly divide-x-2">
              <p className="text-base font-normal">12 Feb 2020</p>
              <p>Figma, Icon, Design</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
