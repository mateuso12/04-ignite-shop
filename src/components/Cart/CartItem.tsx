import React from 'react'
import Image from 'next/image'

export default function CartItem() {
  return (
    <div>
      <div>
        <Image src={'image'} width={300} height={300} alt="" />
      </div>
      <div>
        <p>Camiseta</p>
        <span>R$ 20,00</span>
        <button>Remover</button>
      </div>
    </div>
  )
}
