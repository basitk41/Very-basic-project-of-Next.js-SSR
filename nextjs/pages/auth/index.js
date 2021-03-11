import React from "react";
import Link from "next/link";
import Router from "next/router";
import User from "../../components/User";
const authIndexPage = (props) => {
  return (
    <div>
      <h1>The Auth Index Page by {props.Name}</h1>
      <User name="Basit Ali" age={22} />
      <h3>
        <Link href="/">
          <a>Back</a>
        </Link>
      </h3>
      <button onClick={() => Router.push("/")}>Back</button>
    </div>
  );
};
authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ Name: "Basit..." });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
