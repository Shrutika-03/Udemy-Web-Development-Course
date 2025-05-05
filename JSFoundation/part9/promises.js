function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

// fetchData()
//   .then((res) => {
//     console.log(res);
//     return res.toLowerCase();
//   })
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

//   promise chaining
const fetchNum = () => {
  return new Promise((resolve) => {
    resolve(1);
  });
};

fetchNum()
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
    return res * 3;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
