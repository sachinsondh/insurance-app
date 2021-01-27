import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Display = (props) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="_id"
        label="Months"
        tick={[
          { 1: "Jan" },
          { 2: "Feb" },
          { 3: "Mar" },
          { 4: "Apr" },
          { 5: "May" },
          { 6: "June" },
          { 7: "July" },
          { 8: "Aug" },
          { 9: "Sept" },
          { 10: "Oct" },
          { 11: "Nov" },
          { 12: "Dec" },
        ]}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Display;
