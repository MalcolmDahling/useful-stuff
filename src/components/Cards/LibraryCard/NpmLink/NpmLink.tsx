import { Tooltip } from 'react-tooltip';
import { NpmLinkContainerStyle, NpmLogoStyle } from './NpmLink.css';
import NpmLogo from '../../../../../public/images/logos/npm.svg';

type props = {
  link: string;
};

export default function NpmLink(props: props) {
  return (
    <div className={NpmLinkContainerStyle()}>
      <Tooltip id={props.link}></Tooltip>
      <NpmLogo
        className={NpmLogoStyle()}
        data-tooltip-id={props.link}
        data-tooltip-content={props.link}
      ></NpmLogo>
    </div>
  );
}
