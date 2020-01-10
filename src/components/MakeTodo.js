import React, { useContext } from "react";
import {
  Typography,
  Divider,
  Form,
  Input,
  Row,
  Col,
  Button,
  notification
} from "antd";
import { Todo } from "../App";

const { TextArea } = Input;
const { Title } = Typography;
function MakeTodo(props) {
  document.title = "Create a To Do";
  const { dispatch } = useContext(Todo);

  const { getFieldDecorator, validateFields, resetFields } = props.form;

  const onSubmit = e => {
    e.preventDefault();
    validateFields((err, value) => {
      if (!err) {
        dispatch({ type: "CREATE_TODO_SUCCESS", payload: value });
        resetFields();
        notification.success({
          message: "Success!",
          description: "A new To-Do is added."
        });
      } else {
        notification.error({
          message: "Error!",
          description: "Please follow the warning instructions"
        });
      }
    });
  };

  return (
    <>
      <Title level={2}>Create a To Do</Title>
      <Divider />
      <Form onSubmit={onSubmit} hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Title is required"
                  },
                  {
                    validator: (rule, value, callback) => {
                      if (value && value.length < 10) {
                        callback("Description must be atleast 10 characters");
                      }
                      callback();
                    }
                  }
                ]
              })(<Input placeholder="Please enter a title" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Item label="Description">
              {getFieldDecorator("description", {
                rules: [
                  {
                    required: true,
                    message: "Description is required"
                  },
                  {
                    validator: (rule, value, callback) => {
                      if (value && value.length < 20) {
                        callback("Description must be atleast 20 characters");
                      }
                      callback();
                    }
                  }
                ]
              })(
                <TextArea
                  autoSize={{ maxRows: 10, minRows: 5 }}
                  placeholder="Please enter a description"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
          <Button onClick={() => resetFields()} style={{ marginLeft: "5px" }}>
            Clear
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Form.create({ name: "create_todo" })(MakeTodo);
