import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import slider from "../../image/slider.jpg";
import Image from "react-bootstrap/Image";
import "../../css/home.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Api, { endpoints } from "../../Api";
import Pagination from "react-bootstrap/Pagination";
import { useLocation, useNavigate, NavLink } from "react-router-dom";

const Home = () => {
  const [cate, setCate] = useState([]);
  const [food, setFood] = useState([]);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [kw, setKw] = useState("");
  const navigate = useNavigate();

  const LoadCategory = async () => {
    const resCate = await Api.get(endpoints["categorys"]);
    console.info(resCate);
    setCate(resCate.data.results);
  };

  useEffect(() => {
    const LoadFood = async () => {
      let query = location.search;
      if (query === "") query = `?page=${page}`;
      else query += `&page=${page}`;
      try {
        const resFood = await Api.get(`${endpoints["foods"]}${query}`);

        setFood(resFood.data.results);

        console.info(resFood.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    LoadCategory();
    LoadFood();
  }, [location.search, page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  const search = (event) => {
    event.preventDefault();
    navigate(`/?kw=${kw}`);
  };

  return (
    <>
      <div>
        <div className="swiper-wrapper">
          <Image
            className="item-swiper-slide"
            src={slider}
            alt="logo"
            rounded
          />
          <div className="slider-left">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">
                <i class="fa-solid fa-arrow-left"></i>
              </Button>
            </ButtonGroup>
          </div>
          <div className="slider-right">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">
                <i class="fa-solid fa-arrow-right"></i>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <br />
      <div className="bg_collection">
        <div className="bg_collection_left">
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand as={NavLink} to="/">
                Danh Mục
              </Navbar.Brand>
            </Container>
          </Navbar>
          {cate.map((c) => (
            <>
              <br />
              <Navbar className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand as={NavLink} to={`/?cate=${c.id}`}>
                    {c.name}
                  </Navbar.Brand>
                </Container>
              </Navbar>
            </>
          ))}
          <br />
        </div>
        <div className="bg_collection_right">
          <div>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Sắp xếp: </Nav.Link>

                    <NavDropdown title="" id="navbarScrollingDropdown">
                      <NavDropdown.Item
                        style={{ color: "black", backgroundColor: "white" }}
                        as={NavLink}
                        to="/?ordering=name"
                      >
                        A-Z
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{ color: "black", backgroundColor: "white" }}
                        as={NavLink}
                        to="/?ordering=-created_date"
                      >
                        Mới nhất
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        style={{ color: "black", backgroundColor: "white" }}
                        as={NavLink}
                        to="/?ordering=-name"
                      >
                        Z-A
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{ color: "black", backgroundColor: "white" }}
                        as={NavLink}
                        to="/?ordering=created_date"
                      >
                        Cũ nhất
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form
                    style={{ marginLeft: 400 }}
                    className="d-flex"
                    onSubmit={search}
                  >
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      value={kw}
                      onChange={(event) => setKw(event.target.value)}
                    />
                    <Button type="submit" variant="outline-success">
                      Search
                    </Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div>
            <Row style={{ marginLeft: 15, marginTop: 22 }}>
              {food.map((f) => (
                <>
                  <Card
                    as={NavLink}
                    to={`foods/${f.id}/food_fooddetail/`}
                    style={{
                      width: "18rem",
                      margin: 5,
                      color: "black",
                      backgroundColor: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Card.Img
                      style={{ height: "12rem" }}
                      variant="top"
                      src={f.image_path}
                    />
                    <Card.Body style={{ paddingTop: 5 }}>
                      <Card.Title>{f.name}</Card.Title>
                      <Card.Text style={{ fontSize: 15 }}>
                        {f.description}
                      </Card.Text>
                      {f.food_detail.map((fd) => (
                        <>
                          {/* <Card.Text>{fd.name}</Card.Text> */}
                          {fd.tags.map((t) => (
                            <Card.Text style={{ marginBottom: 0 }}>
                              <i class="fa-solid fa-tag"></i>
                              {t.name}
                            </Card.Text>
                          ))}
                        </>
                      ))}
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </>
              ))}
            </Row>

            <Pagination style={{ marginTop: 10 }}>
              <Pagination.Item onClick={() => handlePageChange(1)}>
                {1}
              </Pagination.Item>
              <Pagination.Item onClick={() => handlePageChange(2)}>
                {2}
              </Pagination.Item>
              <Pagination.Item onClick={() => handlePageChange(3)}>
                {3}
              </Pagination.Item>
              <Pagination.Item onClick={() => handlePageChange(4)}>
                {4}
              </Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
