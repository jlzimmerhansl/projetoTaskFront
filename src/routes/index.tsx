import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from '../styles/global'

import { ThemeProvider, DefaultTheme } from 'styled-components'
import theme from '../styles/theme'

import Landing from '../pages/Landing'
import CreateStory from '../pages/CreateStory'
import CreateTask from '../pages/CreateTask'

const Routes: React.FC = () => {
  return (
    <Switch>
      <ThemeProvider theme={theme}>
        <Route path="/" exact component={Landing} />
        <Route path="/create-story" exact component={CreateStory} />
        <Route path="/create-task/:id" exact component={CreateTask} />
        <GlobalStyle />
      </ThemeProvider>
    </Switch>
  )
}

export default Routes
