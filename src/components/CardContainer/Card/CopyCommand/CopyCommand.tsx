import { useEffect, useRef, useState } from 'react';
import { CopyCommandButtonStyle } from './CopyCommand.css';
import { Tooltip } from 'react-tooltip';

type props = {
  command: any;
};

export default function CopyCommand(props: props) {
  const [copied, setCopied] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
  }, []);

  function handleClick() {
    navigator.clipboard.writeText(props.command);

    setCopied(true);
  }

  function handleMouseLeave() {
    setTimeout(() => {
      setCopied(false);
    }, 500);
  }

  return (
    <button
      className={CopyCommandButtonStyle()}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
      data-tooltip-id={props.command}
      data-tooltip-content={`Copy "${props.command}" to clipboard.`}
      ref={ref}
      style={{ width: width !== 0 ? width : undefined }}
    >
      {!copied && <Tooltip id={props.command}></Tooltip>}
      {!copied ? props.command : 'Copied'}
    </button>
  );
}
