import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './todoApp.tsx'
import { Provider, } from 'react-redux'
import store from './stateManagement/Store.ts'
import './index.css'
import ThemeProvider from './components/themeProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
