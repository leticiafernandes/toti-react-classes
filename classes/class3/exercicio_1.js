/**
 * Link para descrição do exercício:
 * https://www.notion.so/Aula-3-a9869979add242fea0299d8d9e7f82d6
 */

import React from 'react';

function App() {
  const buyList = [
    {
      id: 1,
      name: 'uva',
      quantity: 2
    },
    {
      id: 2,
      name: 'maçã',
      quantity: 5
    },
    {
      id: 3,
      name: 'laranja',
      quantity: 10
    },
    {
      id: 4,
      name: 'melancia',
      quantity: 1
    }
]

  return (
    <div>
      <ul>
        {buyList && buyList.map((item) => {
          const { id, name, quantity } = item || {}
          return <li key={id}>Comprar {name} - Quantidade {quantity}</li>
        })}
      </ul>
    </div>
  );
}

export default App;