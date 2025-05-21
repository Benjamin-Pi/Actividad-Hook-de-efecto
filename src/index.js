import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ImageViewer from "./ImageViewer";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container className="mt-3">
    <Row>
      <ImageViewer />
    </Row>
  </Container>
);