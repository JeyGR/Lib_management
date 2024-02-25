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
    url = "http://localhost:3000/api/v1/login",
    data = requestData
  ) {
    const response = await fetch(url, {
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
        "file:///D:/Full%20stack%20journey/Lib_management/userindex.html"
      );
    } else if (res.msg == "admin") {
      window.location.href =
        "file:///D:/Full%20stack%20journey/Lib_management/index.html";
    } else {
      alert(res.msg);
    }
  });
});
const signinbtn = document.querySelector(".singinbtn");

signinbtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace(
    "file:///D:/Full%20stack%20journey/Lib_management/signin_page/index.html"
  );
});
