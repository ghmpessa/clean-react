import React from 'react'
import Styles from './signup-styles.scss'
import { Footer, Input, LoginHeader, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Link } from 'react-router-dom'

const SignUp: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state: {} }}>
        <form className={Styles.form} >
          <h2>Criar Conta</h2>
          <Input type="text" name="nome" placeholder="Entre com seu nome"/>
          <Input type="email" name="email" placeholder="Entre com seu e-mail"/>
          <Input type="password" name="password" placeholder="Entre com sua senha"/>
          <Input type="password" name="passwordConfirmation" placeholder="Confirme sua senha"/>
          <button className={Styles.submit} type="submit">Criar Conta</button>
          <Link data-testid='login' to="/signup" className={Styles.link}>Voltar para Login</Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default SignUp
