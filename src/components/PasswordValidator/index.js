// Write your code here
import {useState} from 'react'
import {
  Container,
  SubContainer,
  Heading,
  Para,
  Input,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [Password, setPassword] = useState('')
  const [Alert, setAlert] = useState(true)
  const PasswordChange = event => {
    const Length = Password.length
    if (Length < 8) {
      setAlert(true)
      setPassword(event.target.value)
    } else {
      setAlert(false)
      setPassword(event.target.value)
    }
  }
  console.log(Password)

  return (
    <Container>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <Input type="password" onChange={PasswordChange} value={Password} />
        {Alert ? (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        ) : (
          ''
        )}
      </SubContainer>
    </Container>
  )
}
export default PasswordValidator
