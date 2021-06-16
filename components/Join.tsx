import { useState } from 'react'

const Join = () => {
  const [name, setName] = useState({ firstName: 'firstName', lastName: 'lastName' })
  return (
    <div>
      <input
        className="p-1 m-2 ring-2"
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        className="p-1 m-2 ring-2"
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>join:{`${name.firstName} ${name.lastName}`}</p>
    </div>
  )
}

export default Join
