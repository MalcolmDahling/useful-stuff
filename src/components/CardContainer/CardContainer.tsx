import { StoryblokCategory } from '@/models/storyblokCategories';
import Card from '../Card/Card';
import { CardContainerStyle, CardContainerWrapperStyle } from './CardContainer.css';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { CardContainerIsOpen } from '@/atoms/CardContainerIsOpen';

type props = {
  category: StoryblokCategory;
  search: string;
};

export default function CardContainer(props: props) {
  const [category, setCategory] = useState(props.category);
  const [open, setOpen] = useState(true);
  const [animDuration, setAnimDuration] = useState(0);
  const [disableFirstAnimation, setDisableFirstAnimation] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const [cardContainerIsOpen, setCardContainerIsOpen] = useRecoilState(CardContainerIsOpen);

  useEffect(() => {
    if (disableFirstAnimation) {
      setDisableFirstAnimation(false);
      return;
    }

    setOpen(false);
    setCardContainerIsOpen(false);

    setTimeout(() => {
      setCategory(props.category);
    }, animDuration);
  }, [props.category]);

  useEffect(() => {
    if (!ref.current) return;

    setOpen(true);
    setAnimDuration(500 + ref.current.getBoundingClientRect().height / 10);

    setTimeout(() => {
      setCardContainerIsOpen(true);
    }, animDuration);
  }, [category]);

  return (
    <section
      className={CardContainerWrapperStyle({ open: open })}
      style={{ transition: `all ${animDuration}ms` }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          className={CardContainerStyle()}
          ref={ref}
        >
          {category.data.map((item) => {
            if (item.name.toLowerCase().includes(props.search)) {
              return (
                <Card
                  category={category.name}
                  item={item}
                  key={item.name}
                ></Card>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
