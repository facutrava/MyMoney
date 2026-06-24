'use client';

import { useState, useEffect } from 'react';

const LogoSVG = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 735 502' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#F8F4EC' strokeWidth='40' strokeLinejoin='round' strokeLinecap='round' className={className} aria-hidden='true'>
    <g transform='translate(0,502) scale(0.1,-0.1)'>
      <path strokeWidth='40' d='M3133 4090 c-60 -12 -93 -32 -145 -88 -57 -60 -93 -129 -120 -230 -29 -106 -31 -344 -4 -447 57 -215 183 -334 367 -343 271 -14 449 211 410 518 -15 114 -60 257 -109 340 -46 80 -143 180 -202 210 -39 20 -136 52 -150 49 -3 -1 -24 -5 -47 -9z M4134 4022 c-157 -55 -321 -238 -388 -434 -92 -270 -27 -478 182 -580 62 -30 74 -33 167 -33 114 0 153 15 231 87 122 113 205 338 207 563 1 119 -15 192 -57 271 -67 126 -200 175 -342 126z M2372 3385 c-65 -29 -108 -73 -146 -147 -54 -108 -69 -194 -63 -363 11 -282 88 -457 239 -541 50 -27 60 -29 163 -29 92 1 120 4 169 24 77 31 151 100 185 171 24 51 26 65 25 190 0 117 -4 147 -27 223 -64 209 -191 383 -332 454 -63 32 -164 41 -213 18z M4890 3264 c-171 -46 -372 -235 -451 -423 -111 -267 -54 -426 186 -516 144 -54 260 -42 349 36 114 100 210 384 210 619 1 116 -10 157 -55 220 -53 73 -129 94 -239 64z M3540 2884 c-124 -34 -177 -94 -179 -204 l-1 -45 -178 -92 -177 -91 -3 -59 c-6 -112 27 -221 85 -274 37 -35 42 -36 213 -54 80 -8 172 -21 204 -30 145 -38 237 -121 281 -251 l22 -66 36 64 c71 126 121 151 262 133 47 -7 54 -5 94 26 85 66 131 202 131 388 0 300 -122 473 -385 547 -85 24 -331 29 -405 8z' />
      <path strokeWidth='40' d='M3124 3980 c-24 -9 -78 -69 -98 -108 -55 -106 -83 -284 -66 -413 14 -109 48 -226 68 -234 31 -12 36 13 14 82 -12 37 -26 106 -32 152 -29 220 61 481 167 481 50 0 94 -22 135 -68 42 -47 68 -54 68 -19 0 29 -72 101 -122 122 -40 16 -100 19 -134 5z M4161 3905 c-71 -31 -211 -174 -253 -257 -75 -152 -82 -172 -86 -259 -5 -97 11 -163 52 -214 20 -25 26 -27 39 -17 14 12 12 19 -14 69 -73 138 -13 347 151 526 70 76 126 113 186 122 34 6 45 3 71 -19 17 -14 38 -26 47 -26 27 0 18 36 -15 64 -25 21 -40 26 -87 26 -31 -1 -72 -7 -91 -15z M2424 3280 c-11 -4 -37 -27 -56 -49 -113 -133 -116 -456 -5 -680 12 -25 28 -47 34 -49 26 -8 24 29 -5 105 -87 226 -79 486 17 595 34 38 40 40 72 34 20 -3 55 -22 78 -42 41 -35 71 -40 71 -10 0 18 -65 75 -106 92 -37 16 -69 17 -100 4z M4877 3130 c-93 -36 -237 -169 -297 -273 -68 -117 -91 -277 -50 -344 20 -34 74 -68 90 -58 20 12 9 40 -23 60 l-32 21 0 90 c0 85 3 95 39 169 29 59 59 99 120 160 99 100 159 137 228 141 58 3 77 16 58 39 -17 20 -74 18 -133 -5z M3552 2775 c-58 -30 -92 -76 -72 -100 13 -15 40 -9 40 9 0 6 19 24 42 39 36 23 52 27 118 27 41 0 89 -4 107 -9 24 -7 35 -6 44 5 10 12 9 18 -3 31 -12 11 -44 16 -119 20 -98 4 -107 3 -157 -22z M3496 2577 c-30 -30 -31 -36 -13 -61 21 -28 87 -32 120 -6 15 12 27 27 27 34 0 21 -35 46 -73 53 -29 4 -40 1 -61 -20z M2830 1928 c-22 -35 -52 -100 -66 -146 -35 -108 -32 -228 8 -312 30 -66 102 -150 128 -150 34 0 27 25 -21 78 -111 122 -120 302 -23 479 15 26 33 55 40 64 21 23 17 49 -6 49 -14 0 -33 -20 -60 -62z M3266 1804 c-13 -33 -6 -44 27 -44 30 0 67 15 57 22 -20 16 -61 38 -69 38 -5 0 -12 -7 -15 -16z M4055 1735 c-70 -28 -126 -84 -144 -145 -26 -88 19 -109 48 -22 23 66 49 94 113 122 43 18 66 21 166 19 90 -2 117 0 120 11 10 29 -30 40 -137 40 -89 0 -116 -4 -166 -25z M2896 2233 c-315 -366 -362 -699 -135 -947 60 -66 136 -118 228 -156 77 -32 193 -60 245 -60 34 0 35 0 25 33 -15 47 -12 132 5 165 29 57 134 127 238 161 59 19 113 65 136 115 29 61 30 169 2 260 l-21 66 -54 -6 c-75 -9 -130 13 -188 75 -25 27 -59 58 -76 70 -33 24 -142 51 -208 51 l-42 0 -36 112 c-20 62 -40 119 -44 126 -6 10 -27 -8 -75 -65z M4366 2155 c-3 -8 0 -29 6 -47 28 -81 81 -139 244 -266 115 -90 158 -142 180 -220 14 -48 15 -66 5 -120 -43 -231 -146 -313 -446 -353 -66 -9 -168 -9 -385 -3 -162 5 -361 9 -442 9 l-148 -1 0 26 c0 29 28 75 59 96 12 9 68 22 125 29 114 15 156 29 202 68 40 34 64 84 80 169 23 121 72 190 163 230 62 28 202 33 361 15 133 -15 154 -11 148 27 -3 23 -23 28 -173 45 -128 14 -239 14 -284 -1 -99 -32 -125 -44 -166 -80 -56 -49 -89 -106 -105 -178 -25 -115 -33 -136 -63 -168 -35 -37 -107 -62 -174 -62 -77 0 -133 -20 -178 -64 -49 -46 -65 -92 -65 -179 l0 -58 53 8 c55 8 174 9 687 2 294 -3 321 -2 414 18 111 25 224 74 279 123 42 37 98 146 117 228 18 78 9 197 -19 251 -32 62 -100 131 -216 222 -134 104 -157 130 -194 222 -12 30 -54 38 -65 12z' />
    </g>
  </svg>
);

const NAV_LINKS = [
  { href: '#categorias', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 md:px-12 py-0 transition-colors duration-300 ${scrolled ? 'bg-bosque-deep/95 backdrop-blur-md' : 'bg-bosque-deep/80 backdrop-blur-md'}`}
        aria-label='Navegación principal'
      >
        <a href='#inicio' className='flex items-center gap-3.5 no-underline' aria-label='Amor Peludito - Inicio'>
          <LogoSVG className='w-[114px] h-[78px]' />
          <div className='font-fraunces font-semibold text-crema leading-none'>
            <span className='block text-[2rem] tracking-[-0.01em]'>Amor</span>
            <span className='block text-[1.05rem] tracking-[0.07em] opacity-60 mt-0.5'>Peludito</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className='hidden md:flex items-center gap-8 list-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className='text-[0.9rem] font-semibold text-crema/65 tracking-[0.03em] hover:text-crema transition-colors duration-200 no-underline'>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>
          <a
            href='https://wa.me/5493884000000'
            className='text-[0.84rem] font-bold bg-pizarra text-crema px-6 py-2.5 tracking-[0.03em] hover:bg-pizarra-dark hover:-translate-y-px transition-all duration-200 no-underline'
          >
            Escribinos
          </a>

          {/* Hamburger — mobile only */}
          <button
            className='md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] shrink-0'
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`block w-6 h-[2px] bg-crema transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-crema transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-crema transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden='true'
      >
        <div className='absolute inset-0 bg-bosque-deep/60 backdrop-blur-sm' />
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 z-[100] md:hidden w-[280px] bg-bosque-deep flex flex-col pt-[78px] transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role='dialog'
        aria-label='Menú de navegación'
        aria-modal='true'
      >
        <nav className='flex flex-col px-8 pt-10 gap-1'>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className='font-fraunces text-[1.4rem] text-crema/80 hover:text-crema py-3 border-b border-crema/[0.07] no-underline transition-colors duration-150'
            >
              {label}
            </a>
          ))}
        </nav>
        <div className='px-8 mt-10'>
          <a
            href='https://wa.me/5493884000000'
            onClick={() => setOpen(false)}
            className='flex items-center justify-center gap-2 font-bold text-[0.94rem] bg-pizarra text-crema px-6 py-3.5 w-full text-center no-underline hover:bg-pizarra-dark transition-colors duration-200'
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
