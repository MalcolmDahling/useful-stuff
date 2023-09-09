import { Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardTitleStyle, CardTopContainerStyle } from '../../Card.css';
import Link from 'next/link';
import RichText from '../../RichText/RichText';

type props = {
  item: Data;
};

export default function MiscCard(props: props) {
  return (
    <>
      <div className={CardTopContainerStyle()}>
        <h2 className={CardTitleStyle()}>{props.item.name}</h2>
        {props.item.content.text.content[0].content && <RichText text={props.item.content.text}></RichText>}
      </div>
      {props.item.content.link && (
        <div className={CardBottomContainerStyle()}>
          <Link
            href={props.item.content.link}
            target="_blank"
            className={CardLinkStyle({ fullWidth: true })}
          >
            {props.item.name}
          </Link>
        </div>
      )}
    </>
  );
}
