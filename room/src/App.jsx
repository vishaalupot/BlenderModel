import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
      <ambientLight/>
      <OrbitControls />
        <Suspense fallback={null}>
          < Earth />
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
