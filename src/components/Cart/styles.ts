import { styled } from '@/styles'

export const CartContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 10,
  top: 0,
  right: 0,
  bottom: 0,

  background: '$gray800',

  width: '480px',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})
