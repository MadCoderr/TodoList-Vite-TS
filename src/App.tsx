import { useState } from 'react';
import './App.css';

import { faker } from '@faker-js/faker';

interface IListItem {
  id: number;
  title: string;
}

function App() {
  const [items, setItems] = useState<IListItem[]>([]);

  const addNewItem = () => {
    const newItem: IListItem = {
      title: faker.lorem.sentence(3),
      id: Math.random(),
    };
    setItems((_items) => [..._items, newItem]);
  };

  return (
    <div className="root">
      <button className="add-btn" onClick={addNewItem}>
        Add item
      </button>

      <ul className="list">
        {items.map((item: IListItem) => (
          <li key={item.id}>
            <span className="label">{item.title}</span>
            <span className="delete-btn">X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
