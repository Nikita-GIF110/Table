import { useEffect, useState, useRef } from 'react'

export function useOutsideAlerter(initioalIsVivible) {
  const [isShow, setIsShow] = useState(initioalIsVivible)
  const ref = useRef(null)

  const handelClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handelClickOutside, true)
    return () => {
      document.removeEventListener('click', handelClickOutside, true)
    }
  })

  return { ref, isShow, setIsShow }
}
