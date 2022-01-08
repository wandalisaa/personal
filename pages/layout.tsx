/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Row,
  Button,
  Card,
} from 'react-bootstrap';
import Image from 'next/image';
import Head from 'next/head';
import { ReactNode } from 'react';
// @ts-ignore
import Header from './header.tsx';
// @ts-ignore
import Footer from './footer.tsx';
import styles from '../styles/Home.module.css';
import me from '../styles/asset/me.png';
import dribbble from '../styles/asset/dribbble.png';
import github from '../styles/asset/github.png';
import linkedin from '../styles/asset/linkedin.png';

interface LayoutProps {
  children : ReactNode;
  pageTitle: string;
}

export default function layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          WandaWorld |
          {' '}
          {pageTitle}
        </title>
      </Head>
      <Container className="text-white">
        <div className="ellipse1" />
        <div className="ellipse2" />
        <div className="ellipse3" />
        <div className="ellipse6" />
        <div className="ellipse7" />
        <div className="ellipse8" />
        <div className="ellipse9" />
        <div className="ellipse10" />
        <div className="ellipse11" />
        <div className="ellipse12" />
        <Button className={styles.contactBtn} variant="dark" href="mailto:wandakhalishah076@gmail.com">
          Contact Me
        </Button>
        <Row>
          <div className="col-lg-4 col-sm-12">
            <div className="me">
              <Image
                alt="Me"
                src={me}
                layout="responsive"
                width={20}
                height={15}
              />
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 overview order-first order-md-last">
            <h1>Hello There !  🤡🎉</h1>
            <h1>Welcome to my page </h1>
            <p>
              I'm Wanda .
            </p>
            <p>See more about me on my social media .</p>
            <a target="_blank" href="https://www.linkedin.com/in/wanda-khalishah-898138209/" className="icon" rel="noreferrer">
              <Image alt="LinkedIn" src={linkedin} width={30} height={30} />
            </a>
            <a target="_blank" href="https://github.com/wandalisaa" className="icon" rel="noreferrer">
              <Image alt="Github" src={github} width={30} height={30} />
            </a>
            <a target="_blank" href="https://dribbble.com/Wanda_Khalishah" className="icon" rel="noreferrer">
              <Image alt="Dribbble" src={dribbble} width={30} height={30} />
            </a>
          </div>
        </Row>
        <Header />
        <Card text="white" className="contentCard">
          <div>{children}</div>
          <div className="lineBottom" />
        </Card>
        <Footer />
      </Container>
    </>
  );
}
