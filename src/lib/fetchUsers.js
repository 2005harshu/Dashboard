export async function fetchUsers() {
    const res=await fetch('https:dummyjson.com/users?limit=20');

    const data = await res.json();

    const departments = ['HR', 'Engineering', 'Marketing', 'Sales'];

    return data.users.map(user => ({
        ...user,
        department: departments[Math.floor(Math.random() * departments.length)],
        rating:Math.ceil(Math.random() * 5 ),
    }) 
    );

}
