import { Container } from './styles'

export function Input({ icon: Icon, primary = false, ...rest }) {
  return (
    <Container primary={primary}>
      {Icon && <Icon size={20} />}
      <input   {...rest} />
    </Container>
  )
}