import logo_nav from "../assets/logo_nav.png";
import logo_text from "../assets/logo_text.png";

function Header() {
  return (
    <>
      <div className="bg-[#03184B] w-screen h-22 flex items-start justify-between px-6 py-3">
        <div className="flex gap-8">
          <img src={logo_nav} alt="Logo UnderTheLens" className="h-18" />
          <img src={logo_text} alt="Text Logo UnderTheLens" className="h-22" />
          <span>Option 1</span>
          <span>Option 2</span>
        </div>

        <div className="flex gap-4">
          <span className="px-4">Lens Icon</span>
          <button className="btn bg-green-400 text-black px-4 py-2 rounded-lg">
            Utwórz konto
          </button>
          <button className="btn bg-green-400 text-black px-4 py-2 rounded-lg">
            Zaloguj się
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
