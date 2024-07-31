export default function Home() {
  return (
    <main className="bg-[#9e13b9a4] h-screen">
      <div className="flex justify-end p-3 ">
        <button className="btn btn-active btn-secondary sm:hidden md:block lg:block">Login</button>
      </div>
      <div className="flex flex-col justify-center items-center m-24 ">
        <h1 className="font-sans font-bold text-4xl sm:text-3xl  ">
          Website For Creating User Profile Template
        </h1>
        <h1 className="py-6 font-light   ">
          Sign up for free and Create a profile of your own Interest
        </h1>
        <div>
        <input
        type="text"
        placeholder="Enter Your Email"
        className="input input-bordered input-secondary pl-52 pr-32 mx-3 sm:px-12 bg-white my-9 "
      />
      <button className="btn btn-active btn-secondary sm:mx-3 ">SignUp</button>
      <button className="btn btn-active btn-secondary sm:block md:hidden lg:hidden">Login</button>
      </div>
      </div>
     
    </main>
  );
}
