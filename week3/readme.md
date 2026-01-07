Week Number: [3]
Date: [30.12.2025]

✅ Completed This Week:
- Understanding promises
- async/await syntax
- Error handling with try/catch
- fetch API basics
- Working with JSON data

[Exercise completed]
Exercise 1
    Asynchronous data retrieval:
    The getPosts function performs a fetch request to the API.
    Converts the response to JSON and displays the first 5 posts.
    Has error handling via try...catch.
    → Practice working with async/await and basic API requests.

Exercise 2
    Getting a specific post by ID:
    The getPost function makes a request to the API with the id parameter.
    Checks the response status (response.ok).
    If everything is fine, it shows the post, if not, it throws an error.
    → Practice checking the correctness of the response and handling errors.

Exercise 3
    Relationship between users and their posts:
    First, all users are retrieved.
    The id of the first user is taken.
    A query is performed for this user's posts.
    The first 3 posts from his collection are displayed.
    → Practice sequential asynchronous requests and working with related data.
    
🚧 Challenges Faced:
- difference between try..catch + await and promise
- promise.race usage areas