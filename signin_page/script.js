document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.querySelector(".Name");
  const number = document.querySelector(".Number");
  const pass = document.querySelector(".pass");

  const requestData = {
    name: name.value,
    phone: number.value,
    pass: pass.value,
  };

  async function postData(
    url = "http://localhost:3000/api/v1/signin",
    data = requestData
  ) {
    const response = await fetch("http://localhost:3000/api/v1/signin", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const Success = postData().then((res) => {
    console.log(res.msg);
    if (res.msg == "Success") {
      window.location.replace(
        "file:///D:/Full%20stack%20journey/Lib_management/login_page/index.html"
      );
    } else {
      alert(res.msg);
    }
  });
});
const loginbtn = document.querySelector(".loginbtn");
loginbtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace(
    "file:///D:/Full%20stack%20journey/Covid-Vaccination/Front-end/login_page/index.html?"
  );
});
