function Home() {
  return (
    <div className="flex flex-col items-center gap-24 text-(--text-color-landing) max-w-[770px] m-auto">
      <div className="flex flex-col max-w-full items-center gap-12">
        <h1 className="text-7xl font-bold">Startup Framework</h1>
        <p className="text-xl font-medium text-center">
          We made it so beutiful and simple.
          <br /> It combines landings, pages, blogs and shop screens. It is
          definitely the tool you need in your collection!{" "}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <a
          href="/"
          className="text-xl font-medium text-white bg-(--bg-color-landing-accent) rounded-full px-8 py-4"
        >
          Purchase Now for $248
        </a>
        <a href="/" className="text-(--bg-color-landing-accent)">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Home;
