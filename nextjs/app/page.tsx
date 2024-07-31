export default function Home() {
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
        <input
        type="text"
        placeholder="Enter Your Email"
        className="input input-bordered input-secondary lg:pl-52 lg:pr-32 lg:mx-3 sm:px-40 md:px-24 bg-white lg:my-9 sm:my-7   "
      />
      <button className="btn btn-active btn-secondary md:mx-2 lg:mx-0 ">SignUp</button>
      <button className="btn btn-active btn-secondary sm:mx-2 md:hidden lg:hidden">Login</button>
      </div>
      </div>
     
    </main>
  );
}
