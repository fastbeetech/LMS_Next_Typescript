const Chart = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Bar chart</div>
      <canvas className="p-10" id="chartBar"></canvas>
    </div>

    // <!-- Required chart.js -->
    // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    // <!-- Chart bar -->
    // <script>
    //   const labelsBarChart = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //   ];
    //   const dataBarChart = {
    //     labels: labelsBarChart,
    //     datasets: [
    //       {
    //         label: "My First dataset",
    //         backgroundColor: "hsl(252, 82.9%, 67.8%)",
    //         borderColor: "hsl(252, 82.9%, 67.8%)",
    //         data: [0, 10, 5, 2, 20, 30, 45],
    //       },
    //     ],
    //   };

    //   const configBarChart = {
    //     type: "bar",
    //     data: dataBarChart,
    //     options: {},
    //   };

    //   var chartBar = new Chart(
    //     document.getElementById("chartBar"),
    //     configBarChart
    //   );
    // </script>
  );
};

export default Chart;

export const Doughnut = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
      <canvas className="p-10" id="chartDoughnut"></canvas>
    </div>

    // <!-- Required chart.js -->
    // <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    // <!-- Chart doughnut -->
    // <script>
    //   const dataDoughnut = {
    //     labels: ["JavaScript", "Python", "Ruby"],
    //     datasets: [
    //       {
    //         label: "My First Dataset",
    //         data: [300, 50, 100],
    //         backgroundColor: [
    //           "rgb(133, 105, 241)",
    //           "rgb(164, 101, 241)",
    //           "rgb(101, 143, 241)",
    //         ],
    //         hoverOffset: 4,
    //       },
    //     ],
    //   };

    //   const configDoughnut = {
    //     type: "doughnut",
    //     data: dataDoughnut,
    //     options: {},
    //   };

    //   var chartBar = new Chart(
    //     document.getElementById("chartDoughnut"),
    //     configDoughnut
    //   );
    // </script>
  );
};
