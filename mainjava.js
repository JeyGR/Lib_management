const selector = document.querySelector(".maintb");
const maindiv = document.querySelector(".maindiv");
const mainsignin = document.querySelector(".mainsignin");
const mainlogin = document.querySelector(".mainlogin");
const mainaddbooks = document.querySelector(".mainaddbooks");
const logoutmainpage = document.querySelector(".logoutbtnmainpage");

const changetologinpage = () => {
  maindiv.classList.add("hide");
  mainsignin.classList.add("hide");
  mainlogin.classList.remove("hide");
  mainaddbooks.classList.add("hide");
};
const changetosigninpage = () => {
  maindiv.classList.add("hide");
  mainsignin.classList.remove("hide");
  mainlogin.classList.add("hide");
  mainaddbooks.classList.add("hide");
};
const changetomainpage = () => {
  maindiv.classList.remove("hide");
  mainsignin.classList.add("hide");
  mainlogin.classList.add("hide");
  mainaddbooks.classList.add("hide");
};
const changetoaddbookspage = () => {
  maindiv.classList.add("hide");
  mainsignin.classList.add("hide");
  mainlogin.classList.add("hide");
  mainaddbooks.classList.remove("hide");
};

//  oihigopuhsdougodsugo;dsf=======Signinpage=======
const funcofsigninpage = () => {
  document
    .querySelector(".signinbtnpage")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const name = document.querySelector(".Name");
      const number = document.querySelector(".Number");
      const pass = document.querySelector(".pass");

      const requestData = {
        name: name.value,
        phone: number.value,
        pass: pass.value,
      };
      if (pass) {
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
            console.log("Signin Success");
            changetologinpage();
          } else {
            alert(res.msg);
          }
        });
      } else {
        console.log("Enter full data");
        alert("Must fill number and pass");
      }
    });
};

// kjsdbfkjbdfkjcbsdkj.bds.kjcbdskj.cbkdscbkj.sdcbksd=========Loginpage

const funcofloginpage = () => {
  document
    .querySelector(".loginbtnpage")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const name = document.querySelector(".Name");
      const number = document.querySelector(".Numberlogin");
      const pass = document.querySelector(".passlogin");

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
          console.log("Login success");
          changetomainpage();
          funcofmainpage();
          document.querySelector(".addbookadminbtn").classList.add("hide");
        } else if (res.msg == "admin") {
          console.log("Admin login success");
          changetomainpage();
          funcofmainpage();
          document.querySelector(".addbookadminbtn").classList.remove("hide");
        } else {
          alert(res.msg);
        }
      });
    });
};
// sgoalifiesifgsifsgikfbgskjbfssjvskdjdvbkjbvfs==========Mainpage

const funcofmainpage = () => {
  const selector = document.querySelector(".maintb");
  const getdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/tasks/1");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data.data);
      iterateData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const iterateData = (data) => {
    if (Array.isArray(data.data)) {
      data.data.forEach((d) => {
        const repeat = ` <tr>
                <td>${d.title}</td>
                <td>${d.aurthor}</td>
                <td>${d.subject}</td>
                <td>${d.genre}</td>
            </tr>`;
        selector.innerHTML += repeat;
      });
    } else {
      console.error("Data is not an array:", data);
    }
  };

  getdata();

  async function searchFunc(search) {
    const response = await fetch(
      `http://localhost:3000/api/v1/tasks/search/${search}`
    );
    const data = await response.json();
    console.log(data.data);
    selector.innerHTML = "";
    iterateData(data);
  }

  document.querySelector(".btnsearch").addEventListener("click", (event) => {
    const search = document.querySelector(".searchitem");
    const requestdata = { author: search.value };

    searchFunc(search.value);

    async function postData(
      url = `http://localhost:3000/api/v1/tasks/search?${search.value}`,
      data = requestdata
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
  });

  document.querySelector(".btn1").addEventListener("click", (event) => {
    const getdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tasks/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.data);
        selector.innerHTML = "";
        iterateData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const iterateData = (data) => {
      if (Array.isArray(data.data)) {
        data.data.forEach((d) => {
          const repeat = ` <tr>
                  <td>${d.title}</td>
                  <td>${d.aurthor}</td>
                  <td>${d.subject}</td>
                  <td>${d.genre}</td>
              </tr>`;
          selector.innerHTML += repeat;
        });
      } else {
        console.error("Data is not an array:", data);
      }
    };
    getdata();
  });

  document.querySelector(".btn2").addEventListener("click", (event) => {
    const getdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tasks/2");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.data);
        selector.innerHTML = "";
        iterateData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const iterateData = (data) => {
      if (Array.isArray(data.data)) {
        data.data.forEach((d) => {
          //   console.log(d.count);
          const repeat = ` <tr>
                  <td>${d.title}</td>
                  <td>${d.aurthor}</td>
                  <td>${d.subject}</td>
                  <td>${d.genre}</td>
              </tr>`;
          selector.innerHTML += repeat;
        });
      } else {
        console.error("Data is not an array:", data);
      }
    };
    getdata();
  });

  document.querySelector(".btn3").addEventListener("click", (event) => {
    const getdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tasks/3");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.data);
        selector.innerHTML = "";
        iterateData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const iterateData = (data) => {
      if (Array.isArray(data.data)) {
        data.data.forEach((d) => {
          const repeat = ` <tr>
                  <td>${d.title}</td>
                  <td>${d.aurthor}</td>
                  <td>${d.subject}</td>
                  <td>${d.genre}</td>
              </tr>`;
          selector.innerHTML += repeat;
        });
      } else {
        console.error("Data is not an array:", data);
      }
    };
    getdata();
  });

  document.querySelector(".btn4").addEventListener("click", (event) => {
    const getdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/tasks/4");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data.data);
        selector.innerHTML = "";
        iterateData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const iterateData = (data) => {
      if (Array.isArray(data.data)) {
        data.data.forEach((d) => {
          const repeat = ` <tr>
                  <td>${d.title}</td>
                  <td>${d.aurthor}</td>
                  <td>${d.subject}</td>
                  <td>${d.genre}</td>
              </tr>`;
          selector.innerHTML += repeat;
        });
      } else {
        console.error("Data is not an array:", data);
      }
    };
    getdata();
  });
  const addbook = document
    .querySelector(".addbookadminbtn")
    .addEventListener("click", (event) => {
      changetoaddbookspage();
      funcofaddbookspage();
    });
};

// ksdhujgfjhldgufdgdbdjbhjkdvjdfgskgdbvjkbdj=========Addbooks

const funcofaddbookspage = () => {
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
        console.log("adding book - Success on time");
      } else {
        alert(res.msg);
      }
    });
  });
};

document.querySelector(".btnback").addEventListener("click", (event) => {
  changetomainpage();
  funcofmainpage();
});

document
  .querySelector(".addbookadminbtn")
  .addEventListener("click", (event) => {
    changetoaddbookspage();
    funcofaddbookspage();
  });

document.querySelector(".loginbtn").addEventListener("click", (event) => {
  event.preventDefault();
  changetologinpage();
  funcofloginpage();
});

document.querySelector(".signinbtnn").addEventListener("click", (event) => {
  event.preventDefault();
  changetosigninpage();
  funcofsigninpage();
});

document.querySelector(".signinbtnpage").addEventListener("click", (event) => {
  event.preventDefault();
  funcofsigninpage();
});

document.querySelector(".loginbtnpage").addEventListener("click", (event) => {
  event.preventDefault();
  funcofloginpage();
});
logoutmainpage.addEventListener("click", (event) => {
  changetologinpage();
  funcofloginpage();
});
