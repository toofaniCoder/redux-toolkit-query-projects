import { useEffect } from "react";
import { Col, Card, Typography, message } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDeleteStudentMutation } from "../../services/students";
import { useHistory } from "react-router-dom";

const key = "deletable";

const { Title, Paragraph } = Typography;
const StudentItem = ({ student }) => {
  let history = useHistory();
  const [deleteStudent, { isLoading, isSuccess }] = useDeleteStudentMutation();
  const { id, fullName, phone, email } = student;

  useEffect(() => {
    if (isLoading) {
      message.loading({ content: "deleting...", key });
    }
    if (isSuccess) {
      message.success({ content: "deleted successfully", key, duration: 2 });
    }
  }, [isLoading, isSuccess]);

  return (
    <Col span={6} key={id}>
      <Card
        hoverable={true}
        bordered={false}
        cover={
          <img alt="example" src={`https://i.pravatar.cc/300?img=${id}`} />
        }
        actions={[
          <EyeOutlined
            key="view"
            onClick={() => history.push(`/students/${id}`)}
          />,
          <EditOutlined
            key="edit"
            onClick={() => history.push(`/students/edit/${id}`)}
          />,
          <DeleteOutlined key="setting" onClick={() => deleteStudent(id)} />,
        ]}
      >
        <div className="student-info">
          <Title level={5}>{fullName}</Title>
          <Paragraph>{phone}</Paragraph>
          <Paragraph>{email}</Paragraph>
        </div>
      </Card>
    </Col>
  );
};

export default StudentItem;
