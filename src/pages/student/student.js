import React from "react";
import { Row, Col, Card, Image, Descriptions } from "antd";

const Student = () => {
  return (
    <div>
      <Card title="View Student Detials">
        <Row gutter={[0, 20]}>
          <Col span={8}>
            <Image width={200} src="https://i.pravatar.cc/300" />
          </Col>
          <Col span={16}>
            <Descriptions title="Subroto Biswas " layout="vertical">
              <Descriptions.Item label="Full Name">
                Subroto Biswas
              </Descriptions.Item>
              <Descriptions.Item label="Phone Number">
                +91 111-1111-111
              </Descriptions.Item>
              <Descriptions.Item label="E-mail Address">
                subroto@example.com
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Student;
