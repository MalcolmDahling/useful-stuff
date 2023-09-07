import { StoryblokCategory } from '@/models/storyblokCategories';
import Card from './Card/Card';
import { CardContainerStyle, CardContainerWrapperStyle } from './CardContainer.css';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CardContainerIsOpen } from '@/atoms/cardContainerIsOpen';

type props = {
  category: StoryblokCategory;
};

export default function CardContainer(props: props) {
  const [category, setCategory] = useState(props.category);
  const [height, setHeight] = useState(0);
  const [animDuration, setAnimDuration] = useState(0);
  const [disableFirstAnimation, setDisableFirstAnimation] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const [cardContainerIsOpen, setCardContainerIsOpen] = useRecoilState(CardContainerIsOpen);

  useEffect(() => {
    if (disableFirstAnimation) {
      setDisableFirstAnimation(false);
      return;
    }

    setHeight(0);
    setCardContainerIsOpen(false);

    setTimeout(() => {
      setCategory(props.category);
    }, animDuration);
  }, [props.category]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
      setAnimDuration(500 + ref.current.getBoundingClientRect().height / 10);

      setTimeout(() => {
        setCardContainerIsOpen(true);
      }, animDuration);
    }
  }, [category]);

  return (
    <section
      className={CardContainerWrapperStyle({ overflowHidden: !cardContainerIsOpen })}
      style={{ height: height, transition: `all ${animDuration}ms` }}
    >
      <div
        className={CardContainerStyle()}
        ref={ref}
      >
        {category.data.map((item) => {
          return (
            <Card
              category={category.name}
              item={item}
              key={item.name}
            ></Card>
          );
        })}
      </div>
    </section>
  );
}
