//Instructions
//- Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/day-4-todo-lists-template-2phy2?from-embed=&file=/index.js
//-  Do not code your solution in CodeSandbox  Copy or recreate the javascript files in your project.
//- Create an alert that lists all users, with their ids, names and what city they're from
//- Prompt the user for a user id
//- Display an alert with the username and all the todos titles that belong to that user 

//Tips
//- The user id creates an identifiable relationship with the todos
//- Sometimes it's good to map some values into a new data structure

//Challenge
//After you select a user, add the option to either show the todos or add a new todo to the list

//Challenge 2
//Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

let users = [
   { ID: 123, 
    Name: "Jeton Hasani",
    Username:"Toni",
    email: 'toni@april.biz',
    City: "Prizren",
   },
   { ID: 124, 
    Name: "Hasan Tmava",
    Username:"Cani",
    email: 'Cani@april.biz',
    City: "Malishevë",
   },
   { ID: 125, 
    Name: "Kujtim Gashi",
    Username:"Kujta",
    email: 'kujta@april.biz',
    City: "Prishtinë",
   },
   { ID: 126, 
    Name: "Arbenit Karaniqi",
    Username:"Niti",
    email: 'niti@april.biz',
    City: "Lipjan",
   },
   { ID: 127, 
    Name: "Jehona Shehu",
    Username:"Ona",
    email: 'ona@april.biz',
    City: "Mitrovic",
   },
]

let todos = [
    {
      userId: 1,
      id: 123,
      title: 'delectus aut autem',
      completed: false
    },
    {
        userId: 1,
        id: 124,
        title: 'quis ut nam facilis et officia qui',
        completed: false
      },
      {
        userId: 1,
        id: 125,
        title: 'fugiat veniam minus',
        completed: false
      },
      {
        userId: 1,
        id: 126,
        title: 'et porro tempora',
        completed: true
      },
      {
        userId: 1,
        id: 127,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: false
      },
]


console.log(users)
console.log(todos)
