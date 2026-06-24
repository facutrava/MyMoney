import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Nav from '@/components/ui/nav';
import HeroCTA from '@/components/ui/hero-cta';
import { AnimatedSection, AnimatedGrid, AnimatedGridItem } from '@/components/ui/animated-section';

/* ── Logo SVG (reusable dentro de la página) ── */
const LogoSVG = ({ className = '' }: { className?: string }) => (
  <svg viewBox='0 0 735 502' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#F8F4EC' strokeWidth='40' strokeLinejoin='round' strokeLinecap='round' className={className} aria-hidden='true'>
    <g transform='translate(0,502) scale(0.1,-0.1)'>
      <path strokeWidth='40' d='M3133 4090 c-60 -12 -93 -32 -145 -88 -57 -60 -93 -129 -120 -230 -29 -106 -31 -344 -4 -447 57 -215 183 -334 367 -343 271 -14 449 211 410 518 -15 114 -60 257 -109 340 -46 80 -143 180 -202 210 -39 20 -136 52 -150 49 -3 -1 -24 -5 -47 -9z M4134 4022 c-157 -55 -321 -238 -388 -434 -92 -270 -27 -478 182 -580 62 -30 74 -33 167 -33 114 0 153 15 231 87 122 113 205 338 207 563 1 119 -15 192 -57 271 -67 126 -200 175 -342 126z M2372 3385 c-65 -29 -108 -73 -146 -147 -54 -108 -69 -194 -63 -363 11 -282 88 -457 239 -541 50 -27 60 -29 163 -29 92 1 120 4 169 24 77 31 151 100 185 171 24 51 26 65 25 190 0 117 -4 147 -27 223 -64 209 -191 383 -332 454 -63 32 -164 41 -213 18z M4890 3264 c-171 -46 -372 -235 -451 -423 -111 -267 -54 -426 186 -516 144 -54 260 -42 349 36 114 100 210 384 210 619 1 116 -10 157 -55 220 -53 73 -129 94 -239 64z M3540 2884 c-124 -34 -177 -94 -179 -204 l-1 -45 -178 -92 -177 -91 -3 -59 c-6 -112 27 -221 85 -274 37 -35 42 -36 213 -54 80 -8 172 -21 204 -30 145 -38 237 -121 281 -251 l22 -66 36 64 c71 126 121 151 262 133 47 -7 54 -5 94 26 85 66 131 202 131 388 0 300 -122 473 -385 547 -85 24 -331 29 -405 8z' />
      <path strokeWidth='40' d='M3124 3980 c-24 -9 -78 -69 -98 -108 -55 -106 -83 -284 -66 -413 14 -109 48 -226 68 -234 31 -12 36 13 14 82 -12 37 -26 106 -32 152 -29 220 61 481 167 481 50 0 94 -22 135 -68 42 -47 68 -54 68 -19 0 29 -72 101 -122 122 -40 16 -100 19 -134 5z M4161 3905 c-71 -31 -211 -174 -253 -257 -75 -152 -82 -172 -86 -259 -5 -97 11 -163 52 -214 20 -25 26 -27 39 -17 14 12 12 19 -14 69 -73 138 -13 347 151 526 70 76 126 113 186 122 34 6 45 3 71 -19 17 -14 38 -26 47 -26 27 0 18 36 -15 64 -25 21 -40 26 -87 26 -31 -1 -72 -7 -91 -15z M2424 3280 c-11 -4 -37 -27 -56 -49 -113 -133 -116 -456 -5 -680 12 -25 28 -47 34 -49 26 -8 24 29 -5 105 -87 226 -79 486 17 595 34 38 40 40 72 34 20 -3 55 -22 78 -42 41 -35 71 -40 71 -10 0 18 -65 75 -106 92 -37 16 -69 17 -100 4z M4877 3130 c-93 -36 -237 -169 -297 -273 -68 -117 -91 -277 -50 -344 20 -34 74 -68 90 -58 20 12 9 40 -23 60 l-32 21 0 90 c0 85 3 95 39 169 29 59 59 99 120 160 99 100 159 137 228 141 58 3 77 16 58 39 -17 20 -74 18 -133 -5z M3552 2775 c-58 -30 -92 -76 -72 -100 13 -15 40 -9 40 9 0 6 19 24 42 39 36 23 52 27 118 27 41 0 89 -4 107 -9 24 -7 35 -6 44 5 10 12 9 18 -3 31 -12 11 -44 16 -119 20 -98 4 -107 3 -157 -22z M3496 2577 c-30 -30 -31 -36 -13 -61 21 -28 87 -32 120 -6 15 12 27 27 27 34 0 21 -35 46 -73 53 -29 4 -40 1 -61 -20z M2830 1928 c-22 -35 -52 -100 -66 -146 -35 -108 -32 -228 8 -312 30 -66 102 -150 128 -150 34 0 27 25 -21 78 -111 122 -120 302 -23 479 15 26 33 55 40 64 21 23 17 49 -6 49 -14 0 -33 -20 -60 -62z M3266 1804 c-13 -33 -6 -44 27 -44 30 0 67 15 57 22 -20 16 -61 38 -69 38 -5 0 -12 -7 -15 -16z M4055 1735 c-70 -28 -126 -84 -144 -145 -26 -88 19 -109 48 -22 23 66 49 94 113 122 43 18 66 21 166 19 90 -2 117 0 120 11 10 29 -30 40 -137 40 -89 0 -116 -4 -166 -25z M2896 2233 c-315 -366 -362 -699 -135 -947 60 -66 136 -118 228 -156 77 -32 193 -60 245 -60 34 0 35 0 25 33 -15 47 -12 132 5 165 29 57 134 127 238 161 59 19 113 65 136 115 29 61 30 169 2 260 l-21 66 -54 -6 c-75 -9 -130 13 -188 75 -25 27 -59 58 -76 70 -33 24 -142 51 -208 51 l-42 0 -36 112 c-20 62 -40 119 -44 126 -6 10 -27 -8 -75 -65z M4366 2155 c-3 -8 0 -29 6 -47 28 -81 81 -139 244 -266 115 -90 158 -142 180 -220 14 -48 15 -66 5 -120 -43 -231 -146 -313 -446 -353 -66 -9 -168 -9 -385 -3 -162 5 -361 9 -442 9 l-148 -1 0 26 c0 29 28 75 59 96 12 9 68 22 125 29 114 15 156 29 202 68 40 34 64 84 80 169 23 121 72 190 163 230 62 28 202 33 361 15 133 -15 154 -11 148 27 -3 23 -23 28 -173 45 -128 14 -239 14 -284 -1 -99 -32 -125 -44 -166 -80 -56 -49 -89 -106 -105 -178 -25 -115 -33 -136 -63 -168 -35 -37 -107 -62 -174 -62 -77 0 -133 -20 -178 -64 -49 -46 -65 -92 -65 -179 l0 -58 53 8 c55 8 174 9 687 2 294 -3 321 -2 414 18 111 25 224 74 279 123 42 37 98 146 117 228 18 78 9 197 -19 251 -32 62 -100 131 -216 222 -134 104 -157 130 -194 222 -12 30 -54 38 -65 12z' />
    </g>
  </svg>
);

/* ── Trust Bar ── */
const TrustBar = () => (
  <div className='bg-bosque-deep py-5 px-6'>
    <div className='max-w-5xl mx-auto flex items-center justify-center gap-12 flex-wrap'>
      {[
        { icon: <path d='M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z'/>, label: 'Envío hoy en SSJ' },
        { icon: <path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/>, label: 'Respuesta en el día' },
        { icon: <polyline points='20 6 9 17 4 12'/>, label: 'Precio visible desde el inicio' },
        { icon: <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/>, label: 'Asesoramiento honesto' },
      ].map(({ label }) => (
        <div key={label} className='flex items-center gap-2.5 font-dm-mono text-[0.73rem] tracking-[0.1em] uppercase text-crema/42'>
          <span className='w-2.5 h-2.5 rounded-sm bg-pizarra opacity-70 shrink-0' />
          {label}
        </div>
      ))}
    </div>
  </div>
);

/* ── Categorías ── */
const Categorias = () => {
  const cats = [
    {
      nombre: 'Alimentos',
      desc: 'Royal Canin, Purina Pro Plan, Hills y más. Seco, húmedo y snacks naturales.',
      icon: <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/>,
    },
    {
      nombre: 'Accesorios',
      desc: 'Collares, correas, camas, juguetes y todo lo que hace más cómoda la vida de tu compañero.',
      icon: <><circle cx='12' cy='12' r='10'/><path d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'/></>,
    },
    {
      nombre: 'Higiene y salud',
      desc: 'Shampoos, antiparasitarios, suplementos y cuidado veterinario del día a día.',
      icon: <><path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'/><path d='M9 9h.01M15 9h.01M8 13s1.5 2 4 2 4-2 4-2'/></>,
    },
    {
      nombre: 'Aves y otros',
      desc: 'Semillas, jaulas, acuarios, roedores y todo para los compañeros menos convencionales.',
      icon: <><path d='M18 8h1a4 4 0 010 8h-1'/><path d='M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z'/><line x1='6' y1='1' x2='6' y2='4'/><line x1='10' y1='1' x2='10' y2='4'/><line x1='14' y1='1' x2='14' y2='4'/></>,
    },
  ];

  return (
    <section className='py-24 px-5 sm:px-8 md:px-12 bg-crema' id='categorias'>
      <div className='max-w-5xl mx-auto'>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-pizarra flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-pizarra shrink-0' />
          Productos
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3.2vw,2.9rem)] text-bosque tracking-tight leading-[1.08] mb-4'>
          Todo lo que necesita,<br />en un solo lugar.
        </h2>
        <p className='text-[0.97rem] text-muted max-w-[56ch] leading-[1.78] mb-14'>
          Selección cuidada de las mejores marcas. Porque cada animal merece lo que realmente necesita, no lo más barato que haya en stock.
        </p>
        <AnimatedGrid className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {cats.map((cat) => (
            <AnimatedGridItem key={cat.nombre}>
              <a href='#' className='group relative bg-arena p-10 block overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_52px_rgba(45,74,42,.13)] transition-all duration-300 no-underline'>
                <div className='absolute bottom-0 left-0 right-0 h-[3px] bg-pizarra scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left' />
                <svg className='absolute top-7 right-6 text-pizarra opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
                  <path d='M5 12h14M12 5l7 7-7 7'/>
                </svg>
                <div className='w-[50px] h-[50px] bg-bosque rounded-full flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-[-4deg] transition-transform duration-300'>
                  <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#F8F4EC' strokeWidth='2' aria-hidden='true'>
                    {cat.icon}
                  </svg>
                </div>
                <div className='font-fraunces font-semibold text-[1.12rem] text-bosque mb-2'>{cat.nombre}</div>
                <div className='text-[0.84rem] text-muted leading-[1.62]'>{cat.desc}</div>
              </a>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

/* ── Productos Destacados ── */
const Productos = () => {
  const productos = [
    {
      brand: 'Royal Canin',
      name: 'Adult Maxi · Perro adulto raza grande',
      desc: 'Fórmula específica para razas grandes. Mantiene articulaciones y peso ideal.',
      price: '$ 28.900',
      badge: 'Más vendido',
      badgeHot: true,
      wa: 'Hola!%20me%20interesa%20el%20Royal%20Canin%20Adult%20Maxi',
    },
    {
      brand: 'Purina Pro Plan',
      name: 'Sensitive Skin & Stomach · Gato adulto',
      desc: 'Para gatos con sensibilidades digestivas. Salmón y arroz. Altamente digestible.',
      price: '$ 18.500',
      badge: 'Nuevo',
      badgeHot: false,
      wa: 'Hola!%20me%20interesa%20el%20Purina%20Pro%20Plan%20Sensitive',
    },
    {
      brand: 'Hills Science Diet',
      name: 'Perfect Weight · Perro con sobrepeso',
      desc: 'Clínicamente probado: el 70% de los perros pierden peso en 10 semanas.',
      price: '$ 34.200',
      badge: 'Stock limitado',
      badgeHot: false,
      wa: 'Hola!%20me%20interesa%20el%20Hills%20Perfect%20Weight',
    },
  ];

  return (
    <section className='py-24 px-5 sm:px-8 md:px-12 bg-arena-warm' id='productos'>
      <div className='max-w-5xl mx-auto'>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-pizarra flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-pizarra shrink-0' />
          Más consultados
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3.2vw,2.9rem)] text-bosque tracking-tight leading-[1.08] mb-4'>
          Productos que recomendamos<br />con nombre propio.
        </h2>
        <p className='text-[0.97rem] text-muted max-w-[56ch] leading-[1.78] mb-14'>
          No vendemos lo que más margen deja. Vendemos lo que les funciona a los animales de nuestros clientes.
        </p>
        <AnimatedGrid className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {productos.map((p) => (
            <AnimatedGridItem key={p.name}>
            <div className='bg-crema border border-line overflow-hidden hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(45,74,42,.13)] transition-all duration-300 h-full'>
              <div className='h-[230px] bg-arena relative flex items-center justify-center overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-arena to-arena' />
                <div className='relative z-10 opacity-[0.22]'>
                  <svg width='88' height='88' viewBox='0 0 24 24' fill='none' stroke='#2D4A2A' strokeWidth='1.5' aria-hidden='true'>
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/>
                  </svg>
                </div>
                <span className={`absolute top-4 left-4 z-20 font-dm-mono text-[0.66rem] tracking-[0.1em] uppercase text-crema px-2.5 py-1 ${p.badgeHot ? 'bg-pizarra' : 'bg-bosque'}`}>
                  {p.badge}
                </span>
              </div>
              <div className='px-6 pt-6'>
                <div className='font-dm-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted mb-1.5'>{p.brand}</div>
                <div className='font-fraunces font-semibold text-[1.05rem] text-bosque mb-2 leading-[1.3]'>{p.name}</div>
                <div className='text-[0.84rem] text-muted leading-[1.6] mb-5'>{p.desc}</div>
              </div>
              <div className='px-6 pb-5 flex items-center justify-between'>
                <div className='font-dm-mono text-[1.12rem] font-medium text-pizarra'>{p.price}</div>
                <a
                  href={`https://wa.me/5493884000000?text=${p.wa}`}
                  className='font-nunito font-bold text-[0.82rem] bg-bosque text-crema px-5 py-2.5 tracking-[0.02em] hover:bg-pizarra hover:scale-[1.03] transition-all duration-150 no-underline'
                >
                  Consultar
                </a>
              </div>
            </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
        <div className='text-center mt-12'>
          <a
            href='https://wa.me/5493884000000?text=Hola!%20quiero%20ver%20el%20cat%C3%A1logo%20completo'
            className='inline-flex items-center gap-2 font-bold text-[0.94rem] bg-bosque text-crema px-8 py-4 hover:bg-bosque-deep hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(45,74,42,.4)] transition-all duration-200 no-underline'
          >
            Ver catálogo completo
            <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── Valores ── */
const Valores = () => {
  const valores = [
    {
      n: '01',
      icon: <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'/>,
      nombre: 'Amor genuino',
      desc: 'Hablamos desde la perspectiva del animal porque nos importa el animal. No es marketing, es de dónde partimos cada vez que elegimos un producto.',
    },
    {
      n: '02',
      icon: <polyline points='20 6 9 17 4 12'/>,
      nombre: 'Honestidad sin rodeos',
      desc: 'Precio claro, información clara, sin cobros sorpresa. Si algo no es lo mejor para tu mascota, lo decimos aunque signifique vender menos.',
    },
    {
      n: '03',
      icon: <><path d='M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z'/><circle cx='12' cy='10' r='3'/></>,
      nombre: 'Cercanía real',
      desc: 'Somos de Jujuy. Conocemos el NOA, los tiempos, cómo se mueve esta región. No somos una cadena porteña que abrió una sucursal.',
    },
  ];

  return (
    <section className='py-24 px-5 sm:px-8 md:px-12 bg-bosque relative overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none' style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(248,244,236,.03) 0, rgba(248,244,236,.03) 1px, transparent 1px, transparent 96px), repeating-linear-gradient(0deg, rgba(248,244,236,.03) 0, rgba(248,244,236,.03) 1px, transparent 1px, transparent 96px)' }} />
      <div className='max-w-5xl mx-auto relative z-10'>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-arena/70 flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-arena/70 shrink-0' />
          Por qué elegirnos
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3.2vw,2.9rem)] text-crema tracking-tight leading-[1.08] mb-4'>
          La tienda que entiende<br />de qué lado está el amor.
        </h2>
        <p className='text-[0.97rem] text-crema/50 max-w-[56ch] leading-[1.78] mb-14'>
          No somos una cadena. Somos de Jujuy, conocemos el NOA y cada decisión de producto parte del animal, no del margen.
        </p>
        <AnimatedGrid className='grid grid-cols-1 md:grid-cols-3 gap-px bg-crema/10'>
          {valores.map((v) => (
            <AnimatedGridItem key={v.n}>
            <div className='bg-bosque p-12 relative overflow-hidden hover:bg-crema/[0.035] transition-colors duration-300 h-full'>
              <div className='font-fraunces text-[4rem] font-bold text-crema/[0.06] leading-none mb-7 tracking-tighter select-none'>{v.n}</div>
              <div className='w-11 h-11 border border-crema/[0.14] flex items-center justify-center mb-5'>
                <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='#D4C4A8' strokeWidth='2' aria-hidden='true'>{v.icon}</svg>
              </div>
              <div className='font-fraunces font-semibold text-[1.18rem] text-crema mb-3'>{v.nombre}</div>
              <div className='text-[0.88rem] text-crema/52 leading-[1.72]'>{v.desc}</div>
            </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

/* ── Nosotros ── */
const Nosotros = () => (
  <section className='py-24 px-5 sm:px-8 md:px-12 bg-crema' id='nosotros'>
    <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center'>
      <AnimatedSection>
      <div>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-pizarra flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-pizarra shrink-0' />
          Nuestra historia
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3.2vw,2.9rem)] text-bosque tracking-tight leading-[1.08] mb-4'>
          Una tienda que nació<br />del amor, no del negocio.
        </h2>
        <p className='text-[0.97rem] text-muted leading-[1.78] mb-0'>
          Amor Peludito arrancó en Jujuy con una convicción simple: que los animales merecen lo mejor, y sus dueños merecen una tienda que los trate como adultos — con precios reales, información honesta y alguien que responde cuando escribís.
        </p>
        <blockquote className='border-l-[3px] border-pizarra pl-7 py-5 bg-arena my-7'>
          <p className='font-fraunces text-[1.06rem] leading-[1.65] text-ink'>
            Lo que tu peludito necesita, lo encontrás. Y si no sabés qué necesita, te ayudamos a descubrirlo — sin venta agresiva ni tecnicismos innecesarios.
          </p>
          <cite className='font-dm-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted block mt-2.5 not-italic'>
            Promesa de marca · Amor Peludito
          </cite>
        </blockquote>
        <a
          href='https://wa.me/5493884000000?text=Hola!%20quiero%20saber%20más%20sobre%20la%20tienda'
          className='inline-flex items-center gap-2 font-bold text-[0.94rem] bg-pizarra text-crema px-8 py-4 hover:bg-pizarra-dark hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(74,107,138,.4)] transition-all duration-200 no-underline'
        >
          Hablar con nosotros
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
        </a>
      </div>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
      <div className='relative'>
        <div className='bg-bosque p-12 relative z-10'>
          <div className='mb-7'>
            <LogoSVG className='w-16 h-11' />
          </div>
          <div className='font-fraunces font-semibold text-[1.7rem] text-crema mb-3 leading-[1.2]'>
            Pet Shop local.<br />Corazón jujeño.
          </div>
          <div className='text-[0.9rem] text-crema/50 leading-[1.7] mb-8'>
            Atendemos todos los días. Respondemos en el día. Enviamos hoy si pedís antes de las 15hs.
          </div>
          <div className='grid grid-cols-2 gap-px bg-crema/[0.08]'>
            {[
              { num: '+500', label: 'Clientes activos' },
              { num: 'Hoy', label: 'Envío en SSJ' },
              { num: '<4h', label: 'Respuesta WS' },
              { num: '100%', label: 'Precio visible' },
            ].map((s) => (
              <div key={s.label} className='bg-crema/[0.04] p-5'>
                <div className='font-fraunces text-[2.2rem] font-semibold text-arena leading-none mb-1.5'>{s.num}</div>
                <div className='font-dm-mono text-[0.68rem] tracking-[0.1em] uppercase text-crema/35'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute bottom-[-20px] right-[-20px] w-32 h-32 bg-pizarra opacity-10 z-0' aria-hidden='true' />
      </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ── Testimonios ── */
const Testimonios = () => {
  const testimonios = [
    {
      texto: '"Llegué a Amor Peludito sin saber qué darle a mi perra que tenía problemas digestivos. Me explicaron todo sin apuro, me recomendaron lo que necesitaba y el pedido llegó ese mismo día."',
      autor: 'Valeria R. · Jujuy',
      mascota: 'Dueña de Luna, border collie de 3 años',
    },
    {
      texto: '"Me mandé a comprar el alimento más barato en otro lugar y mi gato lo rechazó. Acá me explicaron por qué y me dieron tres opciones con precios reales. Desde entonces no me muevo de Amor Peludito."',
      autor: 'Martín G. · Alto Comedero',
      mascota: 'Dueño de Copito, gato persa de 5 años',
    },
    {
      texto: '"Compré una cama para mi perro y cuando llegó era más chica de lo que esperaba. Me la cambiaron sin drama, sin preguntas raras, y encima me avisaron antes de que yo dijera nada. Eso es confianza."',
      autor: 'Florencia M. · San Salvador',
      mascota: 'Dueña de Thor, labrador de 2 años',
    },
  ];

  return (
    <section className='py-24 px-5 sm:px-8 md:px-12 bg-arena'>
      <div className='max-w-5xl mx-auto'>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-bosque/60 flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-bosque/60 shrink-0' />
          Lo que dicen
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3.2vw,2.9rem)] text-bosque tracking-tight leading-[1.08] mb-4'>
          La voz de los que más importan.
        </h2>
        <p className='text-[0.97rem] text-muted max-w-[56ch] leading-[1.78] mb-14'>
          No los de los dueños. Los de las mascotas — que curiosamente siempre están contentos cuando llega el pedido.
        </p>
        <AnimatedGrid className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {testimonios.map((t) => (
            <AnimatedGridItem key={t.autor}>
            <div className='bg-crema p-9 border-b-[3px] border-bosque hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,74,42,.1)] transition-all duration-300 h-full'>
              <div className='flex gap-1 mb-4'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width='16' height='16' viewBox='0 0 24 24' fill='#4A6B8A' aria-hidden='true'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>
                ))}
              </div>
              <p className='font-fraunces text-[1rem] leading-[1.72] text-ink mb-6'>{t.texto}</p>
              <div className='font-dm-mono text-[0.7rem] tracking-[0.09em] uppercase text-muted'>
                {t.autor}
                <span className='block mt-1 font-nunito font-bold text-[0.82rem] text-bosque tracking-normal normal-case'>{t.mascota}</span>
              </div>
            </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>
      </div>
    </section>
  );
};

/* ── CTA WhatsApp ── */
const CtaWhatsApp = () => (
  <section className='bg-pizarra py-20 px-5 sm:px-8 md:px-12' id='contacto'>
    <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
      <div>
        <p className='font-dm-mono text-[0.74rem] tracking-[0.2em] uppercase text-crema/50 flex items-center gap-3 mb-4'>
          <span className='w-5 h-px bg-crema/50 shrink-0' />
          Hablemos
        </p>
        <h2 className='font-fraunces font-semibold text-[clamp(1.9rem,3vw,2.8rem)] text-crema tracking-tight leading-[1.12] mb-3'>
          ¿No encontrás lo que<br />buscás para tu peludito?
        </h2>
        <p className='text-[0.96rem] text-crema/68 max-w-[44ch] leading-[1.72]'>
          Escribinos por WhatsApp. Respondemos todos los días, en el día. Sin bots, sin formularios, sin esperas.
        </p>
      </div>
      <a
        href='https://wa.me/5493884000000?text=Hola!%20necesito%20ayuda%20para%20encontrar%20algo%20para%20mi%20mascota'
        className='shrink-0 inline-flex items-center gap-3.5 font-bold text-[1rem] bg-crema text-pizarra px-10 py-5 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_44px_rgba(0,0,0,.22)] transition-all duration-200 no-underline whitespace-nowrap'
        aria-label='Contactar por WhatsApp'
      >
        <svg width='22' height='22' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
          <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
        </svg>
        Escribir por WhatsApp
      </a>
    </div>
  </section>
);

/* ── Footer ── */
const Footer = () => (
  <footer className='bg-bosque-deep pt-16 pb-9 px-5 sm:px-8 md:px-12'>
    <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 pb-11 border-b border-crema/[0.07] mb-9'>
      <div>
        <a href='#inicio' className='inline-flex items-center gap-3 mb-5 no-underline' aria-label='Amor Peludito'>
          <LogoSVG className='w-9 h-6' />
          <div className='font-fraunces font-semibold text-crema leading-none'>
            <span className='block text-lg'>Amor</span>
            <span className='block text-sm tracking-widest opacity-60'>Peludito</span>
          </div>
        </a>
        <p className='text-[0.87rem] text-crema/40 leading-[1.72] mb-6'>
          La tienda que entiende de qué lado está el amor. Pet shop local, con envío en Jujuy y asesoramiento honesto todos los días.
        </p>
        <div className='flex gap-2.5'>
          <a href='#' aria-label='Instagram de Amor Peludito' className='w-9 h-9 border border-crema/10 flex items-center justify-center text-crema/38 hover:text-crema hover:border-crema/28 transition-colors duration-200'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
            </svg>
          </a>
          <a href='#' aria-label='TikTok de Amor Peludito' className='w-9 h-9 border border-crema/10 flex items-center justify-center text-crema/38 hover:text-crema hover:border-crema/28 transition-colors duration-200'>
            <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'/>
            </svg>
          </a>
          <a href='https://wa.me/5493884000000' aria-label='WhatsApp de Amor Peludito' className='w-9 h-9 border border-crema/10 flex items-center justify-center text-crema/38 hover:text-crema hover:border-crema/28 transition-colors duration-200'>
            <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
            </svg>
          </a>
        </div>
      </div>
      {[
        {
          title: 'Productos',
          links: [
            { label: 'Alimentos para perros', href: '#categorias' },
            { label: 'Alimentos para gatos', href: '#categorias' },
            { label: 'Accesorios', href: '#categorias' },
            { label: 'Higiene y salud', href: '#categorias' },
            { label: 'Aves y otros', href: '#categorias' },
          ],
        },
        {
          title: 'Tienda',
          links: [
            { label: 'Quiénes somos', href: '#nosotros' },
            { label: 'Cómo comprar', href: 'https://wa.me/5493884000000?text=Hola!%20%C2%BFc%C3%B3mo%20puedo%20hacer%20un%20pedido%3F' },
            { label: 'Envíos en Jujuy', href: 'https://wa.me/5493884000000?text=Hola!%20quiero%20info%20sobre%20env%C3%ADos' },
            { label: 'Cambios y devoluciones', href: 'https://wa.me/5493884000000?text=Hola!%20necesito%20hacer%20un%20cambio' },
          ],
        },
        {
          title: 'Contacto',
          links: [
            { label: 'WhatsApp', href: 'https://wa.me/5493884000000' },
            { label: 'Instagram', href: '#' },
            { label: 'TikTok', href: '#' },
            { label: 'Email', href: 'mailto:hola@amorpeludito.com.ar' },
          ],
        },
      ].map((col) => (
        <div key={col.title}>
          <div className='font-bold text-[0.84rem] text-crema mb-4 tracking-[0.025em]'>{col.title}</div>
          <ul className='list-none space-y-3'>
            {col.links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className='text-[0.83rem] text-crema/36 hover:text-crema/70 transition-colors duration-200 no-underline'>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
      <p className='font-dm-mono text-[0.7rem] tracking-[0.07em] text-crema/22'>
        © 2026 <span className='text-crema/38'>Amor Peludito</span> · San Salvador de Jujuy · Argentina
      </p>
      <p className='font-dm-mono text-[0.7rem] tracking-[0.07em] text-crema/22'>
        <span className='text-crema/38'>Pet Shop local con corazón jujeño</span>
      </p>
    </div>
  </footer>
);

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Nav />
      <main id='main-content'>
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc='/videos/Hero%20video%208%20seg.mp4'
        bgImageSrc='/images/hero-background.png'
        date='Pet Shop · Jujuy'
        scrollToExpand={<HeroCTA />}
      >
        <TrustBar />
        <Categorias />
        <Productos />
        <Valores />
        <Nosotros />
        <Testimonios />
        <CtaWhatsApp />
        <Footer />
      </ScrollExpandMedia>
    </main>
    </>
  );
}
