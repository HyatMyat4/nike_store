"use client";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import { monthlyData } from "../../../constants";
import { useMemo } from "react";

interface Props {
  view: string;
  isDashboard: boolean;
}

function Overview({ isDashboard = false, view }: Props) {
  const [Windowwidth, setWindowwidth] = useState<any>();
  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!monthlyData) return [];

    const totalSalesLine = {
      id: "totalSales",
      color: "#2DD4BF",
      data: [],
    };
    const totalUnitsLine = {
      id: "totalUnits",
      color: "#40E0D0",
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;
        // @ts-ignore
        totalSalesLine.data = [
          // @ts-ignore
          ...totalSalesLine.data,
          // @ts-ignore
          { x: month, y: curSales },
        ];
        // @ts-ignore
        totalUnitsLine.data = [
          // @ts-ignore
          ...totalUnitsLine.data,
          // @ts-ignore
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [monthlyData]);

  useEffect(() => {
    if (window) {
      const Windowwidth = window.innerWidth || document.body.clientWidth;
      setWindowwidth(Windowwidth);
    }
  }, []);
  return (
    <div className="w-full h-full">
      {/* @ts-ignore */}
      <ResponsiveLine
        data={view === "sales" ? totalSalesLine : totalUnitsLine}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#818CF8",
              },
            },
            legend: {
              text: {
                fill: "#818CF8",
              },
            },
            ticks: {
              line: {
                stroke: "#818CF8",
                strokeWidth: 1,
              },
              text: {
                fill: "#818CF8",
              },
            },
          },
          legends: {
            text: {
              fill: "#FF5722",
            },
          },
          tooltip: {
            container: {
              color: "#FF5722",
            },
          },
        }}
        colors={{ datum: "color" }}
        margin={
          Windowwidth > 775
            ? { top: 20, right: 50, bottom: 50, left: 70 }
            : { top: 10, right: 10, bottom: 10, left: 10 }
        }
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
        enableArea={isDashboard}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: (v) => {
            if (isDashboard) return v.slice(0, 3);
            return v;
          },
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5,
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard
            ? ""
            : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
          legendOffset: -60,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={"#FF5722"}
        pointBorderWidth={2}
        pointBorderColor={"#FF5722"}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 30,
                  translateY: -40,
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
              ]
            : undefined
        }
      />
    </div>
  );
}

export default Overview;
