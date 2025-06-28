function HeaderComponent() {
  return (
    <header className="m-12 p-6">
      <nav className="flex width-full">
        <div className="text-2xl font-bold text-(--text-color-landing-accent)">
          <a href="/">Startup 3</a>
        </div>
        <div className="flex max-w-lg mx-auto gap-4 text-[var(--text-color-landing-40)] text-lg font-medium justify-center">
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Blog</a>
          <a href="/">Shop</a>
        </div>
        <div className="flex gap-4 items-center">
          <a href="/" className="">
            Sign In
          </a>
          <a
            href="/"
            className="rounded-full bg-(--bg-color-landing-accent) text-white px-3 py-1"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
