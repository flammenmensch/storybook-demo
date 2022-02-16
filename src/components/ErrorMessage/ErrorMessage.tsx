import React from 'react';

interface Props {
  error: Error;
}

const ErrorMessage = (props: Props) => (
  <div className="alert alert-danger shadow">{props.error.message}</div>
);

export default ErrorMessage;
