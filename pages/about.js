import React from "react";
import Link from "next/link";

class About extends React.Component {
  render() {
    const message = "hello world";
    return (
      <React.Fragment>
        <h1>Hello from about page - {message}</h1>
        <Link href="/">
          <button>Get Back to Home</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default About;
