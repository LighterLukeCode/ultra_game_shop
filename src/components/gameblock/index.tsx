import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem } from "../../redux/Slices/cartSlice";
import { Link } from "react-router-dom";
import { CartItem } from "../../interfaces/CartItem";
import { Game } from "../../interfaces/Game";

interface Props {
  game: Game;
}

const GameBlock = (props: Props) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(state => state.cartSlice.items.find(obj => obj.game.id === props.game.id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAddItem = () => {
    const item: CartItem = {
      game: props.game,
      count: 1,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="game-block-wrapper">
      <div className="game-block">
        <Link to={`/game/${props.game.id}`}>
          <img className="game-block__image" src={props.game.imageUrl} alt="game" />
          <h4 className="game-block__title">{props.game.title}</h4>
        </Link>
        <div className="game-block__selector">
          <ul>
            {props.game.genres.map((genres, i) => (
              <li key={i}>{genres}</li>
            ))}
          </ul>
        </div>
        <div className="game-block__bottom">
          <div className="game-block__price">{props.game.price} ₽</div>
          <button onClick={onClickAddItem} className="button button--outline button--add">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add to Cart</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBlock;
