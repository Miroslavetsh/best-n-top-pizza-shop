import Image from 'next/image'

import { Button } from '..'

import styles from './Styles.module.scss'

interface CartItemPropTypes {
  name: string
  type: string
  size: number
  price: number
  count: number
  imageUrl: string
  onRemovePizzaClick: () => void
  onPlusPizzaClick: () => void
  onMinusPizzaClick: () => void
}

const CartItem: React.FC<CartItemPropTypes> = (props): JSX.Element => {
  const {
    name,
    type,
    size,
    price,
    count,
    imageUrl,
    onRemovePizzaClick,
    onPlusPizzaClick,
    onMinusPizzaClick,
  } = props

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.img}>
          <Image
            src={imageUrl}
            alt='Pizza'
            width={63}
            height={63}
          />
        </div>

        <div className={styles.info}>
          <h3>{name}</h3>
          <p>
            With <b>{type}</b> dough, <b>{size}</b> cm size.
          </p>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.count}>
          <Button
            disabled={count === 1}
            onClick={count > 1 ? onMinusPizzaClick : () => {}}
            className={styles.countMinus}
            outline
            circle>
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </Button>

          <b>{count}</b>

          <Button
            onClick={onPlusPizzaClick}
            className={styles.countPlus}
            outline
            circle>
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </Button>
        </div>

        <div className={styles.price}>
          <b>&#36;{price * count}</b>
        </div>

        <div className={styles.remove}>
          <Button
            onClick={onRemovePizzaClick}
            className={styles.button}
            circle
            outline>
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
