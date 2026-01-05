async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts.slice(0, 5)); 
  } catch (error) {
    console.error('Помилка при отриманні постів:', error);
  }
}

console.log(getPosts());


async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status} ${response.statusText}`);
    }

    const post = await response.json();
    console.log(`Пост #${id}:`, post);
  } catch (error) {
    console.error('Не вдалося отримати дані:', error.message);
  }
}

console.log(getPost(1));
console.log(getPost(999999));


async function getUserPosts() {
  try {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const firstUserId = users[0].id;

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUserId}`);
    const posts = await postsResponse.json();

    console.log(`Пости користувача ${users[0].name}:`);
    console.log(posts.slice(0, 3));
  } catch (error) {
    console.error('Помилка при отриманні даних:', error.message);
  }
}

console.log(getUserPosts());