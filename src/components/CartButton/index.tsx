import { styled } from '@/styles'
import { Handbag } from 'phosphor-react'
import { Badge } from './Badge'

interface ButtonWithBadgeProps {
  count: number
  onClick: () => void
}

const ButtonStyled = styled('button', {
  position: 'relative',
  backgroundColor: '$gray800',
  border: 'none',
  borderRadius: '6px',
  color: '$gray400',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px',
})

export const CartButtonWithBadge = ({
  count,
  onClick,
}: ButtonWithBadgeProps) => {
  return (
    <ButtonStyled onClick={onClick}>
      <Handbag size={24} weight="bold" />
      {count > 0 && <Badge count={count} />}
    </ButtonStyled>
  )
}
