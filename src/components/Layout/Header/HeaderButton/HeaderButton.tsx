import { HeaderButtonLogoStyle, HeaderButtonStyle, HeaderButtonTitleStyle } from './HeaderButton.css';
import { ReactSVG } from 'react-svg';

type props = {
  text: string;
  image: string;
  spacer?: boolean;
  selected: boolean;
  setSelectedPage: () => void;
};

export default function HeaderButton(props: props) {
  return (
    <button
      className={HeaderButtonStyle({ selected: props.selected })}
      onClick={props.setSelectedPage}
    >
      <ReactSVG
        src={props.image}
        className={HeaderButtonLogoStyle({ selected: props.selected })}
      ></ReactSVG>
      <p className={HeaderButtonTitleStyle({ selected: props.selected })}>{props.text}</p>
    </button>
  );
}
