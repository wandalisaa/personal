/* eslint-disable linebreak-style */
/* eslint-disable quotes */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable max-len */

/* eslint-disable semi */

/* eslint-disable react/jsx-indent */

/* eslint-disable arrow-body-style */

/* eslint-disable react/function-component-definition */

/* eslint-disable react/no-unescaped-entities */

/* eslint linebreak-style: ["error", "windows"] */

import type { NextPage } from "next";

import {
  Row,
  Badge,
} from "react-bootstrap";

// @ts-ignore
import Layout from "./layout.tsx";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Row className="aboutMe">
        <div className="col-lg-6 col-sm-12">
          <h5 className="w-75">
            My name is
{' '}
<b>Wanda Khalishah</b>
{' '}
, a technology Information student
            . I live in Medan, North Sumatra, Indonesia. I am a person who likes
            to learn new things especially about
{" "}
            <div className="gradient">
              <p>design and technology .</p>
            </div>
          </h5>
          <h5>Things I Like</h5>
          <h4>
            <Badge bg="primary">🎨 Art</Badge>
            <Badge bg="primary">🎬 Kdrama</Badge>
            <Badge bg="primary">🍰 Baking</Badge>
          </h4>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h5>A little bit about my education</h5>
          <ul className="timeline">
            <li className="event">
              <h6>2013 - 2016</h6>
              <p>SMP IT HIKMATUL FADILLAH</p>
            </li>
            <li className="event">
              <h6>2016 - 2019</h6>
              <p>MAN 1 MEDAN</p>
            </li>
            <li className="event" id="date">
              <h6>2019 - Now</h6>
              <p>TECHNOLOGY INFORMATION , USU</p>
            </li>
          </ul>
        </div>
      </Row>
    </Layout>
  );
};

export default Home;
