document.querySelector(".btnadd").addEventListener("click", (event) => {
  const title = document.querySelector(".intitle");
  const author = document.querySelector(".inauthor");
  const subject = document.querySelector(".insubject");
  const genre = document.querySelector(".ingenre");

  console.log(title.value);
  console.log(author.value);
  console.log(subject.value);
  console.log(genre.value);

  const reqData = {
    title: `${title.value}`,
    author: `${author.value}`,
    subject: `${subject.value}`,
    genre: `${genre.value}`,
  };

  async function postData(
    url = "http://localhost:3000/api/v1/tasks",
    data = reqData
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
      console.log("Success on time");
    } else {
      alert(res.msg);
    }
  });
});
document.querySelector(".btnback").addEventListener("click", (event) => {
  window.location.href =
    "file:///D:/Full%20stack%20journey/Lib_management/index.html";
});
