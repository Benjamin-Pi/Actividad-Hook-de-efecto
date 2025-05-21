import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


function Galeriamascotas() {
  const [mascota, setmascota] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json")
      .then((respuesta) => respuesta.json())
      .then((info) => setmascota(info))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Galería de Mascotas</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {mascota.map((mascota, index) => (
          <Col key={index}>
            <Card style={{ height: "100%" }}>
              <Card.Img variant="top" src={mascota.foto} alt={mascota.nombre} />
              <Card.Body>
                <Card.Title>{mascota.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {mascota.especie} - {mascota.raza}
                </Card.Subtitle>
                <Card.Text>{mascota.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Galeriamascotas;
