import './App.css'
import LoginButton from './Components/LoginButton/LoginButton.jsx'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import { useAuth0 } from '@auth0/auth0-react'

function App() {

const {isLoading, error} = useAuth0()

return (

  <main>

    {error && <p className='error'> Authentication error </p>}

    {!error && isLoading && <p className='loading'> Loading ..... </p>}

    {!error && !isLoading && (

      <>
        <LoginButton></LoginButton>
        
        <GalleryPage></GalleryPage>
      </>

    )}

  </main>
)
}

export default App
