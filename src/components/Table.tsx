interface TableProps<T> {
    data: T[];
    columns: (keyof T | { key: keyof T; header: JSX.Element })[];
    onEdit: (item: T) => void;
  }
  
  const Table = <T,>({ data, columns, onEdit }: TableProps<T>) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600"
                >
                  {typeof col === 'string' ? col : col.header}
                </th>
              ))}
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              
              <tr key={index} className="border-t border-gray-200">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-3 px-4">
                       {/* {typeof item[typeof col === 'string' ? col : col.key] === 'boolean' ? (
                      item[typeof col === 'string' ? col : col.key] ? 'Active' : 'Inactive'
                    ) : (
                      item[typeof col === 'string' ? col : col.key]
                    )} */}
                    {console.log('col',col)}
                    {console.log('col.key',col.key)}
                    {console.log('item',item)}
                    {console.log('columns',columns)}
                    
                    {typeof item[typeof col === 'string' ? col : col.key] === 'boolean' ? (
                      item[typeof col === 'string' ? col : col.key] ? 'Active' : 'Inactive'
                    ) : (
                      item[typeof col === 'string' ? col : col.key]
                    )}
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
  