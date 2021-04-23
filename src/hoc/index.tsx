import React, { useState } from 'react';
import LogProps from './LogProps';
export default function Index() {
  const [name, setName] = useState('');

  return (
    <>
      <input
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <HOCChildComp name={name}></HOCChildComp>
    </>
  );
}

function ChildComp(props: any) {
  const { name } = props;
  return <h1>{name}</h1>;
}

const HOCChildComp = LogProps(ChildComp);
