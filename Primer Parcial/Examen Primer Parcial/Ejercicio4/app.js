const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

//Get

async function obtenerPosts() {

  const btnGetAll = document.getElementById("btn-get-all");
  const getResult = document.getElementById("get-result");

  btnGetAll.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();
    let tabla = `
      <h3>Lista de Productos</h3>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Cuerpo</th>
          </tr>
        </thead>
        <tbody>
    `;

    posts.forEach(post => {
      tabla += `
        <tr>
          <td>${post.id}</td>
          <td>${post.title}</td>
          <td>${post.body}</td>
        </tr>
      `;
    });
    tabla += `
        </tbody>
      </table>
    `;
    getResult.innerHTML = tabla;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    const getResult = document.getElementById("getResult");
    getResult.innerHTML = "<p>Error al cargar los posts.</p>";
}
}
)}
document.getElementById("btn-get-all").addEventListener("click", obtenerPosts);
