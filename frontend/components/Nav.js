import Link from "next/link";

const Nav = () => {
  return (
    <div className="relative self-center w-1/2 py-8 m-auto text-white rounded-xl t-12">
      <div className="relative flex justify-between w-full font-mono">
        <Link href="/">
          <div className="p-2 text-transparent duration-200 bg-clip-text bg-gradient-to-r from-light-pink to-pink-white rounded-2xl hover:scale-105 hover:cursor-pointer">
            eduHUB
          </div>
        </Link>

        <div className="relative flex">
          <Link href="/browse">
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                className="self-center mr-2 hover:cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </Link>
          <Link href="/create/upload">
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                className="self-center mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
          </Link>

          <Link href="/account/register">
            <div className="hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                className="self-center mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
