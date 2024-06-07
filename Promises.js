function fetchData() {
  console.log("Fetching data...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Sankar nayak" };
      console.log("Data fetched successfully");

      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Processing data: ", data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
