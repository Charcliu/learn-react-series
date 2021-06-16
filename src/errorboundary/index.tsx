import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import TriggerError from './TriggerError';
import { Button } from '@tencent/tsign-component-library';

export default function ErrorTest() {
  return (
    <ErrorBoundary>
      <Button btnType="danger" style={{ marginLeft: '10px' }}>
        按钮
      </Button>
      <TriggerError></TriggerError>
    </ErrorBoundary>
  );
}
