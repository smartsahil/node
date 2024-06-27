console.log("hi this is javascript file");

const apiCall = async () => {
  const response = await fetch("http://127.0.0.1:3001/", { mode: "no-cors" });
  console.log(response);
  const movies = await response.json();
  console.log(movies);
};

// const displayDiv = document.getElementById("display");

apiCall();
