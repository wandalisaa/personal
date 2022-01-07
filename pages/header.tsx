import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Button,
  Card,
} from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function header() {
  const router = useRouter();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link scroll={false} href="/">
                <a className={router.pathname == '/' ? 'nav-link active' : 'nav-link'}>   About Me   </a>
              </Link>
              <Link scroll={false} href="/portofolio/portofolio">
                <a className={router.pathname == '/portofolio/portofolio' ? 'nav-link active' : 'nav-link'}>   Portofolio   </a>
              </Link>
              <Link scroll={false} href="/experience">
                <a className={router.pathname == '/experience' ? 'nav-link active' : 'nav-link'}>Experiences</a>
              </Link>
            </Nav>
            <Nav>
              <Link scroll={false} href="/contact">
                <a className={router.pathname == '/contact' ? 'nav-link active' : 'nav-link'}>My Contact</a>
              </Link>
              <Link scroll={false} href="/message">
                <a className={router.pathname == '/message' ? 'nav-link active' : 'nav-link'}>Message</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
