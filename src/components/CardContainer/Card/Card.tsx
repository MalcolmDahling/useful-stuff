import { Category, Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardStyle, CardTitleStyle, CardTopContainerStyle } from './Card.css';
import Link from 'next/link';
import RichText from './RichText/RichText';
import { ReactSVG } from 'react-svg';
import CopyCommand from './CopyCommand/CopyCommand';
import NpmLink from './NpmLink/NpmLink';

type props = {
  category: Category;
  item: Data;
};

export default function Card(props: props) {
  return (
    <article className={CardStyle()}>
      <div className={CardTopContainerStyle()}>
        <h2 className={CardTitleStyle()}>{props.item.name}</h2>
        {props.item.content.text && props.item.content.text.content[0].content && <RichText text={props.item.content.text}></RichText>}
      </div>

      {(props.item.content.command || props.item.content.link) && (
        <div className={CardBottomContainerStyle()}>
          {props.item.content.command && <CopyCommand command={props.item.content.command}></CopyCommand>}

          {props.item.content.link && (
            <Link
              href={props.item.content.link}
              target="_blank"
              className={CardLinkStyle()}
            >
              {props.category === 'library' ? <NpmLink link={props.item.content.link}></NpmLink> : props.item.name}
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
