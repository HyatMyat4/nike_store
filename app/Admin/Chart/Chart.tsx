"use client";
import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { salesByCategory } from "../../../constants";

import {
  pink,
  purple,
  blue,
  teal,
  orange,
  cyan,
  lightBlue,
  brown,
  yellow,
  lightGreen,
} from "@mui/material/colors";
function Chart({ isDashboard = false }) {
  const colors = [
    pink[500],
    cyan[400],
    "#FFEB3B",
    brown[500],
    "#FF7043",
    "#76FF03",
  ];

  const formattedData = Object.entries(salesByCategory).map(
    ([category, sales], i) => ({
      id: category,
      label: category,
      value: sales,
      color: colors[i],
    })
  );

  return (
    <div className="w-full h-full cursor-pointer">
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: teal[200],
              },
            },
            legend: {
              text: {
                fill: blue[200],
              },
            },
            ticks: {
              line: {
                stroke: orange[200],
                strokeWidth: 1,
              },
              text: {
                fill: purple[200],
              },
            },
          },
          legends: {
            text: {
              fill: orange[200],
            },
          },
          tooltip: {
            container: {
              color: teal[500],
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={
          isDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsTextColor={orange[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: isDashboard ? 20 : 0,
            translateY: isDashboard ? 50 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#818CF8",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: teal[500],
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Chart;
