import { useRecoilState, useRecoilValue } from 'recoil';
import { HeaderStyle } from './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import { SelectedPage } from '@/atoms/selectedPage';
import { CardContainerIsOpen } from '@/atoms/cardContainerIsOpen';

export default function Header() {
  const [selectedPage, setSelectedPage] = useRecoilState(SelectedPage);
  const cardContainerIsOpen = useRecoilValue(CardContainerIsOpen);

  function handleClick(page: number) {
    if (cardContainerIsOpen) {
      setSelectedPage(page);
    }
  }

  return (
    <header>
      <nav className={HeaderStyle()}>
        <HeaderButton
          text="Libraries"
          image="images/logos/nodejs.svg"
          spacer={true}
          setSelectedPage={() => handleClick(0)}
          selected={selectedPage === 0}
        ></HeaderButton>
        <HeaderButton
          text="Git"
          image="images/logos/git.svg"
          spacer={true}
          setSelectedPage={() => handleClick(1)}
          selected={selectedPage === 1}
        ></HeaderButton>
        <HeaderButton
          text="CSS"
          image="images/logos/css.svg"
          spacer={true}
          setSelectedPage={() => handleClick(2)}
          selected={selectedPage === 2}
        ></HeaderButton>
        <HeaderButton
          text="VS Code"
          image="images/logos/vscode.svg"
          spacer={true}
          setSelectedPage={() => handleClick(3)}
          selected={selectedPage === 3}
        ></HeaderButton>
        <HeaderButton
          text="Links"
          image="images/logos/link.svg"
          spacer={true}
          setSelectedPage={() => handleClick(4)}
          selected={selectedPage === 4}
        ></HeaderButton>
        <HeaderButton
          text="Misc"
          image="images/logos/misc.svg"
          setSelectedPage={() => handleClick(5)}
          selected={selectedPage === 5}
        ></HeaderButton>
      </nav>
    </header>
  );
}
