import { DashboardOutlined, ProfileOutlined, PlusOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
type Props = {}

const MenuAdmin = (props: Props) => {
    return (
        <Menu style={{ height: "100%" }}>
            <Menu.Item icon={<DashboardOutlined />}>
                <Link to={"/admin"} />
                Thống kê hoạt động
            </Menu.Item>
            <Menu.SubMenu title="Products">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Danh sách sản phẩm
                </Menu.Item>
                <Menu.Item icon={<PlusOutlined />}>
                    <Link to={"/admin/products/add"} />
                    Thêm sản phẩm
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Categories">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Danh sách danh mục
                </Menu.Item>
                <Menu.Item icon={<PlusOutlined />}>
                    <Link to={"/admin/products/add"} />
                    Thêm danh mục
                </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Users">
                <Menu.Item icon={<ProfileOutlined />}>
                    <Link to={"/admin/products"} />
                    Danh sách người dùng
                </Menu.Item>
            </Menu.SubMenu>

        </Menu>
    )
}

export default MenuAdmin