import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camiseta1 from '../assets/camisetas/1.svg'
import camiseta2 from '../assets/camisetas/2.svg'
import camiseta3 from '../assets/camisetas/3.svg'

export default function Home() {
  return (
    <>
      <HomeContainer>
        <Product>
          <Image src={camiseta1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={camiseta1} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={camiseta2} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={camiseta3} width={520} height={480} alt="" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  )
}
