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

import data from "../data";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    const data1 = this.props.barChart;
    return (
      <BarChart
        width={300}
        height={100}
        data={data1}
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
