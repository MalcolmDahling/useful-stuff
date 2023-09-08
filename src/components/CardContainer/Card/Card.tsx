import { Category, Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardStyle, CardTitleStyle, CardTopContainerFlexStyle, CardTopContainerStyle } from './Card.css';
import Link from 'next/link';
import RichText from './RichText/RichText';
import CopyCommand from './CopyCommand/CopyCommand';
import NpmLink from './NpmLink/NpmLink';
import AddToCart from './AddToCart/AddToCart';

type props = {
  category: Category;
  item: Data;
};

export default function Card(props: props) {
  return (
    <article className={CardStyle()}>
      <div className={CardTopContainerStyle()}>
        <div className={CardTopContainerFlexStyle()}>
          <h2 className={CardTitleStyle()}>{props.item.name}</h2>

          {props.item.content.link && props.category === 'library' && (
            <Link
              href={props.item.content.link}
              target="_blank"
              className={CardLinkStyle({ fullWidth: props.category !== 'library' })}
            >
              <NpmLink link={props.item.content.link}></NpmLink>
            </Link>
          )}
        </div>

        {props.item.content.text && props.item.content.text.content[0].content && <RichText text={props.item.content.text}></RichText>}
      </div>

      {(props.item.content.command || props.item.content.link) && (
        <div className={CardBottomContainerStyle()}>
          {props.item.content.command && (
            <>
              <CopyCommand command={props.item.content.command}></CopyCommand>
              <AddToCart
                name={props.item.name}
                command={props.item.content.command}
              ></AddToCart>
            </>
          )}

          {props.item.content.link && props.category !== 'library' && (
            <Link
              href={props.item.content.link}
              target="_blank"
              className={CardLinkStyle({ fullWidth: true })}
            >
              {props.item.name}
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
