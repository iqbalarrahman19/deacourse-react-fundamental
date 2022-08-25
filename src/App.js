//parent component
import React from "react"
import Albums from "./components/Albums/main.albums"
import MainLayouts from "./components/Layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Posts from "./components/Posts/main.posts"
import Home from "./components/Home/main.home"

const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
          </Routes>
        </Router>
      </MainLayouts>
      
    </>
  )
}

export default App
