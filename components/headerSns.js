import { Navbar, Nav } from 'react-bootstrap';

const HeaderSns = () => {
    return (
        <div style={styles.header}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src='/images/React-icon.png'
                        width="50"
                        height="30"
                        alt="React logo"
                    />
                    NextSns
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="#features">LOGOUT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar >
        </div>
    );
}
export default HeaderSns;

// CSS in Js
const styles = {
    header: {
        height: '10vh',
    },
};
