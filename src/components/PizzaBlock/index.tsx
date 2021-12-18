import React, { useState } from 'react'

import { Button } from '..'
import Pizza, { ChosenPizza } from '../../models/Pizza'
import { pizzaDoughTypes, pizzaSizes } from '../../utils/constants'

import styles from './Styles.module.scss'

interface PizzaBlockPropTypes {
  pizza: Pizza
  amountOfItemsInCart: number
  onButtonClick: (pizza: ChosenPizza) => void
}

const PizzaBlock: React.FC<PizzaBlockPropTypes> = (props): JSX.Element => {
  const { id, imageUrl, name, types, sizes, price } = props.pizza
  const { onButtonClick, amountOfItemsInCart } = props

  const availableDoughTypes = [pizzaDoughTypes.THIN, pizzaDoughTypes.TRADITIONAL]
  const availableSizes = [pizzaSizes.SMALL, pizzaSizes.MEDIUM, pizzaSizes.BIG]

  const [activeType, setActiveType] = useState<number>(types[0])
  const [activeSize, setActiveSize] = useState<number>(sizes[0])

  const selectPizzaDoughType = (idx: number) => {
    setActiveType(idx)
  }

  const selectPizzaSize = (idx: number) => {
    setActiveSize(availableSizes[idx])
  }

  const addPizzaToCart = () => {
    onButtonClick({
      id,
      imageUrl,
      name,
      type: availableDoughTypes[activeType],
      size: activeSize,
      price,
    })
  }

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.image} src={imageUrl} alt='Pizza' />

      <h4 className={styles.title}>{name}</h4>

      <div className={styles.selector}>
        <ul>
          {availableDoughTypes.map((type, idx) => {
            const classNames = []
            if (!types.includes(idx)) classNames.push(styles.disabled)
            if (!classNames.includes(styles.disabled) && activeType === idx) {
              classNames.push(styles.active)
            }

            const chooseDoughType = (idx: number) => {
              return () => {
                selectPizzaDoughType(idx)
              }
            }

            return (
              <li className={classNames.join(' ')} onClick={chooseDoughType(idx)} key={type}>
                {type}
              </li>
            )
          })}
        </ul>

        <ul>
          {availableSizes.map((size, idx) => {
            const classNames = []
            if (!sizes.includes(availableSizes[idx])) classNames.push(styles.disabled)
            if (!classNames.includes(styles.disabled) && activeSize === availableSizes[idx]) {
              classNames.push(styles.active)
            }

            const chooseSize = (idx: number) => {
              return () => {
                selectPizzaSize(idx)
              }
            }

            return (
              <li className={classNames.join(' ')} onClick={chooseSize(idx)} key={size}>
                {size}
              </li>
            )
          })}
        </ul>
      </div>

      <div className={styles.bottom}>
        <div className={styles.price}>
          <span>up to</span> &#36;{price}
        </div>

        <Button onClick={addPizzaToCart} className={styles.buttonAdd} outline>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Add to Cart</span> {amountOfItemsInCart ? <i>{amountOfItemsInCart}</i> : null}
        </Button>
      </div>
    </div>
  )
}

export default PizzaBlock
