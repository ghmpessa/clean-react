import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts'
import { PrivateRoute } from '@/presentation/components/'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters/current-account-adapter'
import { makeSurveyList, makeSignUp, makeLogin } from '@/main/factories/pages'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setCurrentAccount: setCurrentAccountAdapter,
        getCurrentAccount: getCurrentAccountAdapter
      }}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={makeLogin}/>
          <Route path="/signup" exact component={makeSignUp}/>
          <PrivateRoute path="/" exact component={makeSurveyList}/>
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
