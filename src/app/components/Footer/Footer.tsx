const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow fixed bottom-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://christopherkade.com/" className="hover:underline">
            Christopher Kade
          </a>
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          This website is a passion project. I am not affiliated nor associated
          with Wizards of the Coast in any way.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
