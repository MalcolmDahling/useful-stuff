import { CopyCommandButtonStyle } from './CopyCommand.css';

type props = {
  command: any;
};

export default function CopyCommand(props: props) {
  function handleClick() {
    navigator.clipboard.writeText(props.command);
  }

  return (
    <button
      className={CopyCommandButtonStyle()}
      onClick={handleClick}
    >
      {props.command}
    </button>
  );
}
