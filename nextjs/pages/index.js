import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
class UserIndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ Name: "Basit Ali" });
      }, 1000);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>The User Main Index Page by {this.props.Name}</h1>
        <h3>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </h3>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      </div>
    );
  }
}

export default UserIndexPage;
