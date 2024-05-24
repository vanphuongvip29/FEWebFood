import { useEffect, useState } from "react";
import Api, { endpoints } from "../../Api";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

const FoodDetail = () => {
  const { foodId } = useParams();
  const [foodDetail, setFoodDetail] = useState([]);

  useEffect(() => {
    const LoadFoodDetail = async () => {
      try {
        const resFD = await Api.get(endpoints["fooddetail"](foodId));
        setFoodDetail(resFD.data);
        console.log("resFD");
        console.log("resFD", resFD.data);
      } catch (err) {
        console.error("Error fetching food detail:", err);
      }
    };
    LoadFoodDetail();
  }, []);
  return (
    <>
      <h1 className="text-center text-danger">CHI TIET FOODDETAIL</h1>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              style={{ height: 300, width: "100%" }}
              src="https://res.cloudinary.com/dogosq8z4/image/upload/v1667119870/jrbes2askifkg0nmvzvz.jpg"
              alt="..."
            />
          </div>
          <div class="col-sm">
            <div class="card-body">
              <h5 class="card-title">name</h5>
              <p class="card-text">fd.description</p>
              <p class="card-text">
                <small class="text-muted">fd.created_date</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 20 }}>
        <Row>
          {foodDetail.map((fd) => (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={fd.image_path} />
                <Card.Body>
                  <Card.Title>{fd.name}</Card.Title>
                  <Card.Text>{fd.created_date}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              ;
            </>
          ))}
        </Row>
      </div>
    </>
  );
};

export default FoodDetail;
