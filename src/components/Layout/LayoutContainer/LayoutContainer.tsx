import { LayoutContainerStyle } from './LayoutContainer.css';

type props = {
  children: React.ReactNode;
};

export default function LayoutContainer(props: props) {
  return <div className={LayoutContainerStyle()}>{props.children}</div>;
}
