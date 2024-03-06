var blogs = JSON.parse(localStorage.getItem("Blogs"));
let table_body = document.getElementById("table_body");
blogs.map((item) => {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
    <td>
                  <img
                    src="${item.image}"
                  />
                </td>
                <td>${item.title.substring(0,45) + '...'}</td>
                <td>${item.description.substring(0,100) + '...'}</td>
                <td>${item.author.authorName}</td>
                <td>50</td>
                <td>${item.comments.length}</td>
                <td class="actions">
                  <button>
                  <i class="fa-solid fa-pen"></i>
                  </button>
                  <button>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
    `
    table_body.appendChild(newTr);
});