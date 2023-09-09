import { Data } from '@/models/storyblokCategories';
import { CardTitleStyle, CardTopContainerStyle } from '../../Card.css';
import RichText from '../../RichText/RichText';

type props = {
  item: Data;
};

export default function CSSCard(props: props) {
  return (
    <>
      <div className={CardTopContainerStyle()}>
        <h2 className={CardTitleStyle()}>{props.item.name}</h2>
        <RichText text={props.item.content.text}></RichText>
      </div>
    </>
  );
}
