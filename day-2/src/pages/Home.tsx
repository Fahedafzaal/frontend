function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 text-(--text-color-landing)">
      <h1 className="text-7xl font-bold">Startup Framework</h1>
      <p className="text-xl font-medium">We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
      <div className="flex flex-col items-center space-y-2">
        <a href="/" className="text-xl font-medium text-white bg-(--bg-color-landing-accent) rounded-full px-8 py-4">Purchase Now for $248</a>
        <a href="/" className="text-(--bg-color-landing-accent)">Learn More</a>
      </div>
    </div>
  );
}

export default Home;