import { SearchContainerStyle, SearchInputStyle } from './Search.css';

type props = {
  search: (input: string) => void;
};

export default function Search(props: props) {
  return (
    <div className={SearchContainerStyle()}>
      <input
        type="text"
        className={SearchInputStyle()}
        placeholder="Search"
        onChange={(e) => props.search(e.target.value)}
      ></input>
    </div>
  );
}
