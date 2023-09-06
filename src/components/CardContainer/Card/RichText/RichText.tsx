import { render, NODE_PARAGRAPH } from 'storyblok-rich-text-react-renderer';
import { RichTextParagraphStyle } from './RichText.css';

type props = {
  text: any;
  noMargin?: true;
};

export default function RichText(props: props) {
  return (
    <>
      {render(props.text, {
        nodeResolvers: {
          [NODE_PARAGRAPH]: (children) => {
            return <p className={RichTextParagraphStyle({ noMargin: props.noMargin })}>{children}</p>;
          },
        },
      })}
    </>
  );
}
