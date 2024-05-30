import { useState } from 'react';
import Table from './Table';

interface DataPageProps<T> {
  data: T[];
  columns: (keyof T | { key: keyof T; header: JSX.Element })[];
}

const DataPage = <T,>({ data, columns }: DataPageProps<T>) => {
  const [editItem, setEditItem] = useState<T | null>(null);
  const [filter, setFilter] = useState('');
  const handleEdit = (item: T) => {
    setEditItem(item);
  };

  const handleSave = (updatedItem: T) => {

    setEditItem(null);
  };

  const filteredData = data.filter((item) =>
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
      <Table data={filteredData} columns={columns} onEdit={handleEdit} />

    </div>
  );
};

export default DataPage;
