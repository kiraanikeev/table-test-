import { useFlattenOptions, IDataObject } from "../hooks/useFlattenOptions";


interface TableProps<T extends IDataObject> {
  data: T[];
  onEdit: (item: T) => void;
}

const Table = <T extends IDataObject>({ data, onEdit }: TableProps<T>) => {
  const flattenedData = useFlattenOptions(data);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            {Object.keys(flattenedData[0]).map((keyTable) => (
              <th
                key={keyTable}
                className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600"
              >
                {keyTable}
              </th>
            ))}
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
              
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {flattenedData.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              {Object.keys(item).map((col) => (
                <td key={col} className="py-3 px-4">
                  {typeof item[col] === 'boolean'
                    ? item[col] ? 'Active' : 'Inactive'
                    : item[col]}
                </td>
              ))}
              <td className="py-3 px-4">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit(data[index])}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;