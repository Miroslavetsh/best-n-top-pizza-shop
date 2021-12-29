import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import axios from 'axios'

import {
  clearCart,
  minusPizzaItem,
  plusPizzaItem,
  removePizzaFromCart,
} from '../../redux/actions/cart'

import { Button, CartItem, Container, SubmissionPopup } from '../../components'
import { ChosenPizza } from '../../models/Pizza'
import { CartState, RootState } from '../../models/Store'
import { SubmissionFilling } from '../../utils/constants'

import styles from './Styles.module.scss'

const Cart: React.FC = (): JSX.Element => {
  const [isSubmissionOpened, setIsSubmissionOpened] = useState<boolean>(false)
  const [submissionFilling, setSubmissionFilling] = useState<SubmissionFilling>({
    children: '',
    callback: () => {},
    withDeny: true,
  })
  const { totalPrice, totalCount, items } = useSelector<RootState, CartState>(({ cart }) => cart)
  const dispatch = useDispatch<Dispatch>()

  const addedPizzas = Object.keys(items)
    .map(Number)
    .map((key) => items[key].items[0])

  const handleClearCartClick = () => {
    return () => {
      setSubmissionFilling({
        children: 'Are You sure to clear all of your pizza!?',
        callback: () => {
          dispatch(clearCart())
          setIsSubmissionOpened(false)
        },
        withDeny: true,
      })
      setIsSubmissionOpened(true)
    }
  }

  const handleRemovePizzaClick = (id: number) => {
    return () => {
      setSubmissionFilling({
        children: 'Are You sure to remove this pizza!?',
        callback: () => {
          dispatch(removePizzaFromCart(id))
          setIsSubmissionOpened(false)
        },
        withDeny: true,
      })
      setIsSubmissionOpened(true)
    }
  }

  const handlePlusPizzaItemClick = useCallback(
    (id: number) => {
      return () => {
        dispatch(plusPizzaItem(id))
      }
    },
    [dispatch],
  )

  const handleMinusPizzaItemClick = useCallback(
    (id: number) => {
      return () => {
        dispatch(minusPizzaItem(id))
      }
    },
    [dispatch],
  )

  const handleSubmissionClose = () => {
    setIsSubmissionOpened(false)
  }

  const handleSubmissionDecline = () => {
    setIsSubmissionOpened(false)
  }

  const handleSubmitPurchasing = () => {
    setSubmissionFilling({
      children: 'Are You sure to buy these pizza!?',
      callback: () => {
        approvePurchasingPizzas()
        setIsSubmissionOpened(false)
      },
      withDeny: true,
    })
    setIsSubmissionOpened(true)
  }

  const approvePurchasingPizzas = () => {
    let url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''
    url += '/purchase'

    axios
      .post(url, {
        items,
        totalCount,
        totalPrice,
      })
      .then((response) => {
        setSubmissionFilling({
          children: (
            <>
              <h3>Successfully Purchased Pizza </h3>
              Your ID:
              <strong onClick={() => navigator.clipboard.writeText(response.data)} title='Copy to clipboard'>
                {response.data}
              </strong>
              👌
            </>
          ),
          callback: () => {
            dispatch(clearCart())
            setIsSubmissionOpened(false)
          },
          withDeny: false,
        })
        setIsSubmissionOpened(true)
      })
  }

  return (
    <div className='content'>
      <Container>
        {totalCount > 0 && totalPrice > 0 ? (
          <div className={styles.cart}>
            <div className={styles.top}>
              <h2 className={styles.title}>Chosen Pizza:</h2>

              <div className={styles.clear}>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M2.5 5H4.16667H17.5'
                    stroke='#B6B6B6'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z'
                    stroke='#B6B6B6'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M8.33337 9.16667V14.1667'
                    stroke='#B6B6B6'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.6666 9.16667V14.1667'
                    stroke='#B6B6B6'
                    strokeWidth='1.2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span onClick={handleClearCartClick()}>Clear the cart</span>
              </div>
            </div>

            <div className={styles.items}>
              {addedPizzas.map(({ name, type, size, price, id }: ChosenPizza) => (
                <CartItem
                  key={id}
                  name={name}
                  type={type}
                  size={size}
                  price={price}
                  count={items[id].items.length}
                  onRemovePizzaClick={handleRemovePizzaClick(id)}
                  onPlusPizzaClick={handlePlusPizzaItemClick(id)}
                  onMinusPizzaClick={handleMinusPizzaItemClick(id)}
                />
              ))}
            </div>

            <div className={styles.bottom}>
              <div className={styles.details}>
                <span>
                  Total pizzas count: <strong>{totalCount} шт.</strong>
                </span>

                <span>
                  Total price: <strong>&#36;{totalPrice}</strong>
                </span>
              </div>

              <div className={styles.buttons}>
                <Link to='/'>
                  <Button className={styles.blackButton} outline>
                    <svg
                      width='8'
                      height='14'
                      viewBox='0 0 8 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M7 13L1 6.93015L6.86175 1'
                        stroke='#d3d3d3'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>

                    <span>Continue Shopping</span>
                  </Button>
                </Link>

                <Button onClick={handleSubmitPurchasing} className={styles.payButton}>
                  <span>Buy NOW</span>
                </Button>
              </div>
            </div>

            <SubmissionPopup isOpened={isSubmissionOpened} onClose={handleSubmissionClose}>
              <div className={styles.submission}>
                <div className={styles.name}>{submissionFilling.children}</div>

                <div className={styles.buttons}>
                  {submissionFilling.withDeny && (
                    <Button className={styles.decline} onClick={handleSubmissionDecline}>
                      No
                    </Button>
                  )}

                  <Button className={styles.confirm} onClick={submissionFilling.callback}>
                    {submissionFilling.withDeny ? 'Yes' : 'Ok'}
                  </Button>
                </div>
              </div>
            </SubmissionPopup>
          </div>
        ) : (
          <div className={[styles.cart, styles.empty].join(' ')}>
            <h2>
              It Seems Like <strong>YOUR</strong> cart is empty 😕
            </h2>

            <p>
              You probably haven't ordered a pizza yet.
              <br />
              To order a pizza, go to the home page.
            </p>

            <img src='/img/empty-cart.png' alt='Empty cart' />

            <Link to='/'>
              <Button className={[styles.backButton, styles.blackButton].join(' ')}>
                <svg
                  width='7'
                  height='12'
                  viewBox='0 0 7 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6 11L1 5.94179L5.88479 1'
                    stroke='#d3d3d3'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <span>Get Back</span>
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Cart
