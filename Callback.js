function processData(data) {
  console.log("Processing data: ", data);
}

function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
      const data = { id: 1, name: "Sankar Nayak" };
      console.log("Data fetched successfully");

      callback(data);
  }, 2000);
}

fetchData(processData);
