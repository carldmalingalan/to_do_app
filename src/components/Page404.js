import React, { useEffect } from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function Page404(props) {
  useEffect(() => {
    document.title = "404 - Page not found";
  }, []);

  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle={`Sorry, the page that are trying to access can't be found`}
        extra={
          <Link to="/todo">
            <Button type="primary">Go back to `To Do`</Button>
          </Link>
        }
      />
    </>
  );
}

export default Page404;
