const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center my-3 px-5 rounded-lg bg-red-600 text-white shadow-sm">
      <h1 className="font-sans text-3xl text-black-800 text-center font-semibold  italic tracking-wider">
        Jack Gisel
      </h1>
      <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto"></div>
        <ul className="flex flex-row">
          <li className="p-2">
            <a href="/">Home</a>
          </li>
          <li className="p-2">
            <a href="/experience">Experience</a>
          </li>
          <li className="p-2">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
