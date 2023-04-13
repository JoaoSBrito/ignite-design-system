import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray200',
  borderRadius: '$full',
  height: '$10',
})
export function App() {
  return <Button>Hello World</Button>
}
