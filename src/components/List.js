import React from 'react'

const List = () => {

  const persons = [
    {
      id: 1,
      name: "Hasib",
      age: 26,
      skill: "React"
    },
    {
      id: 2,
      name: "King",
      age: 26,
      skill: "React"
    },
    {
      id: 3,
      name: "Raja",
      age: 26,
      skill: "React"
    },
    {
      id: 4,
      name: "Sameer",
      age: 26,
      skill: "React"
    },
    {
      id: 5,
      name: "King's",
      age: 26,
      skill: "React"
    }
  ]
  const personList = persons.map(person => <h2> I am {person.name}. I am {person.age} years young.
    I know {person.skill}</h2>)

  return (
    <div className='list'>
      {personList}
    </div>
  )
}

export default List