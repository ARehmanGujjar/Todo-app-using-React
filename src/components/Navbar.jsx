
function Navbar() {
  return (
    <nav className="flex p-4 justify-between items-center bg-violet-300 rounded-lg mx-1 my-1">
        <div className=" logo w-10 md:w-14 h-6 md:h-8 flex justify-center items-center cursor-pointer">
            <img src="logo.png" alt="logo" />
        </div>
        <ul className="flex content-center items-center text-white text-sm md:text-lg">
            <li className="cursor-pointer mx-2 hover:animate-pulse">Home</li>
            <li className="cursor-pointer mx-2 hover:animate-pulse">About Us</li>
            <li className="cursor-pointer mx-2 hover:animate-pulse">Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
