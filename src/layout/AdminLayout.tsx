
import {
    BarChartOutlined,
    BellOutlined,
    KeyOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    QqOutlined,
    ShoppingCartOutlined,
    TeamOutlined,

    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import '../styles/AdminLayout.scss'; // Import your custom styles
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { menu, p, path } from 'framer-motion/client';
// import { useLoading } from '../contexts/LoadingContext';

const { Header, Sider, Content } = Layout;

type BreadcrumbItem = {
    label: string;
    path: string;
};

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
    const navigate = useNavigate();
    console.log(items);

    return (
        <nav className="pl-[8px] h-8 flex items-center" aria-label="breadcrumb-container">
            <ol className="breadcrumb flex items-center">
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            navigate(item.path)
                        }}
                        className="breadcrumb-item text-blue-600 text-[13px] cursor-pointer hover:underline"
                    >
                        {item.label}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

const MainLayout = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()
    const [breadcrumbPath, setBreadcrumbPath] = useState<BreadcrumbItem[]>([]);

    const handleLogout = () => {
        console.log('User logged out');
        navigate('/login');
    }

    useEffect(() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const breadcrumbItems: BreadcrumbItem[] = pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const label = segment.charAt(0).toUpperCase() + segment.slice(1) + " >> "
            return {
                label,
                path
            };
        });
        setBreadcrumbPath(breadcrumbItems);
    }, [location.pathname]);

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
            key: 'store',
            icon: <ShoppingCartOutlined />,
            label: 'Cửa hàng',
            onClick: () => navigate("/"),
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

    const sideBarMenuItems = [
        {
            key: '1',
            icon: <BarChartOutlined />,
            label: 'Tổng quan',
            path: '',
            onClick: () => navigate(''),
        },
        {
            key: '2',
            icon: <UserOutlined />,
            label: 'Quản lý người dùng',
            path: '/admin/users',
            onClick: () => navigate('users'),
        },
        {
            key: '3',
            icon: <QqOutlined />,
            path: '/admin/students',
            onClick: () => navigate('students'),
            label: 'Quản lý học viên'
        },
        {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: 'Quản lý khóa học',
            path: '/admin/courses',
            onClick: () => navigate('courses'),
        },
        {
            key: '5',
            icon: <TeamOutlined />,
            path: '/admin/roles',
            onClick: () => navigate('roles'),
            label: 'Quản lý quyền',
        },
        {
            key: '6',
            icon: <ShoppingCartOutlined />,
            path: '/admin/orders',
            onClick: () => navigate('orders'),
            label: 'Quản lý đơn hàng',
        }

    ]

    const breadcrumbItems = breadcrumbPath.map((item) => ({
        label: item.label,
        path: item.path,
        // isNavigate: !item.children?.length && !item.parent,
    }))


    return (
        <Spin
            spinning={false}
            tip="Đang tải dữ liệu..."
            delay={500}
            className="spin-system"
            size="large"
            style={{
                verticalAlign: 'text-top',
                zIndex: 99999,
            }}
        >
            <Layout className="min-h-screen has-sider">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    collapsedWidth={50}
                    className="bg-[#efcfbe] text-white"
                    width={250}
                    style={{ height: '100vh', overflow: 'hidden', backgroundColor: 'white' }}
                >
                    <div
                        style={{
                            height: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div className='TB-title'>DH Admin</div>
                        <div className="menu-scroll-wrapper">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{
                                    fontWeight: 'bold',
                                    paddingTop: '5px',
                                    fontSize: '13px',
                                }}
                                items={sideBarMenuItems}
                            />
                        </div>
                    </div>
                </Sider>

                <Layout className="flex-1">
                    <Header
                        className="header-container"
                        style={{
                            padding: '0 16px',
                            background: 'pink',
                            borderBottom: '1px solid #f0f0f0',
                            height: '64px',
                            lineHeight: '64px',
                            position: 'sticky',
                            top: 0,
                            zIndex: 1000,
                        }}>
                        <div className="flex items-center justify-between w-full">
                            <div className='flex items-center gap-2'>
                                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: () => setCollapsed(!collapsed),
                                })}
                                <Breadcrumb items={breadcrumbItems} />
                            </div>


                            <div className="flex items-center gap-2  ">
                                <Button
                                    type="text"
                                    icon={<BellOutlined />}
                                    className="w-9 h-9 text-[#485ec4] hover:bg-gray-100 focus:bg-gray-100 rounded-md transition-all duration-200 p-0"
                                    style={{ border: 'none', boxShadow: 'none' }}
                                />
                                <Dropdown
                                    menu={{ items: userMenuItems, className: 'text-[13px]' }}
                                    placement="bottomRight"
                                    trigger={['click']}
                                >
                                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2 py-1 transition-all duration-200">
                                        <Avatar size={34} icon={<UserOutlined />} className="bg-blue-500 shadow-md" />
                                        <div className="infor-container">
                                            <div className="user-info flex flex-col leading-none">
                                                <div className="user-name m-0 p-0">
                                                    <span className="text-[15px] font-semibold text-gray-800">Nguyễn Văn A</span>
                                                </div>
                                                <div className="user-role text-gray-500 mt-[5px] p-0">
                                                    <span className="text-[13px]">Quản trị viên</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Spin>
    );
}
export default MainLayout



