import React from 'react'

type Props = {}

const CategoryList = (props: Props) => {
    return (
        <div className='grid grid-cols-2 gap-5 my-20'>
            <div className="flex border border-r-black hover:bg-gray-100">
                <div className="w-1/2">
                    <h1 className='text-2xl text-gray-900 m-10'>Men</h1>
                </div>
                <img className='w-1/2 h-full' src='https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2Fssrco%2Cmhoodie%2Cmens%2Cfafafa_ca443f4786%2Cfront%2Ctall_three_quarter%2Cx1000-bg%2Cf8f8f8.png?alt=media&token=dba706e4-fb70-4dba-88ed-e0822eb41e46' alt="" />
            </div>
            <div className="flex border hover:bg-gray-100">
                <img className='w-1/2 h-full' src="https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2Fwomen.png?alt=media&token=e8089e06-a4a5-4656-af7f-e3c73a829b15" alt="" />
                <div className="w-1/2 text-right">
                    <h1 className='text-2xl text-gray-900 m-10'>Women</h1>
                </div>
            </div>
        </div>
    )
}

export default CategoryList