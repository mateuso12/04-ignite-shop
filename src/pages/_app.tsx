import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'
import { CartButtonWithBadge } from '@/components/CartButton'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" />
        <CartButtonWithBadge onClick={() => true} count={20} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
