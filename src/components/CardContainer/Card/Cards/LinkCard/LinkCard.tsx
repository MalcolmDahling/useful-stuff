import { Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardTitleStyle, CardTopContainerStyle } from '../../Card.css';
import Link from 'next/link';

type props = {
  item: Data;
};

export default function LinkCard(props: props) {
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
