import { React } from "react";
import Card from "react-bootstrap/Card";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import { format } from "date-fns";
import Logo from "../../assets/icons_people05.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ChallengeCard = () => {
  const challenges = [
    {
      title: "Challenge 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 6, 11), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 8, 1), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 2, 28), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 5, 13), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 5",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 9, 21), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 6",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 3, 11), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 7",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 4, 15), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 8",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 6, 1), "dd / MM / yyyy"),
    },
    {
      title: "Challenge 9",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, exercitationem magnam. Omnis, est possimus? Ipsam ducimus dolorem, necessitatibus optio magnam dignissimos, saepe consequuntur quod nostrum neque at aliquam dolore impedit.",
      tags: ["Energía Renovable", "Salud", "Social"],
      date: format(new Date(2021, 6, 4), "dd / MM / yyyy"),
    },
  ];

  return (
    <Container className="mb-5">
      <Row>
        {challenges.map((i) => (
          <Col md={4} className="mt-5">
            <Card style={{ width: "22vw" }}>
              <Card.Img src={Logo} variant="top" />
              <Card.Body>
                <div className="d-inline-flex" id="card-title">
                  {i.title}
                  <Card.Title></Card.Title>
                  <div className="card-buttons">
                    <LikeBtn/> <CommentBtn/>
                  </div>
                </div>
                <div className="d-inline-flex" id="tags">
                  {i.tags.map((t) => (
                    <p className="mt-1" style={{ fontSize: "1vw" }}>{t}</p>
                  ))}
                </div>
                <p style={{ fontSize: "0.6vw" }}>{i.description}</p>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChallengeCard;
