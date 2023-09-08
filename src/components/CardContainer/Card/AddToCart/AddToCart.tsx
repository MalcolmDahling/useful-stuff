import { Tooltip } from 'react-tooltip';
import CartSvg from './../../../../../public/images/cart.svg';
import CheckmarkSvg from './../../../../../public/images/checkmark.svg';
import { AddToCardSvgStyle, AddToCartButtonStyle } from './AddToCard.css';
import { useRecoilState } from 'recoil';
import { Cart } from '@/atoms/Cart';
import { useState } from 'react';

type props = {
  name: string;
  command: string;
};

export default function AddToCart(props: props) {
  const [cart, setCart] = useRecoilState(Cart);
  const [added, setAdded] = useState(false);

  function handleClick() {
    let duplicate = false;

    setAdded(true);

    cart.forEach((item) => {
      if (item === props.command) {
        duplicate = true;
      }
    });

    if (!duplicate) {
      setCart((prev) => [...prev, props.command]);
    }
  }

  return (
    <button
      className={AddToCartButtonStyle()}
      onClick={handleClick}
      data-tooltip-id={`${props.command} cart`}
      data-tooltip-content={!added ? `Add "${props.name}" to Cart.` : 'Added to Cart'}
    >
      <Tooltip id={`${props.command} cart`}></Tooltip>
      {added ? <CheckmarkSvg className={AddToCardSvgStyle({ checkmark: true })}></CheckmarkSvg> : <CartSvg className={AddToCardSvgStyle()}></CartSvg>}
    </button>
  );
}
