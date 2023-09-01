const Courses = ({ courses }) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({ name }) => (
    <h2>{name}</h2>
  )
  
  const Content = ({ parts }) => {
    let result = parts.reduce(((sum, part) => sum + part.exercises), 0)
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
        <p>
          <strong>total of {result} exercises</strong>
        </p>
      </div>
    )
  }
  
  const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}</p>
    )
  }

export default Courses