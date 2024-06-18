# Local Development

-This application has both the frontend and the backend

## Backend
- This application utilizes json server capabilities to create a json server api
- To run the Backend locally

### Clone the repository
- Using git clone the repository locally

```bash
    git clone https://github.com/jason2000-cpu/
```

### Install the dependancies
- using the node package manager (npm) install the required backend dependancies

```bash
    npm Install
```

### Run the backend Service

```bash
    npm run test
```

- At this point the service  runs on http://localhost:3001/

#### Request Snapshots

##### Fetching users

```
    GET http://localhost:3001/users
```

- Result:
```
    {
      "id": "1",
      "FName": "Jackson",
      "SName": "Mwangi",
      "eamail": "jackson@gmail.com",
      "phone": "+254797955092",
      "userType": "admin",
      "password": "12345"
    },
    {
      "id": "2",
      "FName": "Alice",
      "SName": "Thompson",
      "email": "alicethompson@gmail.com",
      "phone": "+254792945092",
      "userType": "manager",
      "password": "12345"
    }
    ....
```

##### Fetching tasks

```
    GET http://localhost:3001/tasks
```

- Result

```
    {
      "id": 1,
      "title": "User Interface Design UI/UX",
      "start": "2024-06-07",
      "end": "2024-06-10",
      "assigned_to": "3",
      "assigned_by": "Admin Jackson",
      "description": "Using Your preffered tool  create an intuitive UIII",
      "color": "'#f56954'",
      "status": "complete"
    },
    {
      "id": 2,
      "title": "Frontend Development",
      "start": "2024-06-10",
      "end": "2024-06-13",
      "assigned_to": "3",
      "assigned_by": "Admin Jackson",
      "description": "Following The UI created earlier  develope the frontend",
      "color": "#f39c12",
      "status": "complete"
    }
    ....
```

##### Fetching Departments

```
    GET http://localhost:3001/departments
```

- Result

```
    {
      "id": 1,
      "name": "Human Resource",
      "code": "HR-120Z",
      "HOD": "James Peter",
      "contactEmail": "info@hrmanagermate",
      "date_created": "2024-03-02",
      "emmployees": [
        3
      ]
    },
    {
      "id": 2,
      "name": "Finance",
      "code": "FIN-120Z",
      "HOD": "Eunice Thompson",
      "contactEmail": "info@finmanagermate",
      "date_created": "2024-01-02",
      "emmployees": [
        3
      ]
    } ....
```


## Frontend

### Clone the repository
- using git clone the repository to your local pc 

```bash
    git clone https://github.com/jason2000-cpu/
```

### Install Dependancies
- using node package manager (npm) install the required dependancies by running the following
command on your terminal;

```bash
    npm install
```

### run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### User Types

#### Admin

- login credentials
```
 username: Jackson
 password: 12345 
```

###### Abilities
- Can add an existing employee as a manager


#### Manager

- login credentials

```
 username: Alice
 password: 12345

```

##### Abilities
    - Perform All CRUD Operations on tasks
    - Perform all CRUD operations on departments
    - Delete users from the organization
    - update profile

#### Employee

- An normal user (employee) can either create an account  or login (if they already have an account)

##### Abilities
 -  Mark Tasks as inprogress or completed
 - View the schedule on the calendar
 - update profile


## Deployment

- This web application is deployed  on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

- The live version can be accessed on [ManagerMate](https://github.com/jason2000-cpu/managermate)
