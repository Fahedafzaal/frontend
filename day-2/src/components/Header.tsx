function HeaderComponent() {
  return (
    <header className="mx-20 my-8 p-12">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold text-(--text-color-landing-accent)">
            <a href="/">Startup 3</a>
        </div>
        <div className="flex space-x-12 text-(--text-color-landing-40) text-lg font-medium">
            <a href="/">Home</a>
            <a href="/">Features</a>
            <a href="/">Blog</a>
            <a href="/">Shop</a>
        </div>
        <div className="flex gap-4 items-center">
            <a href="/" className="">Sign In</a>
            <a 
              href="/"
              className="rounded-full bg-(--bg-color-landing-accent) text-white px-3 py-1">
                Sign Up
            </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;