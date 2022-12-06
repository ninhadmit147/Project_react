
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

const HeaderUser = (props: Props) => {
  const navidate = useNavigate()
  const { register, handleSubmit } = useForm()
  const searchForm = (values: any) => {
    const dataSearch = values.search
    console.log(dataSearch);
    navidate(`/products/${dataSearch}/search`)
  }
  const Signout = () => {
    localStorage.removeItem("user")
    navidate("/auth")
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
          <form onSubmit={handleSubmit(searchForm)} className="relative mx-auto w-max">
            <input type="search" {...register("search")} className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-2 border-black bg-transparent pl-12 ease-linear duration-300 outline-none focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4" />
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-black peer-focus:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </form>
        </div>
        <button onClick={() => Signout()} className="text-black font-bold my-3 mx-1 hover:bg-black hover:text-white transition ease-out duration-500 border-soild border-2 border-black rounded-full  w-12 h-12 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>

        </button>
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

export default HeaderUser