
import { Avatar, Breadcrumb, Button, Dropdown, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import '../styles/ClientLayout.scss';
import '../styles/MainLayout.scss'; // Import your custom styles
const { Header, Content, Footer } = Layout;
import {
    KeyOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';

const ClientLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('User logged out');
        navigate('/login');
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const itemsNav = [
        { key: '1', label: 'Trang chủ', path: '', onClick: () => navigate('/') },
        { key: '2', label: 'Bài viết', path: 'posts', onClick: () => navigate('posts')},
        { key: '3', label: 'Khóa học', path: 'courses' },
        { key: '4', label: 'Thông tin', path: 'info' },
        { key: '5', label: 'Dịch vụ', path: 'services' },
    ]

    const userMenuItems = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Trang cá nhân',
        },
        {
            key: 'settings',
            icon: <KeyOutlined />,
            label: 'Đổi mật khẩu',
            //   onClick: () => setOpenChangePassWord(true),
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Đăng xuất',
            onClick: handleLogout,
        },
    ]



    return (
        <Layout>
            <Header className="sticky top-0 z-50" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="demo-logo" onClick={() =>navigate("/")} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={itemsNav}
                    style={{ flex: 1, minWidth: 0, justifyContent: 'center' }}
                />
                <div className='flex items-center gap-4'>
                    {
                        true ? (
                            <div className="flex items-center gap-2 cursor-pointe rounded-md px-2 py-1 transition-all duration-200 ">
                                <Avatar size={34} icon={<UserOutlined />} className="bg-blue-500 shadow-md " />
                                <div className="infor-container ">
                                    <div className="user-info flex flex-col leading-none">
                                        <div className="user-name m-0 p-0">
                                            <Button className="text-[15px] font-semibold text-white ">Đăng nhập</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>) :
                            <Dropdown
                                menu={{ items: userMenuItems, className: 'text-[13px]' }}
                                placement="bottomRight"
                                trigger={['hover']}
                            >
                                <div className="flex items-center gap-2 cursor-pointer group hover:bg-gray-100 text-black rounded-md px-2 py-1 transition-all duration-200">
                                    <Avatar size={34} icon={<UserOutlined />} className="bg-blue-500 shadow-md" />
                                    <div className="infor-container">
                                        <div className="user-info flex flex-col leading-none">
                                            <div className="user-name m-0 p-0">
                                                <span className="text-[15px] font-semibold text-white group-hover:text-black">Đức </span>
                                            </div>
                                            <div className="user-role text-gray-500 mt-[5px] p-0">
                                                <span className="text-[13px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown>
                    }
                    <div>
                        <Button
                            type="primary"
                            className="w-30 h-9 text-[#485ec4] hover:bg-gray-100 focus:bg-gray-100 rounded-md transition-all duration-200 p-0"
                            style={{ border: 'none', boxShadow: 'none' }}
                        >Liên hệ</Button>
                    </div>
                </div>
            </Header>
            <Content >
                <Breadcrumb
                    style={{margin: '0 16px'}}
                    items={[{ title: 'Trang chủ',path: '',onClick:()=>navigate('/') }]}
                />
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by MINH DUC
            </Footer>
        </Layout>
    )
}

export default ClientLayout
