import { StoryblokCategory } from '@/models/storyblokCategories';
import Card from './Card/Card';
import { CardContainerStyle, CardContainerWrapperStyle } from './CardContainer.css';
import { useEffect, useRef, useState } from 'react';

type props = {
  category: StoryblokCategory;
};

export default function CardContainer(props: props) {
  const [category, setCategory] = useState(props.category);
  const [show, setShow] = useState(true);
  const [height, setHeight] = useState(0);
  const [disableFirstAnimation, setDisableFirstAnimation] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disableFirstAnimation) {
      setDisableFirstAnimation(false);
      return;
    }

    setHeight(0);

    setTimeout(() => {
      setCategory(props.category);
    }, 600);
  }, [props.category]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [category]);

  return (
    <section
      className={CardContainerWrapperStyle({ show: show })}
      style={{ height: height }}
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
