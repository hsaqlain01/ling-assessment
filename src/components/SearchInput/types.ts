import {FilteredData} from '../../screens/userSearch/types';

export interface InputObject {
  search: string;
  setFilteredData: React.Dispatch<React.SetStateAction<FilteredData>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
