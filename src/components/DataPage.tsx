import { useState, useEffect } from 'react';
import Table from './Table';
import EditModal from './EditModal';

interface DataPageProps<T> {
  data: T[];
  fieldToEdit: keyof T;
}

const DataPage = <T extends { id: number | string; active: boolean }>({ data, fieldToEdit }: DataPageProps<T>) => {
  const [items, setItems] = useState<T[]>(data);
  const [editItem, setEditItem] = useState<T | null>(null);
  const [filter, setFilter] = useState('');

  const handleEdit = (item: T) => {
    setEditItem(item);
  };
  useEffect(()=>{
    setItems(data)
  },data)

  const handleSave =(updatedItem: T) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditItem(null);
  }
console.log('items',items)
  const filteredData = items.filter((item) =>
    Object.values(item).some(
      (value) => typeof value === 'string' && value.includes(filter)
    )
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <Table data={filteredData} onEdit={handleEdit} />
      {editItem && (
        <EditModal
          item={editItem}
          fieldToEdit={fieldToEdit}
          onSave={handleSave}
          onCancel={() => setEditItem(null)}
        />
      )}
    </div>
  );
};

export default DataPage;
