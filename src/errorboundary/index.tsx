import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import TriggerError from './TriggerError';

export default function ErrorTest() {
  return (
    <ErrorBoundary>
      <TriggerError></TriggerError>
    </ErrorBoundary>
  );
}
