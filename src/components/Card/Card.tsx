import { Category, Data } from '@/models/storyblokCategories';
import { CardStyle } from './Card.css';
import LibraryCard from '@/components/Cards/LibraryCard/LibraryCard';
import GitCard from '@/components/Cards/GitCard/GitCard';
import CSSCard from '@/components/Cards/CSSCard/CSSCard';
import VSCodeCard from '@/components/Cards/VSCodeCard/VSCodeCard';
import LinkCard from '@/components/Cards/LinkCard/LinkCard';
import MiscCard from '@/components/Cards/MiscCard/MiscCard';

type props = {
  category: Category;
  item: Data;
};

export default function Card(props: props) {
  return (
    <article className={CardStyle()}>
      {props.category === 'library' && <LibraryCard item={props.item}></LibraryCard>}
      {props.category === 'git' && <GitCard item={props.item}></GitCard>}
      {props.category === 'css' && <CSSCard item={props.item}></CSSCard>}
      {props.category === 'vscode' && <VSCodeCard item={props.item}></VSCodeCard>}
      {props.category === 'link' && <LinkCard item={props.item}></LinkCard>}
      {props.category === 'misc' && <MiscCard item={props.item}></MiscCard>}
    </article>
  );
}
