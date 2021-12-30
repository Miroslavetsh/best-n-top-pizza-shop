import React, { useEffect, useRef, useState } from 'react'

import { SortParameter } from '../../utils/constants'

import styles from './Styles.module.scss'

interface SortPopupPropTypes {
  items: Array<SortParameter>
  activeSortBy: SortParameter
  onSortClick: (parameter: SortParameter) => void
}

const SortPopup: React.FC<SortPopupPropTypes> = React.memo(
  (props): JSX.Element => {
    const { items, activeSortBy, onSortClick } = props
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const sortRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const listener = (event: MouseEvent) => {
        if (
          sortRef.current &&
          !event?.composedPath().includes(sortRef.current) &&
          isOpen
        ) {
          closePopup()
        }
      }

      document.body.addEventListener('click', listener)

      // Component Will Unmount
      return () => {
        document.removeEventListener('click', listener)
      }
    }, [isOpen])

    const togglePopupVisibility = () => setIsOpen(!isOpen)

    const closePopup = () => setIsOpen(false)

    const handleParameterClick = (item: SortParameter) => {
      return () => {
        onSortClick(item)
        closePopup()
      }
    }

    return (
      <div className={styles.sort} ref={sortRef}>
        <div className={styles.label}>
          <svg
            className={isOpen ? styles.rotated : ''}
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
              fill='#2C2C2C'
            />
          </svg>

          {items.length ? (
            <>
              <b>Sort by:</b>

              <span onClick={togglePopupVisibility}>{activeSortBy}</span>
            </>
          ) : (
            'No sort parameters'
          )}
        </div>

        {isOpen && (
          <div className={styles.popup}>
            <ul>
              {items.map((parameter, idx) => {
                return (
                  <li
                    key={parameter}
                    className={
                      items.indexOf(activeSortBy) === idx ? styles.active : ''
                    }
                    onClick={handleParameterClick(parameter)}>
                    {items[idx]}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
)

export default SortPopup
