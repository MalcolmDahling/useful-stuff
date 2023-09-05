import { HeaderButtonSpacerStyle, HeaderButtonContainerStyle, HeaderButtonStyle } from './HeaderButton.css';

type props = {
  text: string;
  spacer?: boolean;
  selected: boolean;
  setSelectedPage: () => void;
};

export default function HeaderButton(props: props) {
  return (
    <div className={HeaderButtonContainerStyle()}>
      <button
        className={HeaderButtonStyle({ selected: props.selected })}
        onClick={props.setSelectedPage}
      >
        {props.text}
      </button>
      {props.spacer && <div className={HeaderButtonSpacerStyle()}></div>}
    </div>
  );
}
