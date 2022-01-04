import { Form, Button, Row, Card } from "react-bootstrap";
import Layout from "./layout.tsx";

export default function message() {
  return (
    <Layout pageTitle="Messages">
      <div className="messages">
        <Row>
          <div className="col-lg-6 col-sm-12">
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formText">
                <Form.Control as="textarea" rows={3} />
                <Form.Text className="text-muted">
                  Write what you think about me or some message for me
                </Form.Text>
              </Form.Group>
              <Button variant="primary" className="float-right" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-lg-6 col-sm-12">
            <span>What people say about me</span>
            <Card className="box">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Unicorn Borjong
                </Card.Subtitle>
                <Card.Text>
                  Such a nice and cheerful girl that i ever know
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    </Layout>
  );
}
