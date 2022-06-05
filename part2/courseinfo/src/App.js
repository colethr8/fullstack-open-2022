const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
};

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    );
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) =>
                <Part key={part.name} name={part.name} exercises={part.exercises} />
            )}
        </div>
    );
}

const Total = ({ parts }) => {
    const calculate = () => {
        let sum = 0;
        parts.forEach((part) => {
            sum += part.exercises;
        });
        return sum;
    };
    
    return (
        <p>Total of {calculate()} exercises</p>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            },
            {
                name: 'Redux',
                exercises: 11
            }
        ]
    }

    return (
        <Course course={course} />
    );
};

export default App;