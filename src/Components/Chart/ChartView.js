import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const opt = {
    options: {
        chart: {
          gap:"20px",
          // padding: "10px",
            toolbar: {
              show: false
            }
          },
          tooltip: {
            style: {
              fontSize: "12px",
              fontFamily: undefined
            },
            onDatasetHover: {
              style: {
                fontSize: "12px",
                fontFamily: undefined
              }
            },
            theme: "dark"
          },
          xaxis: {
            categories: ["Jan", "Feb", "March", "April"],
            show: false,
            labels: {
              show: true,
              style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500"
              }
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false,
            color: "black",
            labels: {
              show: true,
              style: {
                colors: "#CBD5E0",
                fontSize: "14px"
              }
            }
          },
          grid: {
            show: false,
            strokeDashArray: 5,
            yaxis: {
              lines: {
                show: true
              }
            },
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              colorStops: [
                [
                  {
                    offset: 0,
                    color: "#4318FF",
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: "rgba(67, 24, 255, 1)",
                    opacity: 0.28
                  }
                ]
              ]
            }
          },
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: "40px"
            }
          }
    },
    series: [
        {
            name: "Hours Spent",
            data: [2.7, 2.3, 5, 6, ]
          }
    ]
  };


const BarChart = (props) => {
 

  return (
   <div className="chart">
      <div>
          <h1 style={{fontSize:"24px",fontWeight:"700"}}>OverView</h1>
          <p style={{color:"silver"}}>Monthaly Preview</p>
       </div>

    <Chart
              options={opt.options}
              series={opt.series}
              type="bar"
               className="chartJs"
            />
     
   </div>
  );
};

export default BarChart;
