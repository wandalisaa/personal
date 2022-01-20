import { Row } from 'react-bootstrap';
import Image from 'next/image';
// @ts-ignore
import Layout from './layout.tsx';
import me from '../public/pasfoto.png';

export default function goals() {
  return (
    <Layout pageTitle="Goals">
      <Row className="contact">
        <div className="col-lg-6 col-sm-12">
          <div className="profile">
            <Image
              alt="Me"
              src={me}
              layout="fixed"
              width={200}
              height={200}
              className="photo"
            />
            <h4>Wanda Khalishah</h4>
            <p>Graphic Designer | Front end Developer</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h6>Email</h6>
          <p>wandakhalishah076@gmail.com</p>
          <h6>Location</h6>
          <p>Medan , Indonesia</p>
        </div>
      </Row>
    </Layout>
  );
}
