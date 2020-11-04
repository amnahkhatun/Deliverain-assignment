import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: " A",
    uv: 1
  },
  {
    name: " B",
    uv: 7
  },
  {
    name: " C",
    uv: 3
  },
  {
    name: " D",
    uv: 5
  },
  {
    name: "E",
    uv: 4
  },
  {
    name: "F",
    uv: 6
  },
  {
    name: "G",
    uv: 2
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <BarChart
        width={300}
        height={100}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    );
  }
}
