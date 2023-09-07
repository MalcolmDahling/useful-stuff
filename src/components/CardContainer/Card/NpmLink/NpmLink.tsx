import { ReactSVG } from 'react-svg';
import { Tooltip } from 'react-tooltip';
import { NpmLogoStyle } from './NpmLink.css';

type props = {
  link: string;
};

export default function NpmLink(props: props) {
  return (
    <div>
      <Tooltip id={props.link}></Tooltip>
      <ReactSVG
        className={NpmLogoStyle()}
        src="images/logos/npm.svg"
        data-tooltip-id={props.link}
        data-tooltip-content={props.link}
      ></ReactSVG>
    </div>
  );
}
