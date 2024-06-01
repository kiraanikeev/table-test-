export interface IDataObject {
    [key: string]: any;
  }


export const useFlattenOptions = (arr: IDataObject[]): IDataObject[] => {
    const flattenObject = (obj: IDataObject): IDataObject => {
      const newObj: IDataObject = {};
  
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          const innerKeys = flattenObject(obj[key]);
          for (const innerKey in innerKeys) {
            newObj[`${key}.${innerKey}`] = innerKeys[innerKey];
          }
        } else {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    };
  
    return arr.map(item => flattenObject(item));
  };
  