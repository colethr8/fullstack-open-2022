import { useState } from "react";

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
            <Statistics stats={statistics} />
        </div>
    );
};

const Button = ({ type, handler}) => {
    return <button onClick={handler}>{type}</button>;
};

const Statistics = ({ stats }) => {
    const average = () => {
        return (stats.good - stats.bad) / stats.total;
    };

    const positive = () => {
        return (stats.good / stats.total) * 100;
    }
    
    if (stats.total > 0) {
        return (
            <div>
                <StatisticLine type="good" value={stats.good} />
                <StatisticLine type="neutral" value={stats.neutral} />
                <StatisticLine type="bad" value={stats.bad} />
                <StatisticLine type="all" value={stats.total} />
                <StatisticLine type="average" value={average()} />
                <StatisticLine type="positive" value={positive()} />
            </div>
        );
    } else {
        return <p>No feedback given!</p>;
    }
};

const StatisticLine = ({ type, value }) => {
    if (type === "positive") {
        return <p>{type} {value}%</p>
    }
    return <p>{type} {value}</p>
};

export default App;
