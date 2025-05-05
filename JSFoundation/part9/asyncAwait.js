function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Shruti", url: "https://shru.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetch successfully");

    console.log("User data:", userData);
  } catch (error) {
    console.log("Fetching error data ", error);
  }
}
getUserData();
