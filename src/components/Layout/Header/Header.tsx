import { useRecoilState } from 'recoil';
import { HeaderStyle } from './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import { SelectedPage } from '@/atoms/selectedPage';

export default function Header() {
  const [selectedPage, setSelectedPage] = useRecoilState(SelectedPage);

  return (
    <header className={HeaderStyle()}>
      <HeaderButton
        text="Libraries"
        image="images/logos/nodejs.svg"
        spacer={true}
        setSelectedPage={() => setSelectedPage(0)}
        selected={selectedPage === 0}
      ></HeaderButton>
      <HeaderButton
        text="Git"
        image="images/logos/git.svg"
        spacer={true}
        setSelectedPage={() => setSelectedPage(1)}
        selected={selectedPage === 1}
      ></HeaderButton>
      <HeaderButton
        text="CSS"
        image="images/logos/css.svg"
        spacer={true}
        setSelectedPage={() => setSelectedPage(2)}
        selected={selectedPage === 2}
      ></HeaderButton>
      <HeaderButton
        text="VS Code"
        image="images/logos/vscode.svg"
        spacer={true}
        setSelectedPage={() => setSelectedPage(3)}
        selected={selectedPage === 3}
      ></HeaderButton>
      <HeaderButton
        text="Links"
        image="images/logos/link.svg"
        spacer={true}
        setSelectedPage={() => setSelectedPage(4)}
        selected={selectedPage === 4}
      ></HeaderButton>
      <HeaderButton
        text="Misc"
        image="images/logos/misc.svg"
        setSelectedPage={() => setSelectedPage(5)}
        selected={selectedPage === 5}
      ></HeaderButton>
    </header>
  );
}
