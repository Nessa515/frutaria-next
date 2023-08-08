import Busca from '@/components/Busca'
import Cabecalho from '@/components/Cabecalho'
import Cards from '@/components/Cards'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Busca />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </>
  )
}
