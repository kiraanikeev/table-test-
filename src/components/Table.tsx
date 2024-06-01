interface TableProps<T> {
  data: T[];
  onEdit: (item: T) => void;
}

const Table = <T,>({ data, onEdit }: TableProps<T>) => {
function flattenOptions(arr) {
  return arr.map(item => {
    const flattenObject = obj => {
      const newObj = {};
   
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          const innerKeys = flattenObject(obj[key]);
          for (const innerKey in innerKeys) {
            newObj[innerKey] = innerKeys[innerKey];
          }
        } else {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    };

    return flattenObject(item);
  });
}

const flattenedData = flattenOptions(data);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">

         <tr>
            {Object.keys(flattenedData[0]).map((keyTable) => (
              <th
                key={ Math.random().toString(16).slice(2) + new Date().getTime().toString(36)}
                className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600"
              >
                {keyTable}
              </th>
            ))}
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
               _
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {flattenedData.map((item, index) => (
            <tr key={index} className="border-t border-gray-200">
              {Object.keys(item).map((col) => (
                <td key={Math.random().toString(16).slice(2) + new Date().getTime().toString(36)} className="py-3 px-4">
               {typeof item[col] === 'boolean'
                    ? item[col] ? 'Active' : 'Inactive'
                    : item[col]}
                </td>
              ))}
              <td className="py-3 px-4">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit(item)}
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
