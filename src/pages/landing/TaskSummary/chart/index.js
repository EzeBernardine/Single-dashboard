import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import { ChartStyles } from "./styles";

export const CustomeChart = () => {
  const ctx = useRef();

  useEffect(() => {
    new Chart(ctx.current, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            backgroundColor: "transparent",
            borderColor: "#04b004",
            data: [10, 2, 21, 4, 6, 9, 11],
            borderWidth: 2,
            lineTension: 0.8,
            pointBorderWidth: 0,
            pointRadius: 0,
            fill: true,
            spanGaps: false,
          },
        ],
      },

      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        plugins: {
          filler: {
            propagate: true,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              }, 
              gridLines: {
                color: "#fafafa",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },

              stacked: true,
              gridLines: {
                color: "#fafafa",
              },
            },
          ],
        },
      },
    });
  });

  return (
    <ChartStyles>
      <div >
        <div className="canvas">
          <canvas width="400" height="400" ref={ctx} />
        </div>
      </div>
    </ChartStyles>
  );
};
