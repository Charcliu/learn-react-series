import React from 'react';

export default function Index() {
  return (
    <table>
      <tr>
        <TdItem></TdItem>
      </tr>
    </table>
  );
}

function TdItem() {
  return (
    <>
      <td>1</td>
      <td>2</td>
    </>
  );
}
