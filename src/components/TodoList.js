import React, { useContext, useEffect } from "react";
import {
  Typography,
  Divider,
  Alert,
  Button,
  Icon,
  Tooltip,
  Row,
  Col,
  notification
} from "antd";
import { Todo } from "../App";

const { Title } = Typography;

function TodoList() {
  const { todo, dispatch } = useContext(Todo);
  const { list } = todo;
  useEffect(() => {
    document.title = "To Do List";
  }, []);

  const deleteOne = id => {
    dispatch({ type: "DELETE_ONE", payload: id });
    notification.success({
      message: "Success!",
      description: "A Todo has been deleted."
    });
  };

  return (
    <>
      <Title level={2}>ToDo List</Title>
      <Button
        type="danger"
        disabled={list.length ? false : true}
        ghost
        onClick={() => {
          dispatch({ type: "CLEAR_TODO" });
          notification.error({
            message: "Cleared!",
            description: "All Todos has been deleted."
          });
        }}
      >
        Clear all
      </Button>
      <Divider />
      <Row gutter={[8, 8]}>
        {list.length ? (
          list.map((value, index) => (
            <Col span={6} key={index}>
              <Alert
                key={index}
                type="info"
                message={
                  <span>
                    {value.title}
                    <span style={{ float: "right" }}>
                      <Tooltip placement="top" title="Delete">
                        <Icon
                          type="minus-circle"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            deleteOne(index);
                          }}
                        />
                      </Tooltip>
                    </span>
                  </span>
                }
                description={value.description}
                style={{
                  padding: "5px 10px"
                }}
              />
            </Col>
          ))
        ) : (
          <Title level={2}>Nothing to show....</Title>
        )}
      </Row>
    </>
  );
}

export default TodoList;
