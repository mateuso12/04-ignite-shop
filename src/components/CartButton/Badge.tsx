// Badge.tsx

import { styled } from '@/styles'

interface BadgeProps {
  count: number
}

const BadgeStyled = styled('span', {
  position: 'absolute',
  top: '-0.625rem',
  right: '-0.625rem',
  backgroundColor: '$green500',
  border: '3px solid $gray900',
  borderRadius: '50%',
  color: 'white',
  display: 'flex',
  fontSize: '0.875rem',
  padding: '4px 6px',
})

export const Badge = ({ count }: BadgeProps) => {
  return <BadgeStyled>{count}</BadgeStyled>
}
