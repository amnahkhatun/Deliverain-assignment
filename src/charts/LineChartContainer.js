import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000
  },
  {
    name: "B",
    uv: 3000
  },
  {
    name: "C",
    uv: 2000
  },
  {
    name: "D",
    uv: 2780
  },
  {
    name: "E",
    uv: 1890
  },
  {
    name: "F",
    uv: 2390
  },
  {
    name: "G",
    uv: 3490
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <AreaChart
        width={300}
        height={100}
        data={data}
        opacity="50%"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#007AFF" />
      </AreaChart>
    );
  }
}
