Technical Assessment: Implement an interface screen with the following components
  -Get a list of users from the API : https://jsonplaceholder.typicode.com/users
  -When selecting a 'user' to call the API, get a list of 'Tasks' by UserID and then display it on the interface
    +Get Task list from API: https://jsonplaceholder.typicode.com/users/${userId}/todos
    +Display and sort 'Tasks' (completed=false) to the top, Tasks (compleled=true) to the bottom
  -There is a button to 'Mark done Tasks' (completed=false), call API PATCH https://jsonplaceholder.typicode.com/todos/${taskId},body{'completed:true'}
  -Display the number of Tasks(completed=true) / Total Tasks
  -When 'Mark done' button is clicked, show 'Loading' status on that button, until API request is done successfully, update status of 'Task' according to the response returned
