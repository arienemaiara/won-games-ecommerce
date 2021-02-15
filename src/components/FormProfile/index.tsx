import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">My Profile</Heading>

    <S.Form>
      <TextField 
        name="name" 
        placeholder="name" 
        label="Name" />
        
      <TextField 
        name="email" 
        placeholder="E-mail" 
        label="E-mail" 
        type="email"
        disabled />

      <TextField 
        name="password" 
        placeholder="Type your password" 
        label="Password" 
        type="password" />

      <TextField 
        name="new_password" 
        placeholder="New password" 
        label="New password" 
        type="password" />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
