const Course = ({ course }) => {
    console.log(course)
    return (
      <div>
        <Header course = {course}/>
        <Content course={course} /> 
        <Total course = {course} />
      </div>
    )
  }
  
  
  const Header = ({ course }) => <h1> {course.name} </h1>
  
  const Part = ({ name, exercises }) =>
    <p>
      {name} {exercises}
    </p>
  
  const Content = ({ course }) => 
      <>
        {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
      </>
  
  
  const Total = ({ course }) => {
    console.log(course)
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <div>
        <strong>total of {total} exercises </strong>
      </div>
    )
  }
  
  export default Course