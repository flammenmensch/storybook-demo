import React from 'react';
import clsx from 'clsx';

interface Props {
  size?: 'normal' | 'small';
}

const Spinner = ({ size = 'normal' }: Props) => (
  <div
    role="status"
    className={clsx('spinner-border', {
      'spinner-border-sm': size === 'small',
    })}
  >
    <span className="visually-hidden">Loading...</span>
  </div>
);

export default Spinner;
