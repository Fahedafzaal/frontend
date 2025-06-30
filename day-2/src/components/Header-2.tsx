function Header2() {
    return (
        <header className="py-4 sm:py-8 md:py-12 lg:pt-16">
            <nav className="flex justify-between mx-auto">
                <div className="flex gap-7 items-center">
                    <h3 className="text-2xl font-bold text-(--text-color-landing-accent)">Startup 3</h3>
                    <a href="/">Products</a>
                    <a href="/">Pricing</a>
                    <a href="/">Community</a>
                </div>
                <div className="flex gap-7 items-center">
                    <a href="/">API</a>
                    <a href="/">Help</a>
                    <a href="/">Login</a>
                    <a href="/" className="rounded-full bg-(--bg-color-landing-accent) text-white px-3 py-1">Sign Up</a>
                </div>
            </nav>
        </header>
    )
}

export default Header2;