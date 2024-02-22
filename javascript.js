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
const addbook = document
  .querySelector(".addbook")
  .addEventListener("click", (event) => {
    window.location.href =
      "file:///D:/Full%20stack%20journey/Lib_management/addBooks.html";
  });
