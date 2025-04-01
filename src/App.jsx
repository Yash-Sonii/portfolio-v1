import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Education from './components/Education'
import Projects from './components/Projects'
import  Connect  from './components/Connect'
const App = () => {
  return (
    <div className="overflow-x-hidden relative min-h-screen bg-slate-950">
      <div className="absolute inset-0">
        <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          <div></div>
        </div>
      </div>
      
      <div className="relative z-10 ">

         <Navbar />
  <Hero />
  <About />
  <Technologies />
  <Education />
  <Projects />
  <Connect /> 

      </div>
    </div>
  )
}

export default App