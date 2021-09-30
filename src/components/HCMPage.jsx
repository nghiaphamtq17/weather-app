import React from "react";
import { useSelector } from "react-redux";
import Share from "./Share";

const HCMPage = () => {
  const hcm = useSelector((state) => state.weather.hcm);

  return (
    <div>
      <Share data={hcm} />
    </div>
  );
};

export default HCMPage;
