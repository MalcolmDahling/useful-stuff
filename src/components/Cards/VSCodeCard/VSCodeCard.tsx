import { CardBottomContainerStyle, CardLinkStyle, CardTitleStyle, CardTopContainerStyle } from '@/components/Card/Card.css';
import { Data } from '@/models/storyblokCategories';
import Link from 'next/link';

type props = {
  item: Data;
};

export default function VSCodeCard(props: props) {
  return (
    <>
      <div className={CardTopContainerStyle()}>
        <h2 className={CardTitleStyle()}>{props.item.name}</h2>
      </div>
      <div className={CardBottomContainerStyle()}>
        {props.item.content.link && (
          <Link
            href={props.item.content.link}
            target="_blank"
            className={CardLinkStyle({ fullWidth: true })}
          >
            {props.item.name}
          </Link>
        )}
      </div>
    </>
  );
}
