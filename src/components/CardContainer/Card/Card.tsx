import { Category, Data } from '@/models/storyblokCategories';
import { CardLinkStyle, CardStyle, CardTitleStyle } from './Card.css';
import Link from 'next/link';
import RichText from './RichText/RichText';

type props = {
  category: Category;
  item: Data;
};

export default function Card(props: props) {
  return (
    <article className={CardStyle()}>
      <h2 className={CardTitleStyle()}>{props.item.name}</h2>
      {props.item.content.link && (
        <Link
          href={props.item.content.link}
          className={CardLinkStyle()}
        >
          {props.category === 'library' ? 'NpmJS' : props.item.name}
        </Link>
      )}

      {props.item.content.text && props.item.content.text.content[0].content && <RichText text={props.item.content.text}></RichText>}
    </article>
  );
}
