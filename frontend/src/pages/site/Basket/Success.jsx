import { Button, Result } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import dataContexts from "../../../contexts/contexts";

const Success = () => {
  const { basket,setbasket } = useContext(dataContexts);

  useEffect(() => {
    setbasket([]);
  }, [setbasket]);

  return (
    <div className="success-page">
      <div className="container">
        <Result
          status="success"
          title="Ödəniş tamamlıandı!"
          subTitle="Sifarişiniz  tamamlandı"
          extra={[
            <Link to={"/"} key="home">
              <Button type="primary">Home</Button>,
            </Link>,

            <Link to={"/orders"}><Button  key="buy">Sifariş</Button></Link>,
          ]}
        />
      </div>
    </div>
  );
};

export default Success;