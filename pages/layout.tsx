/* eslint-disable react/no-unescaped-entities */
import {
  Container, Row, Button, Card,
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
import youtube from '../styles/asset/youtube.png';
import canva from '../styles/asset/canva.png';
import instagram from '../styles/asset/instagram.png';
import 'animate.css';

interface LayoutProps {
  children: ReactNode;
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
        <div className="ellipse1 animate__animated animate__bounce animate__infinite" />
        <div className="ellipse2  " />
        <div className="ellipse3  " />
        <div className="ellipse6  " />
        <div className="ellipse7 " />
        <div className="ellipse8  " />
        <div className="ellipse9 " />
        <div className="ellipse10 " />
        <div className="ellipse11  " />
        <div className="ellipse12  " />
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <Button
          className={styles.contactBtn}
          variant="dark"
          href="mailto:wandakhalishah076@gmail.com"
        >
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
            <h1>Hello There ! 🤡🎉</h1>
            <h1>Nice to see you here </h1>
            <p>Its Wanda's personal website</p>
            <p>Connect with me on my social media below and discover my portofolio</p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wanda-khalishah-898138209/"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="LinkedIn" src={linkedin} width={30} height={30} />
            </a>
            <a
              target="_blank"
              href="https://github.com/wandalisaa"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="Github" src={github} width={30} height={30} />
            </a>
            <a
              target="_blank"
              href="https://dribbble.com/Wanda_Khalishah"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="Dribbble" src={dribbble} width={30} height={30} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@wandakhalishah8959"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="Youtube" src={youtube} width={30} height={30} />
            </a>
            <a
              target="_blank"
              href="https://www.canva.com/p/wandaworld/"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="Canva" src={canva} width={30} height={30} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/wandaworld_design"
              className="icon"
              rel="noreferrer"
            >
              <Image alt="Instagram" src={instagram} width={30} height={30} />
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
