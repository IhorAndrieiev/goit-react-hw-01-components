import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((item) => (
          <StatisticItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
