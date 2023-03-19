import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'
import { CartButtonWithBadge } from '@/components/CartButton'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="logo" />
        </Link>
        <CartButtonWithBadge onClick={() => true} count={20} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
