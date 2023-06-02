import { useState, useEffect } from 'preact/hooks'
import { Menu, Close } from './Icons'

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
      class={`w-full flex h-[72px] justify-between z-20 p-2 items-center fixed top-0 transition-all duration-500 ${showHeader}`}
    >
      <a
        href="/"
        class="w-14 h-14 md:hover:-translate-y-[1px] transition-transform duration-300"
      >
        <svg
          class="logo__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="logo__path"
            d="M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
          ></path>
        </svg>
      </a>

      <nav
        class={`flex bg-blanco rounded-t-3xl md:bg-transparent fixed md:static top-[72px] left-0 right-0 h-screen md:h-auto transition-all translate-x-full md:translate-x-0 duration-500 opacity-0 ${
          menuIsOpen ? 'translate-x-0 opacity-100' : ''
        }`}
      >
        <ul class="flex flex-col md:flex-row gap-4 w-full items-center mt-14 md:mt-0">
          <li class="font-medium hover:text-aguamarina transition-colors duration-300 w-full">
            <a href="#inicio" className="w-full inline-block text-center py-4">
              Inicio
            </a>
          </li>
          <li class="font-medium hover:text-aguamarina transition-colors duration-300 w-full">
            <a
              href="#nosotros"
              className="w-full inline-block text-center py-4"
            >
              Nostros
            </a>
          </li>
          <li class="font-medium hover:text-aguamarina transition-colors duration-300 w-full">
            <a href="#equipos" className="w-full inline-block text-center py-4">
              Equipos
            </a>
          </li>

          <li class="md:hidden font-medium hover:text-aguamarina transition-colors duration-300 w-full flex justify-center mt-4">
            <a
              href="tel:57123456789"
              class="font-medium px-3 py-2 w-full max-w-max inline-block text-center bg-aguamarina rounded-md text-white hover:bg-aguamarina/80 transition-colors duration-300"
            >
              +57 123456789
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="tel:57123456789"
        class="hidden md:block font-medium px-3 py-2 bg-aguamarina rounded-md text-white hover:bg-aguamarina/80 transition-colors duration-300"
      >
        +57 123456789
      </a>

      <button
        class={`md:hidden w-8 h-8 flex items-center justify-center border-none outline-none appearance-none ${
          menuIsOpen ? 'open' : ''
        }`}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        id="burger"
      >
        {menuIsOpen ? <Close /> : <Menu />}
      </button>
    </header>
  )
}