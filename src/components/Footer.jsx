import logo_footer from "../assets/logo_footer.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="max-w-screen text-black text-lg flex flex-row gap-4">
          <div className="w-screen pl-11">
            <img
              src={logo_footer}
              alt="Logo Under The Lens"
              className="pb-6 w-24"
            />
            <button className="btn bg-green-400 text-black rounded-lg text-2xl p-1">
              Get the free app
            </button>
          </div>
          <div className="w-screen"></div>
          <div className="flex flex-col gap-3 w-screen">
            <div>Odkrywaj</div>
            <a href="#">Aktualności</a>
            <a href="#">Narzędzia w aplikacji</a>
            <a href="#">Porady finansowe</a>
          </div>
          <div className="flex flex-col gap-3 w-screen">
            <div>Company</div>
            <a href="#">O nas</a>
            <a href="#">Wsparcie</a>
          </div>
        </div>
        <hr className="text-gray-300 border-2 mt-8 mb-3 mx-2" />
        <div className="flex justify-center gap-12 text-xs text-gray-400">
          <div>Warunki użytkowania</div>
          <div>Polityka prywatności</div>
          <div>Polityka bezpieczeństwa</div>
        </div>
        <p className="flex justify-center gap-12 text-xs text-gray-400 pt-24 pb-2">
          &copy; 2025 Under the lens, Inc.
        </p>
      </footer>
    </>
  );
}

export default Footer;
