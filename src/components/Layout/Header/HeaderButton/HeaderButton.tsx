import { HeaderButtonLogoStyle, HeaderButtonStyle, HeaderButtonTitleStyle } from './HeaderButton.css';
import NpmLogo from './../../../../../public/images/logos/npm.svg';
import GitLogo from './../../../../../public/images/logos/git.svg';
import CSSLogo from './../../../../../public/images/logos/css.svg';
import VSCodeLogo from './../../../../../public/images/logos/vscode.svg';
import LinksLogo from './../../../../../public/images/logos/link.svg';
import MiscLogo from './../../../../../public/images/logos/misc.svg';

type props = {
  text: string;
  image: string;
  spacer?: boolean;
  selected: boolean;
  setSelectedPage: () => void;
};

export default function HeaderButton(props: props) {
  const SVGProps = {
    src: props.image,
    className: HeaderButtonLogoStyle({ selected: props.selected }),
  };

  const logoComponents: Record<string, JSX.Element> = {
    Libraries: <NpmLogo {...SVGProps} />,
    Git: <GitLogo {...SVGProps} />,
    CSS: <CSSLogo {...SVGProps} />,
    'VS Code': <VSCodeLogo {...SVGProps} />,
    Links: <LinksLogo {...SVGProps} />,
    Misc: <MiscLogo {...SVGProps} />,
  };

  return (
    <button
      className={HeaderButtonStyle({ selected: props.selected })}
      onClick={props.setSelectedPage}
    >
      {logoComponents[props.text]}
      <p className={HeaderButtonTitleStyle({ selected: props.selected })}>{props.text}</p>
    </button>
  );
}
