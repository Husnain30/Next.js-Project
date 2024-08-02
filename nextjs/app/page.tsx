
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      router.push('/welcome');
    } else {
      console.error('Failed to sign up');
    }
  };

  return (
    <main className="bg-[#9e13b9a4] h-screen">
      <div className="flex justify-end p-3 ">
        <button className="btn btn-active btn-secondary sm:hidden md:block lg:block">Login</button>
      </div>
      <div className="flex flex-col justify-center items-center m-24 ">
        <h1 className="font-sans font-bold text-4xl   ">
          Website For Creating User Profile Template
        </h1>
        <h1 className="py-6 font-light md:m-2  ">
          Sign up for free and Create a profile of your own Interest
        </h1>
        <div>
        <form onSubmit={handleSubmit}>
        <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input input-bordered input-secondary lg:pl-52 lg:pr-32 lg:mx-3 sm:px-40 md:px-24 bg-white lg:my-9 sm:my-7   "
      />
      <button type="submit"className="btn btn-active btn-secondary md:mx-2 lg:mx-0 ">SignUp</button>
      </form>
      <button className="btn btn-active btn-secondary sm:mx-2 md:hidden lg:hidden">Login</button>
      </div>
      </div>
     
    </main>
  );
}
