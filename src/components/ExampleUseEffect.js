import React, { useEffect, useState } from 'react'

const ExampleUseEffect = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} number of times `
  }, [count])
  return (
    <div>
      <p>You clicked {count } numbers of times</p>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  )
}

export default ExampleUseEffect
