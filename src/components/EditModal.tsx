import{ useState } from 'react';

interface EditModalProps<T> {
  item: T;
  fieldToEdit: keyof T;
  onSave: (updatedItem: T) => void;
  onCancel: () => void;
}

const EditModal = <T extends { id: number | string }>({ item, fieldToEdit, onSave, onCancel }: EditModalProps<T>) => {
  const [value, setValue] = useState<string>(item[fieldToEdit] as unknown as string);

  const handleSave = () => {
    onSave({ ...item, [fieldToEdit]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4">Edit</h2>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {String(fieldToEdit).charAt(0).toUpperCase() + String(fieldToEdit).slice(1)}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
