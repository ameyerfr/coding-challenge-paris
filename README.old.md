# Coding Challenge

## Introduction

Welcome to this coding challenge! Here, we will test your coding abilities by doing some tasks. 

This challenge takes inspirtation from several tests that former Ironhackers had in the past. It is very long and impossible to finish after 2.5 hours. The idea is to give an overview of what could be a test given by a company.

## Rules

- You have 2.5 hours to complete the challenge.
- You can ask for help twice. Every time you ask for help, a teacher is going to give you a hint and spend maximum 2 minutes with you.
- You can't communicate with other people.
- You can go on any website to find information 😀



## Score

You will have different tasks to complete. Each task gives you up to a certain number of points. You can complete the tasks in the order you want!

&#35; | Task                                             | Points
------|--------------------------------------------------|-------
1     | Create the page Temperature                      | 12
2     | Create the page Customize Image                  | 15
3.1   | Display 20 celebrities from the API              | 10
3.2   | Let users select celebrities for more details    | 10
3.3   | Display 200 celebrities                          | 10
3.4   | Display 2000 celebrities in less than 30 seconds | 6
3.5   | Create a search bar                              | 10
4     | Create a Readme file                             | 5
5     | Deploy online                                    | 3
6     | Make a beautiful website                         | 10
7     | Have a good code quality                         | 5



## Advice 

Don't spend too much time on something that is too hard for you and move on to the next steps. Don't miss the last tasks (4, 5, 6 and 7) which are easy and very important.

## Tools used

- React generated with `create-react-app`
- NPM packages: `react-router-dom` and `axios`
- The Movie DB API:
  - Documentation: https://developers.themoviedb.org/3/people/get-popular-people
  - Endpoint for the challenge: `GET https://api.themoviedb.org/3/person/popular?page=42&api_key=YOUR-API-KEY`

## Initialize the project


### Create the React application

First, execute the following commands to create a new React app and install the package `react-router-dom`:

```
npx create-react-app solution-code
cd solution-code
npm install react-router-dom
npm start
```

Then modify the following files:

```js
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
```


```js
// src/App.js

import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
```


```js
// src/Home.js (new file)

import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello, my name is ... and you are on my solution for the Ironhack challenge!</p>
    </div>
  )
}
```

And that's it! Now you should see a website with 4 different links. At this stage, only the "Home" should work.

Feel free to reorganize the files as you wish. You just have to make sure your code is clear enough for another developer 😉


### Publish to GitHub

Create a [new GitHub repository](https://github.com/new) and execute the following commands:

```sh
$ git remote add origin https://the-link-to-your-repo
$ git add .
$ git commit -m "First commit"
$ git push origin master
```

You can send the GitHub link to your instructor.

Now you are ready to start the real part 🚀


## Possible tasks

### Task 1 | Create the page Temperature

In this task you have to create a tool to give information about the weather.

Create a `Temperature` component, renderd when you go to "http://localhost:3000/temperature".

This component should render:
- An input so that the user can type a temperature, in Celsius
- A text that changes based on the temperature:
  - When the temperature is lower than 10 => "*It's cold ❄️*" (in blue)
  - When the temperature is between 10 and 30 => "*It's nice 🌼*" (in black)
  - When the temperature is above 30 => "*It's warm ☀️*" (in red)


For this task, you need only 1 state `temperature`.

![](https://media.giphy.com/media/SvRujIPniFEskwn634/giphy.gif)


### Task 2 | Create the page Customize Image

In this task you have to create a tool to previsualize pictures with diffrent sizes.

Create a `CustomizeImage` component, rendered you go to "http://localhost:3000/customize-image".

In this component, you should render:
- An text input
- A range input, between 0 and 200
- A text with the following pattern: "... x ... px", where ... is the value of the range input
- An image where the "src" is the value of the text input

For this task, you need 2 states: `size` and `url`.

Don't worry if your image doesn't have the right proportions. It should work perfectly with square images.

![](https://media.giphy.com/media/cOhxoe7X5hNjzl0Bco/giphy.gif)


### Task 3 | Popular actors (very long)

#### Task 3.0 | Generate an API key on The Movie DB

- Download [Postman](https://www.getpostman.com) if you don't have it
- Go to https://www.themoviedb.org
- Create an account and verify it
- Request an API key here (you have to give some simple informations): https://www.themoviedb.org/settings/api/request
- Open Postman and send a request to `GET https://api.themoviedb.org/3/person/popular?page=2&api_key=YOUR-API-KEY`

If everything went well, you should see a result with 20 actors!

![Imgur](https://i.imgur.com/HlEmhA0.png)

If you want more informations about the API, you can check the [documentation](https://developers.themoviedb.org/3/people/get-popular-people).



#### Task 3.1 | Display 20 celebrities

The goal is to display the 20 most popular actors, by fetching the information from: `GET https://api.themoviedb.org/3/person/popular?page=1&api_key=YOUR-API_KEY`.

Some advice:
- You can install the package `axios` by doing: `npm install axios`
- You can use a state `celebrities` initalized with `[]`

This is what you could see by the end of this iteration:

![img](https://i.imgur.com/LhASiIe.png)

✅ If you want to display a profile picture, add `"https://image.tmdb.org/t/p/w185"` in front of the the `profile_path`. Example: https://image.tmdb.org/t/p/w185/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg


#### Task 3.2 | Let users select celebrities for more details

The goal of this task is to display more details of a celebrity when the user clicks on it. 

The details you should display are the following:
- The name of the celebrity
- A picture of the celebrity
- The `known_for` movies of the celebrity

To complete this task, you have to make the selected celebrity more visible in the list. For example, when a user clicks on "Robert Downey Jr.", you can make his name bolder in the list.

![img](https://i.imgur.com/oO2gJbu.png)

#### Task 3.3 | Display 200 celebrities

Make sure you can display at least 200 celebrities!

#### Task 3.4 | Display 2000 celebrities in less than 30 seconds

Make sure you can display at least 2000 celebrities in less than 30 seconds! Be careful, with the API, you can only make 40 requests / 10 seconds. So for this task, you need to be able to catch errors sent by the server and send another request later. 

Be careful, if 2 users are browsing your website at the same time, you are going to reach the API limit quicker and your users still want to see the celebrities, even if it takes time.

#### Task 3.5 | Create a search bar

The goal of this task is to create a simple search bar to find celebrities by name. The search should be case insensitive.

![Imgur](https://i.imgur.com/11daQIl.png)


### Task 4 | Create a Readme file

The Readme file is the content that is displayed when you go to a Github repository.

You need to create/change a `README.md` file with:
- The instructions to execute your project on a computer
- A link to your project (see next task)
- Some screenshots


### Task 5 | Deploy online

Because your are doing a simple front-end project, you can deploy your website very easily with different tools. The easiest one to use is Netlify. 

First, run the following command:
```sh
# Create a /build folder with a static website (simple index.html + CSS + JS)
$ npm run build
```

Then, go to https://netlify.com/drop and drag and drop your `/build` folder generated by the previous command.

It's already done 😀 Don't forget to add the link to your `README.md` file.


### Task 6 | Make a beautiful website

Try to make the best website as possible!

Some simple things you can do:
- Change the favicon
- Change the title




### Task 7 | Have a good code quality

People are going to read your code so it's important to have a clean code that follow these principles:
- Have a good indentation. To reindent a file in VS Code, you can type `Cmd+Shift+P` > "*Format Document*".
- Choose explicit names for variables and functions
- Keep your functions short. If a function is more than 50 lines, you probably need to create sub-functions to make your code neater.

