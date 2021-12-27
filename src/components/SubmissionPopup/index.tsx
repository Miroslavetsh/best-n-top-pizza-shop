import Portal from './Portal'

import styles from './Styles.module.scss'

interface SubmissionPopupPropTypes {
  children: React.ReactNode
  onClose: () => void
  isOpened: boolean
}

const SubmissionPopup: React.FC<SubmissionPopupPropTypes> = (props) => {
  const { children, onClose, isOpened } = props

  if (!isOpened) return null

  return (
    <Portal>
      <div className={styles.container} role='dialog'>
        <div className={styles.overlay} onClick={onClose} role='button' tabIndex={0} />

        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  )
}

export default SubmissionPopup
