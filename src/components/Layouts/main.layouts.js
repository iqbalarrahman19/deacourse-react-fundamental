import React from "react"
import Footer from "../Footer/main.Footer"
import Navigation from "./navigation.layouts"

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default MainLayouts