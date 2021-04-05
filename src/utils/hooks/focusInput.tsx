import React, {useRef, useEffect} from 'react'

export function FocusInput() {
  const inputRef: any = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  )
}
