import { styled } from "@/styles"

const Button = styled("button", {
  backgroundColor: "$primary",
  color: "$gray100",
  borderRadius: "10px",
  border: 'none',
  padding: '10px',
  fontWeight: "$medium",
  fontSize: "$md",
  lineHeight: 1,
})

export default function Home() {
  return (
    <>
     <Button>Hello World</Button>
    </>
  )
}
