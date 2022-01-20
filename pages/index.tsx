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
            Nama saya
{' '}
<b>Wanda Khalishah</b>
{' '}
, seorang mahasiswa di universitas sumatera utara jurusan teknologi informasi . Saya sangat senang membelajari hal baru terutama di bidang
{" "}
            <div className="gradient">
              <p>desain dan Teknologi .</p>
            </div>
          </h5>
          <h5>Hal yang disukai</h5>
          <h4>
            <Badge bg="primary">🎨 Art</Badge>
            <Badge bg="primary">🎬 Kdrama</Badge>
            <Badge bg="primary">🍰 Baking</Badge>
          </h4>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h5>Pendidikan saya</h5>
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
