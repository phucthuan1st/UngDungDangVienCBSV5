import React from "react";
import Chart from "./Chart";
import mockGenderData from "../mock/gender.json";
import "../styles/Overview.css";

const Overview = () => {
  return (
    <div className="Section" id="Overview">
      <div className="Title">Tổng quan</div>
      <div className="Content">
        <div className="AllChartContainer">
          <>
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
            <Chart
              type="round"
              data={{
                labels: ["Male", "Female"],
                datasets: [
                  {
                    label: "people",
                    data: mockGenderData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Overview;
