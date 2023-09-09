import { Data } from '@/models/storyblokCategories';
import { CardBottomContainerStyle, CardLinkStyle, CardTitleStyle, CardTopContainerFlexStyle, CardTopContainerStyle } from '../../Card.css';
import Link from 'next/link';
import NpmLogo from '../../../../../../public/images/logos/npm.svg';
import { Tooltip } from 'react-tooltip';
import { NpmLogoStyle } from './LibraryCard.css';
import RichText from '../../RichText/RichText';
import CopyCommand from '../../CopyCommand/CopyCommand';
import AddToCart from '../../AddToCart/AddToCart';

type props = {
  item: Data;
};

export default function LibraryCard(props: props) {
  return (
    <>
      <div className={CardTopContainerStyle()}>
        <div className={CardTopContainerFlexStyle()}>
          <h2 className={CardTitleStyle()}>{props.item.name}</h2>

          {props.item.content.link && (
            <Link
              href={props.item.content.link}
              target="_blank"
              className={CardLinkStyle()}
            >
              <Tooltip id={props.item.content.link}></Tooltip>
              <NpmLogo
                className={NpmLogoStyle()}
                data-tooltip-id={props.item.content.link}
                data-tooltip-content={props.item.content.link}
              ></NpmLogo>
            </Link>
          )}

          <RichText text={props.item.content.text}></RichText>
        </div>
      </div>

      <div className={CardBottomContainerStyle()}>
        <CopyCommand command={props.item.content.command}></CopyCommand>
        <AddToCart
          name={props.item.name}
          command={props.item.content.command ? props.item.content.command : ''}
        ></AddToCart>
      </div>
    </>
  );
}
