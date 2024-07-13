import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <>
      {/* small screen */}

      <nav className="max-sm:full  h-[90px] flex items-center  ">
        <header className="m-5 flex justify-between items-center ">
          <img src={Logo} className="w-[30%]" alt="" />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </header>
      </nav>
    </>
  );
}
export default Navbar;
