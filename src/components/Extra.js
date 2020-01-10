import React, { useEffect, useState } from "react";
import {
  Typography,
  Divider,
  Row,
  Col,
  notification,
  Spin,
  Icon,
  Card
} from "antd";
import axios from "axios";

const { Title } = Typography;
function Extra() {
  const [coll, setColl] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(resData => {
        // I just added this for the loading effect to kick in
        setTimeout(() => {
          setColl(resData.data);
          setLoading(false);
        }, 2000);
      })
      .catch(resErr => {
        setLoading(false);
        notification.error({
          message: "Error!",
          description: "Something went wrong."
        });
      });
  }, []);
  return (
    <>
      <Title level={3}>
        Source: https://jsonplaceholder.typicode.com/posts
      </Title>
      <Divider />
      <Spin
        spinning={loading}
        indicator={<Icon type="loading" />}
        tip="Fetching data..."
      >
        <div
          style={{ maxHeight: "450px", overflowY: "auto", overflowX: "hidden" }}
        >
          <Row gutter={[8, 8]}>
            {coll.length ? (
              coll.map(({ id, title, body }) => (
                <Col span={8} key={id}>
                  <Card title={title}>
                    <p>{body}</p>
                  </Card>
                </Col>
              ))
            ) : (
              <Title level={2}>Nothing to show...</Title>
            )}
          </Row>
        </div>
      </Spin>
    </>
  );
}

export default Extra;
