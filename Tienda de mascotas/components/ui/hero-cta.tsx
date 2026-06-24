'use client';

import { motion } from 'framer-motion';

export default function HeroCTA() {
  return (
    <motion.a
      href='#categorias'
      className='inline-block bg-pizarra text-crema font-bold text-[0.95rem] tracking-[0.04em] px-8 py-3 hover:bg-pizarra-dark transition-colors duration-200 no-underline'
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
    >
      Ver tienda
    </motion.a>
  );
}
