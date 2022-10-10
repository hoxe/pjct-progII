
import './App.scss'



import AuthContextProvider from './components/authContext';
import Routers from './components/route';

function App() {

  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  )
}

export default App