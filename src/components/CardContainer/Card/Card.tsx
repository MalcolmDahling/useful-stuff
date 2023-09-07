import { Category, Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardStyle, CardTitleStyle, CardTopContainerStyle } from './Card.css';
import Link from 'next/link';
import RichText from './RichText/RichText';
import { ReactSVG } from 'react-svg';
import CopyCommand from './CopyCommand/CopyCommand';

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

      <div className={CardBottomContainerStyle()}>
        {props.item.content.command && <CopyCommand command={props.item.content.command}></CopyCommand>}

        {props.item.content.link && (
          <Link
            href={props.item.content.link}
            className={CardLinkStyle()}
          >
            {props.category === 'library' ? <ReactSVG src="images/logos/npm.svg"></ReactSVG> : props.item.name}
          </Link>
        )}
      </div>
    </article>
  );
}
