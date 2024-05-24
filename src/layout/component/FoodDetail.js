import { useEffect, useState } from "react";
import Api, { endpoints } from "../../Api";
import { useParams } from "react-router-dom";

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
    </>
  );
};

export default FoodDetail;
