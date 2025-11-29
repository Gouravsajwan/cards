import React, { useEffect ,useState } from 'react'

const Profile = ({userId}) => {

const [user, setUser] = useState(null)
useEffect(()=>{
   async function fetchData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const data = await res.json() ;
    setUser(data)
   }

  fetchData();

},[userId])

if(!user) return <div>....Loading</div>

  return (
   <div className="min-h-screen flex items-center justify-center  px-6 py-12 text-gray-800">
<div className="w-96 bg-white rounded-2xl shadow-xl overflow-hidden">

<div className="h-40  from-indigo-500 to-purple-500"></div>
<div className="flex justify-center -mt-16">
<img
src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
alt="Profile"
className="w-32 h-32 rounded-full border-4 border-white object-cover"
/>
</div>



<div className="p-6 text-center">
<h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
<p className="text-sm text-gray-500 mb-4">{user.website}</p>


<div className="space-y-2 text-sm">
<p className="text-gray-700 font-medium">{user.email}</p>
<p className="text-gray-700 font-medium">{user.phone}</p>
<p className="text-gray-700 font-medium">{user.address.city}</p>
</div>


<button className="mt-6 w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
Contact
</button>
</div>
</div>
</div>
  )
}

export default Profile