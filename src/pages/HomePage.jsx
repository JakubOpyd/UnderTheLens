import banner_for_home_page from "../assets/banner_for_home_page.png";
function HomePage() {
  return (
    <>
      <section className="relative w-full p-20">
        <img
          src={banner_for_home_page}
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <button className="bg-black absolute bottom-34 left-1/2 transform font-extrabold -translate-x-1/2 scale-200 text-green-400 px-4 py-2 rounded-lg hover: cursor-pointer">
          Zacznij teraz
        </button>
      </section>

      <section className="flex justify-center font-bold text-3xl">
        <p>Przekonaj się co możesz osiągnąć z Under the lens</p>
      </section>

      <hr />
    </>
  );
}

export default HomePage;
