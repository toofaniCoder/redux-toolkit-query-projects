import { Row, Col, Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const { Title, Paragraph } = Typography;

const Students = () => {
  let history = useHistory();
  return (
    <Row gutter={[20, 20]}>
      {new Array(8).fill("").map((item, index) => (
        <Col span={6} key={index}>
          <Card
            hoverable={true}
            bordered={false}
            cover={<img alt="example" src="https://i.pravatar.cc/1920" />}
            actions={[
              <EyeOutlined
                key="view"
                onClick={() => history.push("/students/100")}
              />,
              <EditOutlined
                key="edit"
                onClick={() => history.push("/students/edit/100")}
              />,
              <DeleteOutlined
                key="setting"
                onClick={() => alert("delete item!")}
              />,
            ]}
          >
            <div className="student-info">
              <Title level={5}>Subroto Biswas</Title>
              <Paragraph>subroto@example.com</Paragraph>
              <Paragraph>+91 444-4444-444</Paragraph>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Students;
