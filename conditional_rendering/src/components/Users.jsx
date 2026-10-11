import React from 'react'

const Users = () => {
    let user =
        [
            {
                "id": 1,
                "name": "Alice Johnson",
                "role": "Software Engineer",
                "department": "Engineering",
                "skills": ["JavaScript", "React", "Node.js"],
                "isActive": true
            },
            {
                "id": 2,
                "name": "Bob Smith",
                "role": "UI/UX Designer",
                "department": "Design",
                "skills": ["Figma", "Sketch", "Prototyping"],
                "isActive": true
            },
            {
                "id": 3,
                "name": "Charlie Brown",
                "role": "Product Manager",
                "department": "Product",
                "skills": ["Roadmapping", "Agile", "User Research"],
                "isActive": false
            }
        ]

    let allactiveUsers = user.filter((user) => user.isActive === true)
    console.log("users active", allactiveUsers)
    return (
        <div> <hr></hr> all active  Users data  is  here :
            {allactiveUsers.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>Name :{user.name}</h4>
                        <p>Role: {user.role}</p>
                        <p>Department: {user.department}</p>
                    </div>
                )
            })}


        </div >
    )
}

export default Users