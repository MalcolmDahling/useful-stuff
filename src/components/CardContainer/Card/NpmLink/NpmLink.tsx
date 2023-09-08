import { Tooltip } from 'react-tooltip';
import { NpmLogoStyle } from './NpmLink.css';
import NpmLogo from '../../../../../public/images/logos/npm.svg';

type props = {
  link: string;
};

export default function NpmLink(props: props) {
  return (
    <div>
      <Tooltip id={props.link}></Tooltip>
      <NpmLogo
        className={NpmLogoStyle()}
        src="images/logos/npm.svg"
        data-tooltip-id={props.link}
        data-tooltip-content={props.link}
      ></NpmLogo>
    </div>
  );
}
