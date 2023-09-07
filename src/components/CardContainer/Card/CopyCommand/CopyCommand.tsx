import { useState } from 'react';
import { CopyCommandButtonStyle } from './CopyCommand.css';
import { Tooltip } from 'react-tooltip';

type props = {
  command: any;
};

export default function CopyCommand(props: props) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(props.command);

    setCopied(true);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setCopied(false);
    }, 200);
  }

  return (
    <button
      className={CopyCommandButtonStyle()}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      data-tooltip-id={props.command}
      data-tooltip-content={copied ? 'Copied' : `Copy ${props.command} to clipboard.`}
    >
      <Tooltip id={props.command}></Tooltip>
      {props.command}
    </button>
  );
}
