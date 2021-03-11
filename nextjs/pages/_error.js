import React from "react";
import Link from "next/link";
const errorHandler = () => {
  return (
    <div>
      <h1>Oops, something went wrong!</h1>
      <h4>
        Try going
        <Link href="/">
          <a>back</a>
        </Link>
      </h4>
    </div>
  );
};

export default errorHandler;
