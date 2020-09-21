const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center my-3 px-5 rounded-lg bg-red-600 text-white shadow-sm">
      <h1 className="font-sans text-3xl text-black-800 text-center font-semibold  italic tracking-wider">
        Jack Gisel
      </h1>
      <ul className="flex flex-row">
        <li className="p-2">
          <a href="/">Home</a>
        </li>
        <li className="p-2">
          <a href="/experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
