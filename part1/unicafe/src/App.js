import { useState } from "react";

const Button = ({ type, handler}) => {
    return <button onClick={handler}>{type}</button>;
};

const Feedback = ({ type, value }) => {
    return <p>{type} {value}</p>;
};

const Total = ({ total }) => {
    return <p>all {total}</p>;
};

const Average = ({ good, bad, total }) => {
    const calculate = () => {
        if (total === 0) {
            return 0;
        }
        return (good - bad) / total;
    };

    return <p>average {calculate()}</p>
};

const Positive = ({ good, total }) => {
    if (total === 0) {
        return <p>positive 0%</p>
    }
    return <p>positive {(good / total) * 100}%</p>
}

const App = () => {
    const [statistics, setStatistics] = useState({
        good: 0, neutral: 0, bad: 0, total: 0
    });

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button type="good" handler={() => setStatistics({...statistics, good: statistics.good + 1, total: statistics.total + 1})} />
            <Button type="neutral" handler={() => setStatistics({...statistics, neutral: statistics.neutral + 1, total: statistics.total + 1})} />
            <Button type="bad" handler={() => setStatistics({...statistics, bad: statistics.bad + 1, total: statistics.total + 1})} />
            <h1>Statistics</h1>
            <Feedback type="good" value={statistics.good} />
            <Feedback type="neutral" value={statistics.neutral} />
            <Feedback type="bad" value={statistics.bad} />
            <Total total={statistics.total} />
            <Average good={statistics.good} bad={statistics.bad} total={statistics.total} />
            <Positive good={statistics.good} total={statistics.total} />
        </div>
    );
};

export default App;
