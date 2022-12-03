import { DashboardOutlined, ProfileOutlined, PlusOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
type Props = {}

const MenuAdmin = (props: Props) => {
    return (
        <Menu style={{ height: "100%" }}>
            <Menu.Item icon={<DashboardOutlined />}>
                <Link to={"/admin"} />
                Dashboad
            </Menu.Item>
            <Menu.SubMenu title="Products">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Product list
                </Menu.Item>
                <Menu.Item icon={<PlusOutlined />}>
                    <Link to={"/admin/products/add"} />
                    Add
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Categories">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Category list
                </Menu.Item>
                <Menu.Item icon={<PlusOutlined />}>
                    <Link to={"/admin/products/add"} />
                    Add
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Users">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Account list
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item title="Home page">
                <Link to={"/"}>Home page</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuAdmin