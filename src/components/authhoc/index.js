import React from "react";
const jwt = require("jsonwebtoken");

export default function RequireAuthentication(WrappedComponent) {
  return class extends React.Component {
    static getInitialProps(ctx) {
      let isAuthenticated;
    }
  };
}
