import {useEffect} from 'react'

export function useDocumentTitle(count: string) {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}
