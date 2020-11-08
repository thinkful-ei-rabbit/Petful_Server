# Petful App!

Puts cats and dogs into a queue, while waiting for people to line up and adopt them!

## Base URL: https://petful-app-server.herokuapp.com/petful/
## React Client Prototype: https://petful-inky.vercel.app/

## Endpoints:

### pets/
- GET: get's the next dog and cat in line to be adopted
- DELETE: deletes adopted cat/dog. Required body: `{ "type": "cat" || "dog" }`\
> returns removed pet

### people/
- GET: get's all people currently in line to adopt
- POST: adds a person to the queue. Required body: `{ "person": string }`
- DELETE: removes person at the front of the line (index `[0]`)
> returns removed person

### /reset/{pets || people}
- Get: resets local data store to default for either pets or people

## Tech Stack:

1. Express Server
> uses a static data store populated via Queue datastructure classes
2. React Typescript Client
> link to repo: https://github.com/thinkful-ei-rabbit/Petful_Client
