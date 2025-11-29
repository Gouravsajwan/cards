import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='grid grid-cols-4 gap-6 p-6'>
<Profile userId={1}/>
<Profile userId={2}/>
<Profile userId={3}/>
<Profile userId={4}/>
<Profile userId={5}/>
<Profile userId={6}/>
<Profile userId={7}/>
<Profile userId={8}/>


</div>
    </>
  )
}

export default App
