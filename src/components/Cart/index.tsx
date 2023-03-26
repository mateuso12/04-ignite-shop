import React from 'react'

import { X } from 'phosphor-react'

import { CartContainer } from './styles'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'

export default function Cart() {
  return (
    <CartContainer>
      <header>
        <X size={24} />
      </header>

      <main>
        <h3>Sacola de compras</h3>
        <CartItem />
      </main>

      <CheckoutButton />
    </CartContainer>
  )
}
