// @ts-ignore
import Layout from "./layout.tsx";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

// effect shimmer for image loading
const shimmer = (w: any, h: any) => `
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

const toBase64 = (str: any) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export async function getStaticProps() {
  const res = await fetch("https://my-json-server.typicode.com/wandalisaa/myAPI/experiences");
  const dataExperience = await res.json();

  return {
    props: {
      dataExperience,
    },
  };
}

interface Props {
  dataExperience: [];
}

export default function experience(props: Props) {
  const { dataExperience } = props;
  const [ data, setstate] = useState(dataExperience as any[]);
  return (
    <Layout pageTitle="Experiences">
      <Carousel className="experience" fade >
        {data.map((experience) => (
          <Carousel.Item interval={3000}>
            <Image
              className="imgBg"
              layout="fill"
              objectFit="cover"
              src={ experience.photo }
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              alt={experience.place}
            />
            <Carousel.Caption>
              <div className="imgMain" style={{backgroundImage: `url(${experience.photo})`}}>
              </div>
              <h3>{experience.title}</h3>
              <p>{experience.desc}</p>
              <footer className="blockquote-footer">{experience.place}</footer>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Layout>
  );
}
