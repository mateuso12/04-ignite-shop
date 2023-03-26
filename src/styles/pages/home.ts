import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(32, 32, 36, 0.9)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    p: {
      fontSize: '$lg',
      color: '$gray100',
      lineHeight: '32px',
    },

    span: {
      fontWeight: '700',
      fontSize: '$xl',
      color: '$green300',
      lineHeight: '33.6px',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },

    button: {
      padding: '12px',
      borderRadius: '6px',
      border: 'none',
      background: '$green300',
      color: '$white',

      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        background: '$green500',
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
