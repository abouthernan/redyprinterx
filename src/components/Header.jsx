import { useState, useEffect } from 'preact/hooks'
import { Menu, Close } from './Icons'
import logoImg from '/logo.svg'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState('translate-y-0')
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        setShowHeader('-translate-y-[72px]')
      } else {
        setShowHeader('shadow-sm')
      }
    } else {
      setShowHeader('translate-y-0')
    }

    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  // hidden menu when click on nav links if window width is less than 768px
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li a')

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          setMenuIsOpen(false)
        }
      })
    })
  }, [])

  return (
    <header
      className={`w-full fixed  bg-white z-20 top-0 transition-all duration-500 ${showHeader} animate-in fade-in duration-1000`}
    >
      <div class="max-w-7xl flex h-[72px] justify-between p-2 md:py-2 md:px-0 items-center mx-auto">
        <a href="/" className="h-14 w-14 transition-transform duration-300">
          <img
            className="aspect-square object-cover object-left w-full h-full"
            src={logoImg}
            alt="Logo"
          />
        </a>

        <nav
          className={`flex bg-blanco rounded-t-3xl md:bg-transparent fixed md:static top-[72px] left-0 right-0 h-screen md:h-auto transition-all translate-x-full md:translate-x-0 duration-500 opacity-0 md:opacity-100 ${
            menuIsOpen ? 'translate-x-0 opacity-100' : ''
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 w-full items-center mt-14 md:mt-0">
            <li className="font-medium hover:text-cielo/80 transition-colors duration-300 w-full">
              <a href="/" className="w-full inline-block text-center py-4">
                Inicio
              </a>
            </li>
            <li className="font-medium hover:text-cielo/80 transition-colors duration-300 w-full">
              <a
                href="#nosotros"
                className="w-full inline-block text-center py-4"
              >
                Nosotros
              </a>
            </li>
            <li className="font-medium hover:text-cielo/80 transition-colors duration-300 w-full">
              <a
                href="/equipos"
                className="w-full inline-block text-center py-4"
              >
                Equipos
              </a>
            </li>

            <li className="md:hidden font-medium hover:text-cielo/80 transition-colors duration-300 w-full flex justify-center mt-4">
              <a
                href="tel:573184165736"
                className="font-medium px-3 py-2 w-full max-w-max inline-block text-center bg-cielo rounded-md text-white hover:bg-cielo/80 transition-colors duration-300"
              >
                (+57) 3184165736
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="tel:573184165736"
          className="hidden md:block font-medium px-3 py-2 bg-cielo rounded-md text-white hover:bg-cielo/80 transition-colors duration-300"
        >
          (+57) 3184165736
        </a>

        <button
          className={`md:hidden w-8 h-8 tex-black flex items-center justify-center border-none outline-none appearance-none ${
            menuIsOpen ? 'open' : ''
          }`}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          id="burger"
        >
          {menuIsOpen ? <Close /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
