const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/shehrozkhan00/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className=" hover:opacity-50 transition duration-500"
          href="https://github.com/shehroz22"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/GGit3.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com//profile.php?id=100009715542726&mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/sheh.roz_khan"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;