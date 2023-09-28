import React, { Component } from 'react';

class ErrorBoundarySample extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>There is somthing went wrong</h1>
          <p>Error Details: {this.state.error && this.state.error.toString()}</p>
          <p>Error Details: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    return (
      <div>
        <h1>Error Boundry Sample</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundarySample;
