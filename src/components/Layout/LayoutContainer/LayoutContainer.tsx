import { LayoutContainerStyle, BackgroundStyle } from './LayoutContainer.css';

type props = {
  children: React.ReactNode;
};

export default function LayoutContainer(props: props) {
  return (
    <div className={LayoutContainerStyle()}>
      <div className={BackgroundStyle()}></div>
      {props.children}
    </div>
  );
}
