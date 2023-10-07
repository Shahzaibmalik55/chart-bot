import { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { Dropdown } from "primereact/dropdown";
import { SelectItem } from "primereact/selectitem";

import "./high-charts.scss";

interface HighChartsProps {
  data: any[];
  categories: string[];
  title: string;
}

export const HighCharts = ({ categories, data, title }: HighChartsProps) => {
  const chartTypes: SelectItem[] = [
    {
      title: "Area",
      value: "area",
    },
    {
      title: "Area spline",
      value: "areaspline",
    },
    {
      title: "Bar",
      value: "bar",
    },
    {
      title: "Line",
      value: "line",
    },
    {
      title: "Pie",
      value: "pie",
    },
  ];

  const [selectedChartType, setSelectedChartType] = useState("bar");

  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories,
    },
    title: {
      text: title,
    },
    series: [
      {
        type: selectedChartType,
        data,
      },
    ],
  });

  useEffect(() => {
    if (selectedChartType) onChartTypeChange(selectedChartType);
  }, [selectedChartType]);

  const onChartTypeChange = (type: string) => {
    setChartOptions({
      title: chartOptions.title,
      xAxis: {
        categories,
      },
      series: [
        {
          type: type,
          data,
        },
      ],
    });
  };

  return (
    <div className="high-chart-container">
      <div className="chart-dropdown">
        <div className="title">You can change chart type from here:</div>
        <Dropdown
          value={selectedChartType}
          onChange={(e: any) => setSelectedChartType(e.value)}
          options={chartTypes}
          optionLabel="title"
          placeholder="Select chart type"
          className="w-full md:w-14rem"
        />
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
