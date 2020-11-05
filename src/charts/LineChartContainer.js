import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default class Example extends PureComponent {
  render() {
    let data = this.props.lineChart;

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
