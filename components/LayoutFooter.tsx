import Link from "next/link";

export const LayoutFooter = () => {
  return (
    <footer className="px-20 py-14 bg-white dark:bg-vulcan-800 text-gray-500 dark:text-gray-400">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-1 flex flex-col">
            <h4 className="text-gray-800 dark:text-gray-200 mb-3">GenshinBuilds</h4>
            <Link href="/privacy-policy">
              <a className="my-2">Privacy Policy</a>
            </Link>
            <Link href="/contact">
              <a className="my-2">Contact</a>
            </Link>
          </div>
          <div className="flex-1 flex flex-col">
            {/* <h4 className="text-gray-800 dark:text-gray-200 mb-3">
              Join the Community
            </h4>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
            >
              Discord
            </a>
            <a
              href="https://www.reddit.com/r//"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
            >
              Reddit
            </a> */}
          </div>
          <div className="flex-1">
            <p className="text-sm">
              GenshinBuilds is a Database, Tier List, and Guide for Genshin
              Impact on PC, mobile and consoles.
            </p>
            <p className="text-sm mt-3">
              GenshinBuilds is not endorsed by miHoYo Co Ltd. and does not
              reflect the views or opinions of MiHoyo or anyone officially
              involved in producing or managing Genshin Impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
