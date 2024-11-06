'use client';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      const data = await response.json();
      // console.log('User id:', data.userID); 
      router.push(`/profile/${data.userID}`); 
    } else {
      const errorText = await response.text();
      alert(`There was a problem submitting the form: ${errorText}`);
    }
  };

  return (
  
    <div className="flex items-center justify-center w-[1440px] h-full bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg  w-[650px] w-full"
      >
        <h2 className="text-[20px] text-center mb-4">
          Start New Form with Legistai
        </h2>
        <input 
          name="name" 
          placeholder="Name" 
          required 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <input 
          name="location" 
          placeholder="Location" 
          required 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <input 
          name="phone_number" 
          placeholder="Phone Number" 
          required 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          required 
          rows="6" 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <input 
          type="number" 
          name="rating" 
          placeholder="Rating" 
          min={1}
          max={5}
          required 
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <div className="flex space-x-2">
          <button 
            type="submit" 
            className="flex-1 bg-teal-500 text-white py-2 rounded hover:bg-teal-600 "
          >
            Register
          </button>
          <button 
            type="button" 
            className="flex-1 border border-teal-500 text-teal-500 py-2 rounded hover:bg-teal-500 hover:text-white " 
            onClick={() => alert('Please fill out the form before proceeding!')}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
