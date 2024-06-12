import { useEffect, useState } from "react";
import Api, { endpoints } from "../../Api";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Moment from "react-moment";

const FoodDetail = () => {
  const { foodId } = useParams();
  const [foodDetail, setFoodDetail] = useState([]);
  const [food, setFood] = useState([]);

  useEffect(() => {
    const LoadFood = async () => {
      try {
        const resF = await Api.get(endpoints["foodId"](foodId));
        setFood(resF.data);
        console.log("resF", resF.data);
      } catch (err) {
        console.error(err);
      }
    };
    LoadFood();

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
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              style={{ height: 300, width: "100%" }}
              src={food.image_path}
              alt="..."
            />
          </div>
          <div className="col-sm">
            <div className="card-body">
              <h5 className="card-title">{food.name}</h5>
              <p className="card-text">{food.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  <Moment fromNow>{food.created_date}</Moment>
                </small>
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
                  <Card.Text>
                    <Moment fromNow>{fd.created_date}</Moment>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </>
          ))}
        </Row>
      </div>
    </>
  );
};

export default FoodDetail;
