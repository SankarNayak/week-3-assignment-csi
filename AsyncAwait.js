function processData(data) {
  console.log("Processing data: ", data);
}

async function fetchData() {
  console.log("Fetching data...");

  const data = await new Promise((resolve) => {
    setTimeout(() => {
      const fetchedData = { id: 1, name: "Sankar Nayak" };
      console.log("Data fetched successfully");

      resolve(fetchedData);
    }, 2000);
  });

  return data;
}

(async () => {
  const data = await fetchData();
  processData(data);
})();
