export const users = [
    {
        id: 1,
        FName: "Jackson",
        SName: "Mwangi",
        email: "jackson@gmail.com",
        phone: "+254797955092",
        assignedTask: false,
        department: "head",
        userType: "admin",
        password: "12345"
    },
    {
        id: 2,
        FName: "Alice",
        SName: "Thompson",
        email: "alicethompson@gmail.com",
        phone:"+254792945092",
        assignedTask: false,
        department: "head",
        userType: "manager",
        password:"12345"
    },
    {
        id: 3,
        FName: "Peter",
        SName: "Tate",
        email: "petertate@gmail.com",
        phone:"+254792945126",
        assignedTask: true,
        department: "IT",
        userType: "user",
        password: "12345"
    },
    {
        id: 3,
        FName: "Ann",
        SName: "Nyaboke",
        email: "annnyabs@gmail.com",
        phone:"+254792945321",
        assignedTask: false ,
        department: "Finance",
        userType: "user",
        password: "12345"
    }
]


// #619ff5
// #083778 
// #094190  
// #64a0f5 
// color: '#f56954',
// color: '#f39c12',
// color: '#00a65a'


export const todos = [
    {
        id: 1,
        title: "User Interface Design",
        start: "2024-06-07",
        end: "2024-06-10",
        assigned_to: 'Peter Tate',
        assigned_by: "Admin Jackson",
        description:"Using Your preffered tool  create an intuitive UI",
        color: "'#f56954'",
        status: "complete",
    },
    {
        id: 2,
        title: "Frontend Development",
        start: "2024-06-10",
        end: "2024-06-13",
        assigned_to: 'Peter Tate',
        assigned_by: "Admin Jackson",
        description:"Following The UI created earlier  develope the frontend",
        color: "#f39c12",
        status: "complete"
    },
    {
        id: 3,
        title: "API Development",
        start: "2024-06-13",
        end: "2024-06-15",
        assigned_to: 'Peter Tate',
        assigned_by: "Admin Jackson",
        description:"Using Flask design and develope an API",
        color: "#00a65a",
        status: "inprogress"
    },
    {
        id: 4,
        title: "API Intergration",
        start: "2024-06-15",
        end: "2024-06-18",
        assigned_to: 'Peter Tate',
        assigned_by: "Admin Jackson",
        description:"Intergrate the frontend to the API",
        color: "#64a0f5",
        status: "incomplete"
    },
    {
        id: 5,
        title: "Web App Deployment",
        start:"2024-06-18",
        end: "2024-06-21",
        assigned_to: 'Peter Tate',
        assigned_by: "Admin Jackson",
        description:"Deploy the Whole application on Vercel",
        color: "#083778",
        status: "incomplete"
    }
]


export const departments = [
    {
        id: 1,
        name: "Human Resource",
        code: "HR-120Z",
        HOD: "James Peter",
        contactEmail: "info@hrmanagermate",
        date_created: "2024-03-02",
        emmployees: [3],
    },
    {
        id: 2,
        name: "Finance",
        code: "FIN-120Z",
        HOD: "Eunice Thompson",
        contactEmail: "info@finmanagermate",
        date_created: "2024-01-02",
        emmployees: [3],
    },
    {
        id: 3,
        name: "IT",
        code: "IT-120Z",
        HOD: "Jackson Mwangi",
        contactEmail: "info@itmanagermate",
        date_created: "2023-12-02",
        emmployees: [3],
    },
    {
        id: 4,
        name: "Sales",
        code: "SL-120Z",
        HOD: "James Peter",
        contactEmail: "info@salesmanagermate",
        date_created: "2024-05-02",
        emmployees: [3],
    },
]