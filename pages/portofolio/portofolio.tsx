import { Card, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { prototype } from 'module';
import { porto } from '../../data/porto';
import Layout from '../layout.tsx';
/* eslint-disable linebreak-style */

// effect shimmer for image loading
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#fffff" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

// Load image
const toBase64 = (str) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));


export default function portofolio() {
  const route = useRouter();
  return (
    <Layout pageTitle="Portofolio">
      <Row className="portofolio">
        {porto.map((portofolio) => (
          <div className="col-lg-4 col-sm-12">
            <Card>
              <div className="bgWarp">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={portofolio.photo}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475),
                  )}`}
                  alt={portofolio.title}
                />
              </div>
            </Card>
            <Card className="desc">
              <Card.Body onClick={() => route.push(`/portofolio/${portofolio.id}`)} className="click" key={portofolio.id}>
                  <span>{portofolio.type}</span>
                  <blockquote className="blockquote mb-0">
                    <p>{portofolio.title}</p>
                    <footer className="blockquote-footer">
                      {' '}
                      <cite title="Source Title">{portofolio.event}</cite>
                    </footer>
                  </blockquote>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Layout>
  );
}
