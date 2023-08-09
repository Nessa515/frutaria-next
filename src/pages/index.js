import Busca from '@/components/Busca'
import Cabecalho from '@/components/Cabecalho'
import ListaCards from '@/components/ListaCards'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Busca />
      <ListaCards />
    </>
  )
}
