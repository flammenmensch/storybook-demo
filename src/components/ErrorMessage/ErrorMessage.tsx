import React from 'react';

interface Props {
  error: Error;
}

const ErrorMessage = (props: Props) => (
  <div
    className="alert alert-danger shadow d-flex align-items-center"
    role="alert"
  >
    <i className="me-2 bi bi-exclamation-circle" />
    <div>{props.error.message}</div>
  </div>
);

export default ErrorMessage;
