import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import { Container, Button, Number } from './styles'

export function Quantity({ number, isDetails }) {
  return (
    <Container>
      <Button>
        <AiOutlineMinus />
      </Button>

      <Number isDetails={isDetails}>{number}</Number>

      <Button>
        <AiOutlinePlus />
      </Button>
    </Container>
  )
}