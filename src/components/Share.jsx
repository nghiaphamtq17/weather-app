import React from "react";

const Share = (props) => {
  const { data } = props;

  const calTemp = (value) => {
    return value / 10;
  };

  return (
    <div className="container text-center">
      <h1>Tỉnh / Thành Phố : {data?.city?.name}</h1>
      <p>Thời tiết : {(() => {
                switch (
                  data?.list[0]?.weather[0]?.main
                ) {
                  case "Clouds":
                    console.log("clouds");

                    return "Gió vcl";
                  case "Rain":
                    console.log("rain");
                    return "mưa vcl "
                    
                  default:
                    return "Đoán xem";
                }
              })()}</p>
      <p>Nhiệt độ : {calTemp(data?.list[0].main.temp) || 'Chưa cập nhật'} °C</p>
      <p>Tốc độ gió : {data?.list[0]?.clouds.all || "Chưa cập nhật"}</p>
    </div>
  );
};

export default Share;
