
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = () => {

  }

  return (
    <div className="header w-full justify-between px-10 flex ">
      <div className="p-2 flex">
        <Link to={"/"}>
          <img className="w-32" src="https://res.cloudinary.com/thisisninh/image/upload/v1668088540/logo_oiwgo2.png" alt="" />
        </Link>
      </div>
      <div className="flex">
        <nav className='xl:'>
          <ul className="flex justify-center mt-8">
            <li className="mx-5 hover:underline decoration-3 font-bold "><Link to={"/"}>Home</Link></li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><Link to={"/products"}>All products</Link>
            </li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><Link to={"/about"}>About us</Link></li>
            <li className="mx-5 hover:underline decoration-3 font-bold "><Link to={"/feedback"}>Feedback</Link>
            </li>
          </ul>
        </nav>
        <div className="mx-auto max-w-md my-3">
          <form onSubmit={handleSubmit(onSubmit)} className="border-black w-[200px] h-10 rounded-full">
            <input {...register("search")} type="search" className="border-black w-[200px] h-10 rounded-full" />
            <button>

            </button>
          </form>

        </div>
        <button className="text-black font-bold my-3 mx-1 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full  w-12 h-12 ">
          <Link to={"/auth"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </Link></button>
        <button className="text-black font-bold my-3 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full w-12 h-12 ">
          <Link to={"/cart"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header