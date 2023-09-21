import { Data } from '@/models/storyblokCategories';
import { NpmLogoStyle } from './LibraryCard.css';
import RichText from '../../RichText/RichText';
import { CardBottomContainerStyle, CardLinkStyle, CardTitleStyle, CardTopContainerGridStyle, CardTopContainerStyle } from '@/components/Card/Card.css';
import NpmLogo from '../../../../public/images/logos/npm.svg';
import CopyCommand from './CopyCommand/CopyCommand';
import AddToCart from './AddToCart/AddToCart';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';

type props = {
  item: Data;
};

export default function LibraryCard(props: props) {
  return (
    <>
      <div className={CardTopContainerStyle()}>
        <div className={CardTopContainerGridStyle()}>
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
        </div>

        <RichText text={props.item.content.text}></RichText>
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
