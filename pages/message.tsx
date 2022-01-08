/* eslint-disable no-unused-vars */
import {
  Form, Button, Row, Card,
} from 'react-bootstrap';
import { useState } from 'react';
// @ts-ignore
import Layout from './layout.tsx';

interface messageProps{
  dataComment: [];
}
export default function message(props: messageProps) {
  const { dataComment } = props;
  const [data, setstate] = useState(dataComment as any[]);
  const [comment, setComment] = useState('');
  const [nama, setName] = useState('');

  const submitComment = async () => {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, nama }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const addComment = await response.json();
  };
  return (
    <Layout pageTitle="Messages">
      <div className="messages">
        <Row>
          <div className="col-lg-6 col-sm-12">
            <span>What people say about me</span>
            {data.map((komentar) => (
              <Card className="box" key={komentar.id}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {komentar.name}
                  </Card.Subtitle>
                  <Card.Text>{komentar.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="col-lg-6 col-sm-12 order-first order-md-last">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={nama}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formText">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Write what you think about me or some message for me
                </Form.Text>
              </Form.Group>
              <Button
                variant="primary"
                className="float-right"
                type="submit"
                onClick={submitComment}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Row>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://wandaworld.vercel.app/api/comment');
  const dataComment = await res.json();

  return {
    props: {
      dataComment,
    },
  };
}
