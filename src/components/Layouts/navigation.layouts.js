import { Navbar, Container, Nav } from "react-bootstrap"
import "../../App.css"
import Logo from "../../logo.svg"
const Navigation = () => {
  const pathName = window.location.pathname
  const path = pathName.substring(1)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img 
            alt=""
            src={Logo}
            width={"30px"}
            height="30"
            className="d-inline-block align-top mx-1"
          />
          Course Reactjs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/albums" 
            className={path === "albums" ? "navbar-link active" : "navbar-link"} 
            >ALBUMS</Nav.Link>
            <Nav.Link href="/posts"
            className={path === "posts" ? "navbar-link active" : "navbar-link"} 
            >POSTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation