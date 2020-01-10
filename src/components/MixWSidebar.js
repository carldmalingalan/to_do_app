import React, { useEffect, useState } from "react";
import { Layout, Menu, Icon, Divider } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Sider, Content, Header } = Layout;

function MixWSidebar(props) {
  const { pathname } = useLocation();
  const { children } = props;
  const [currPath, setPath] = useState(pathname);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <Layout style={{ minHeight: "100vh", height: "auto" }}>
      <Header className="header"></Header>
      <Content style={{ padding: "50px" }}>
        <Divider />
        <Layout style={{ padding: "24px ", background: "#fff" }}>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[currPath]}
              style={{ height: "100%" }}
            >
              <Menu.Item
                key="/todo/create"
                style={{ height: "50px", fontSize: "16px" }}
              >
                <Link to="/todo/create">
                  <span>
                    <Icon type="solution" />
                    Create Todo
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="/todo"
                style={{ height: "50px", fontSize: "16px" }}
              >
                <Link to="/todo">
                  {" "}
                  <span>
                    <Icon type="calendar" />
                    To Do List
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item
                key="/extra"
                style={{ height: "50px", fontSize: "16px" }}
              >
                <Link to="/extra">
                  <span>
                    <Icon type="appstore" />
                    Extra
                  </span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default MixWSidebar;
