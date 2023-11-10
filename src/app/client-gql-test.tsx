'use client';

import { useEffect } from 'react';

export default function ClientGqlTest() {
  useEffect(() => {
    Promise.race([
      fetch('/graphql?operationName=test'),
      fetch('/graphql?operationName=notCached')
    ]).then(console.log).catch(console.error)
  }, [])
  return null
}