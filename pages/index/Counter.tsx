import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      Counter {count}
    </button>
  )
}

export default Counter
