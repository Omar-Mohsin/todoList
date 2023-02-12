# Documentation for a todo-List app

# Im sorry the project could not upload in GitHub, I upload it to google drive  


### This project is a todo-list app using react js and node js and mongo db

### the app has two sides "frontend and backend", and have 2 folder client folder which is a frontend(react js)
## and server folder which is the backend (node js and MongoDB)

# client structure 

## first thing a slice the project into something called a component, each component contains something to do 

## in this project I have 3 components in addition to the app file, I created a components folder and move these components to it

## three components are:  

# 1 - CardList

### This component contains all the functionality of the app, I named it CardList because it looks like a card, and List because maybe in future we add a new feature to the app and we need to reuse this list 

# 2 - InputField 

### This component contains an input tag and submits button, TODO-LIST functionality that when you press the add button it will render a new task 

### so this something happens when I use something called useState hook, every single press the new item will push inside the array call items, and the item will come from the input tag using the function (onChange) will track the value on input (type = text) and put it in variable and but that variable to
### items array when I click the add button, and then the button pressed, the fetch will work and send data to the server and save in MongoDB

# 3- TodoItem 

### this component contains all items(tasks) that will display on the screen after pressing the button , and I use the map function to display all the items(tasks) on the screen, and every item(task) has a delete button to delete the task from the screen and items array 


## ------------------------------------
# 2 -  server structure  : 

### first thing a require all dependencies that I need in this app (cors, mongoose, express, body-parser, nodemon)

### then I connect the node js to the MongoDB using mongoose, and then I build the schema, that how the data will store in MongoDB

### the HTTP methods come here, post and get, and the server will run on port 3001 




# technical issues : 

### 1 - cors problem, I tried to solve it but nothing solve this problem, 
### 2 - the server cant reserve any data from the frontend side, however from the network section it told me (data post done) 


## Journey

### I had final exams from 21-01-2023 to 31-01-2023   I had 6 exams and it was very hard to make an assignment at this time 
### so I started doing it in 1-02-2023 

### I started node js, I do not have any experience in it, and I never use it before, 
### and I learn it in 2 days (just a structure,  basics things ), 
### then in one day I finished all the frontend side, components and design and I used bootstrap and scss

### then I back to node js and continue learning it, till now Im still learning


# Thank you!

## Thank you to give me that opportunity 