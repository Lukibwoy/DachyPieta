import Logo from './Logo'

const Footer = () => {
  return (
    <div id="contact" className="relative text-white font-quicksand px-4 bg-green-900 border-t-[1px] mt-5">
      {/* Logo w górnej części stopki */}
	  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2  p-4 rounded-full hover:scale-110 transition-transform duration-300">	  <Logo />
      </div>
      {/* Zawartość stopki */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto mt-16 sm:max-w-[950px] gap-8 sm:gap-16 px-4">
        {/* Sekcja po lewej */}
        <div className="text-left">
		<p className="font-semibold">Kontakt</p>

          <p className="mt-1">Mariusz Pięta</p>
          <p className="mt-1">Tel: +48 661 647 437</p>
          <p className="mt-1">Email: mar.pieta@wp.pl</p>
        </div>

        {/* Sekcja po prawej */}
        <div className="text-left sm:text-right">
          <p className="font-semibold">Adres:</p>
          <p className="mt-1">Gnojnica 55</p>
          <p className="mt-1">39-105 Gnojnica</p>
        </div>
      </div>
      <section className="mx-auto">
        <p className="text-center mt-8 text-[0.7rem] font-[500]">Created by: Łukasz Wilczyński</p>
      </section>
    </div>
  )
}

export default Footer
