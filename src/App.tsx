
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
// import { LoadingProvider } from './contexts/LoadingContext'

function App() {


  return (
    <>
      {/* <LoadingProvider> */}
        <RouterProvider router={router} />
      {/* </LoadingProvider> */}
    </>
  )
}

export default App
