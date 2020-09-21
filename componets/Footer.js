const Footer = () => {
  return (
    <div className="flex items-center p-8 flex-col">
      <div className="flex justify-center px-4">
        <a href="https://www.instagram.com/jackgisel/">
          <img className="h-10 m-1" src="./assets/socials/Instagram.png" />
        </a>
        <a href="https://www.linkedin.com/in/jackgisel/">
          <img className="h-10 m-1" src="./assets/socials/LinkedIn.png" />
        </a>
        <a href="mailto:jackrgisel@gmail.com">
          <img className="h-10 m-1" src="./assets/socials/Mail.png" />
        </a>
        <a href="https://open.spotify.com/user/jackgisel">
          <img className="h-10 m-1" src="./assets/socials/Spotify.png" />
        </a>
        <a href="https://twitter.com/jackgisel/">
          <img className="h-10 m-1" src="./assets/socials/Twitter.png" />
        </a>
      </div>
      <h1 className="font-sans text-lg text-gray-800 flex-wrap">
        Jack Gisel &copy; 2020
      </h1>
    </div>
  );
};

export default Footer;
