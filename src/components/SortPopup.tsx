import { useEffect, useRef, useState } from 'react'

export enum SortParameter {
  popularity = 'популярности',
  price = 'цене',
  alphabet = 'алфавиту',
}

interface SortPopupPropsTypes {
  items: Array<SortParameter>
}

const SortPopup: React.FC<SortPopupPropsTypes> = (props): JSX.Element => {
  const { items } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeParameterIndex, setActiveParameterIndex] = useState<number>(0)

  const sortRef = useRef<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    document.body.addEventListener('click', (event: MouseEvent) => {
      if (!event?.composedPath().includes(sortRef.current) && isOpen) {
        closePopup()
      }
    })
  }, [isOpen])

  const togglePopupVisibility = () => setIsOpen(!isOpen)
  const closePopup = () => setIsOpen(false)
  const handleParameterClick = (idx: number) => {
    return () => {
      setActiveParameterIndex(idx)
      closePopup()
    }
  }

  return (
    <div className='sort' ref={sortRef}>
      <div className='sort__label'>
        <svg
          className={isOpen ? 'rotated' : ''}
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
            <b>Сортировка по:</b>
            <span onClick={togglePopupVisibility}>{items[activeParameterIndex]}</span>
          </>
        ) : (
          'Нет параметров сортировки'
        )}
      </div>

      {isOpen && (
        <div className='sort__popup'>
          <ul>
            {items.map((parameter, idx) => {
              return (
                <li
                  key={parameter}
                  className={activeParameterIndex === idx ? 'active' : ''}
                  onClick={handleParameterClick(idx)}>
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

export default SortPopup
