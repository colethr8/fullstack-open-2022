import { useState } from "react";

const Button = ({ type, handler}) => {
    return <button onClick={handler}>{type}</button>;
};

const Feedback = ({ type, value }) => {
    return <p>{type} {value}</p>;
};

const App = () => {
    const [statistics, setStatistics] = useState({
        good: 0, neutral: 0, bad: 0
    });

    const incrementGood = () => {
        setStatistics({
            ...statistics,
            good: statistics.good + 1
        });
    };

    const incrementNeutral = () => {
        setStatistics({
            ...statistics,
            neutral: statistics.neutral + 1
        });
    };

    const incrementBad = () => {
        setStatistics({
            ...statistics,
            bad: statistics.bad + 1
        });
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button type="good" handler={incrementGood} />
            <Button type="neutral" handler={incrementNeutral} />
            <Button type="bad" handler={incrementBad} />
            <h1>Statistics</h1>
            <Feedback type="good" value={statistics.good} />
            <Feedback type="neutral" value={statistics.neutral} />
            <Feedback type="bad" value={statistics.bad} />
        </div>
    );
};

export default App;
