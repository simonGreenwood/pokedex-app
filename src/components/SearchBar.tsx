import { Dispatch } from "react";

export default function SearchBar(props: {
  searchFilter: string;
  setSearchFilter: Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name"
        className="bg-gray-800 text-white rounded-md p-2 mb-5"
        onChange={(e) => props.setSearchFilter(e.target.value)}
        value={props.searchFilter}
      />
    </div>
  );
}
