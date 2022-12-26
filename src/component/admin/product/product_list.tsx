import { Button, message, Popconfirm, Table } from 'antd'
import { IProduct } from '../../../interface/product'
import { useGetProductsQuery, useRemoveProductMutation } from '../../../service/product'
const { Column } = Table
const ProductList = () => {
    const { data: products = [], isLoading, isError } = useGetProductsQuery()
    const [removeData] = useRemoveProductMutation()
    console.log(products);
    const getAll = () => {
        return products.map((item: IProduct) => ({
            key: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            sale: item.sale,
            size: item.size,
            amount: item.amount
        }))

    }
    const removeItem = (id: any) => {
        removeData(id)
        message.info("Successfully")
    }
    return (
        <div>
            <Table dataSource={getAll()}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Sale" dataIndex="sale" key="sale" />
                <Column title="Amount" dataIndex="amount" key="amount" />
                <Column title="Size" dataIndex={"size"} key="size" />
                <Column title="Action" key="action" render={
                    (product) => {
                        console.log(product);
                        return (
                            <>
                                <Button href={`products/${product.key}/edit`} type='link'>Update</Button>
                                <Popconfirm
                                    placement='topRight'
                                    title="You want to delete ?"
                                    onConfirm={() => removeItem(product.key)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type='primary' danger>
                                        Delete
                                    </Button>
                                </Popconfirm>
                            </>
                        )
                    }
                }></Column>
            </Table>
        </div>
    )
}

export default ProductList