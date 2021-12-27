import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface SubmissionPopupPropTypes {
  children: React.ReactNode
}

const Portal: React.FC<SubmissionPopupPropTypes> = ({ children }) => {
  const [container] = useState<HTMLDivElement>(document.createElement('div'))

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}

export default Portal
