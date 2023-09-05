import Header from './Header/Header';
import LayoutContainer from './LayoutContainer/LayoutContainer';
import Main from './Main/Main';

type props = {
  children: React.ReactNode;
};

export default function Layout(props: props) {
  return (
    <LayoutContainer>
      <Header></Header>
      <Main>{props.children}</Main>
    </LayoutContainer>
  );
}
