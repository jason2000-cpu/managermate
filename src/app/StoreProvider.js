'use client'

import { useRef, useEffect } from 'react'
import { Provider } from 'react-redux'
import { setupListeners } from "@reduxjs/toolkit/query"
import { makeStore } from '@/lib/store'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  
  useEffect(()=>{
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}