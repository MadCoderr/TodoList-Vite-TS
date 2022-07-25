import { useState } from 'react';
import './App.css';

import { faker } from '@faker-js/faker';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface IListItem {
  id: number;
  title: string;
}

function App() {
  const [items, setItems] = useState<IListItem[]>([]);

  const [listRef] = useAutoAnimate<HTMLUListElement>();

  const addNewItem = () => {
    const newItem: IListItem = {
      title: faker.lorem.sentence(3),
      id: Math.random(),
    };
    setItems((_items) => [..._items, newItem]);
  };

  const removeItem = (_id: number) => {
    const filterList = items.filter((item) => item.id !== _id);
    setItems(filterList);
  };

  return (
    <div className="root">
      <button className="add-btn" onClick={addNewItem}>
        Add item
      </button>

      <ul className="list" ref={listRef}>
        {items.map((item: IListItem) => (
          <li key={item.id} onClick={() => removeItem(item.id)}>
            <span className="label">{item.title}</span>
            <span className="delete-btn">X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
