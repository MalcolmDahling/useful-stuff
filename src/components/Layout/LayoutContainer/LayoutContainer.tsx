import { LayoutContainerStyle, BackgroundStyle, LayoutChildrenContainerStyle } from './LayoutContainer.css';
import Background from '../../../../public/images/background.svg';

type props = {
  children: React.ReactNode;
};

export default function LayoutContainer(props: props) {
  return (
    <div className={LayoutContainerStyle()}>
      <div className={BackgroundStyle()}>
        <Background></Background>
      </div>

      <div className={LayoutChildrenContainerStyle()}>{props.children}</div>
    </div>
  );
}
