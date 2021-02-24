import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: 'Campo Obrigatório',
    passwordConfirmationError: 'Campo Obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.name, state.email, state.password])

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form} >
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Entre com seu nome"/>
          <Input type="email" name="email" placeholder="Entre com seu e-mail"/>
          <Input type="password" name="password" placeholder="Entre com sua senha"/>
          <Input type="password" name="passwordConfirmation" placeholder="Confirme sua senha"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Criar Conta</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
