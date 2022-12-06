import { Select } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../service/category'
import { useGetProductsQuery, useSortsProdQuery } from '../../../service/product'

type Props = {}

const ListProducts = (props: Props) => {
    const { data: products = [], isLoading, isError } = useGetProductsQuery()
    const { data: cate = [] } = useGetCategoriesQuery()
    const handleChange = (value: any) => {
        console.log(value);
        const dataSort = value
        const { data: products = [] } = useSortsProdQuery(dataSort)
        console.log(products);

    }
    if (isLoading) {
        return (
            <div>
                Loading ...
            </div>
        )
    }
    if (isError) {
        return (
            <div>
                Error
            </div>
        )
    }
    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-56 my-10">
                <div className="text-white font-bold text-3xl text-center py-20">
                    All products
                </div>
            </div>
            <div className="article container mx-auto">
                <div className="grid grid-cols-5 gap-4">
                    {/* Products */}
                    <div className="col-span-4">
                        <hr />
                        <div className="sort flex my-2">
                            <h1 className="text-2xl">
                                Sort by
                            </h1>
                            <Select
                                defaultValue="---"
                                style={{ width: 320, marginLeft: 10 }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'asc',
                                        label: 'Up',
                                    },
                                    {
                                        value: 'desc',
                                        label: 'Down',
                                    }
                                ]}
                            />
                        </div>
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-12">
                            {products.map((item: any) => (
                                <Link to={`/product/${item.id}/detail`}>
                                    <div key={item.id} className="bg-gray-100 transition group ease-out duration-500 hover:shadow-md hover:border-black border-2 border-soild rounded-md">
                                        <img src={item.image} alt="" className="w-5/6 mx-auto mt-8 h-[300px] ease-in duration-300 transform  hover:-translate-y-8" />
                                        <h1 className="text-2xl font-semibold text-center">{item.name}</h1>
                                        <p className="group-hover:text-red-900 text-1xl text-center underline">{item.sale} $</p>
                                        <div className="mx-10 justify-between flex my-5">
                                            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
                                                Infatuated
                                            </button>
                                            <button className="px-5 py-2 bg-black text-white rounded-full hover:bg-white hover:text-black border-2 border-black" >
                                                Add to card
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                    {/* Products */}
                    {/* Category */}
                    <div className="col-span-1">
                        <hr />
                        <h1 className="text-2xl ">
                            Gender
                        </h1>
                        <div className="all-cate my-5">
                            {cate.map((item) => (
                                <div key={item.id}>
                                    <a className="my-5 mx-2 hover:underline" href="#">{item.name}</a>
                                </div>
                            ))}
                        </div>
                        {/* <h1 className="text-2xl ">
                            Gender
                        </h1>
                        <div className="mx-2 my-5">
                            <input type="radio" name="gender" /> Men
                            <br />
                            <input type="radio" name="gender" /> Women
                        </div> */}
                    </div>
                    {/* Category */}
                </div>
            </div>
        </div>
    )
}

export default ListProducts