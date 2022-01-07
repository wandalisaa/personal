import { Card, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { prototype } from "module";
import { porto } from "../../data/porto";
import Layout from "../layout.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

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

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export async function getStaticProps() {
  const res = await fetch("https://my-json-server.typicode.com/wandalisaa/myAPI/portofolio?_limit=3");
  const dataPortofolio = await res.json();

  return {
    props: {
      dataPortofolio,
    },
  };
}

export default function portofolio(props) {
  const route = useRouter();
  const { dataPortofolio } = props;
  const [posts, setPosts] = useState(dataPortofolio);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/wandalisaa/myAPI/portofolio?_start=${posts.length}&_limit=3`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <Layout pageTitle="Portofolio">
      <Row className="portofolio">
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          loadMore={hasMore}
          hasMore={true} 
          className="row"
        >
          {posts.map((portofolio) => (
            <div className="col-lg-4 col-sm-12" key={portofolio.id}>
              <Card>
                <div className="bgWarp">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={portofolio.photo[0].url}
                    placeholder="blur"
                    quality={2}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                    alt={portofolio.title}
                  />
                </div>
              </Card>
              <Card className="desc">
                <Card.Body
                  onClick={() => route.push(`/portofolio/${portofolio.id}`)}
                  className="click"
                >
                  <span>{portofolio.types}</span>
                  <blockquote className="blockquote mb-0">
                    <p>{portofolio.title}</p>
                    <footer className="blockquote-footer">
                      {" "}
                      <cite title="Source Title">{portofolio.event}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          ))}
        </InfiniteScroll>
      </Row>
    </Layout>
  );
}
