import { useRecoilState } from 'recoil';
import { HeaderStyle } from './Header.css';
import HeaderButton from './HeaderButton/HeaderButton';
import { SelectedPage } from '@/atoms/selectedPage';

export default function Header() {
  const [selectedPage, setSelectedPage] = useRecoilState(SelectedPage);

  return (
    <header className={HeaderStyle()}>
      <HeaderButton
        text="Node Libraries"
        spacer={true}
        setSelectedPage={() => setSelectedPage(0)}
        selected={selectedPage === 0}
      ></HeaderButton>
      <HeaderButton
        text="Git"
        spacer={true}
        setSelectedPage={() => setSelectedPage(1)}
        selected={selectedPage === 1}
      ></HeaderButton>
      <HeaderButton
        text="CSS"
        spacer={true}
        setSelectedPage={() => setSelectedPage(2)}
        selected={selectedPage === 2}
      ></HeaderButton>
      <HeaderButton
        text="VS Code"
        spacer={true}
        setSelectedPage={() => setSelectedPage(3)}
        selected={selectedPage === 3}
      ></HeaderButton>
      <HeaderButton
        text="Links"
        spacer={true}
        setSelectedPage={() => setSelectedPage(4)}
        selected={selectedPage === 4}
      ></HeaderButton>
      <HeaderButton
        text="ESLint"
        spacer={true}
        setSelectedPage={() => setSelectedPage(5)}
        selected={selectedPage === 5}
      ></HeaderButton>
      <HeaderButton
        text="Misc"
        setSelectedPage={() => setSelectedPage(6)}
        selected={selectedPage === 6}
      ></HeaderButton>
    </header>
  );
}
