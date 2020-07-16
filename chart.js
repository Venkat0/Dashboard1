var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Processed", "Created"],
    datasets: [
      {
        label: "# of Tomatoes",
        data: [5, 15],
        backgroundColor: ["#F57A20", "#303030"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutoutPercentage: 80,
    responsive: true,
  },
});
