import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>ARIZONA INTERIOR EXTERIOR</h1>
      <p>Interior Design | Exterior Design | Customized Furniture</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
