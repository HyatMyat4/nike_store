"use client";
import React from "react";
import { dailyData } from "../../constants";
import { ResponsiveLine } from "@nivo/line";
import { useMemo, useState } from "react";
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
} from "@mui/material/colors";
interface Props {
  startDate: any;
  endDate: any;
}

function Daily({ startDate, endDate }: Props) {
  const [formattedData] = useMemo(() => {
    if (!dailyData) return [];

    const totalSalesLine = {
      id: "totalSales",
      color: "#EC4899",
      data: [] as any[],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "#F97316",
      data: [] as any[],
    };

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);

      if (dateFormatted >= startDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];
    return [formattedData];
  }, [dailyData, startDate, endDate]);
  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <ResponsiveLine
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: cyan[500],
              },
            },
            legend: {
              text: {
                fill: cyan[500],
              },
            },
            ticks: {
              line: {
                stroke: cyan[500],
                strokeWidth: 1,
              },
              text: {
                fill: cyan[500],
              },
            },
          },
          legends: {
            text: {
              fill: cyan[500],
            },
          },
          tooltip: {
            container: {
              color: purple[500],
            },
          },
        }}
        colors={{ datum: "color" }}
        margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 90,
          legend: "Month",
          legendOffset: 60,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top-right",
            direction: "column",
            justify: false,
            translateX: 50,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Daily;
