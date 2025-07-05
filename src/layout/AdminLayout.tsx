
import {
    BellOutlined,
    KeyOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, Layout, Menu, Spin } from 'antd';
import React, { useState } from 'react';
import '../styles/MainLayout.scss'; // Import your custom styles

const { Header, Sider, Content } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

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
            //  onClick: handleLogout,
        },
    ]
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
                    className="bg-[#222b40] shadow-lg"
                    width={250}
                    style={{ height: '100vh', overflow: 'hidden' }}
                >
                    <div
                        style={{
                            height: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div className='TB-title'>Admin</div>
                        <div className="menu-scroll-wrapper">
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                items={[
                                    {
                                        key: '1',
                                        icon: <UploadOutlined />,
                                        label: 'Tổng quan',
                                    },
                                    {
                                        key: '2',
                                        icon: <UserOutlined />,
                                        label: 'Quản lý người dùng',
                                    },
                                    {
                                        key: '3',
                                        icon: <VideoCameraOutlined />,
                                        label: 'Quản lý khóa học',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </Sider>

                <Layout className="flex-1">
                    <Header
                        className="header-container"
                        style={{
                            padding: '0 16px',
                            background: '#fff',
                            borderBottom: '1px solid #f0f0f0',
                            height: '64px',
                            lineHeight: '64px',
                            position: 'sticky',
                            top: 0,
                            zIndex: 1000,
                        }}>
                        <div className="flex items-center justify-between w-full">
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })}
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
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Spin>
    );
}
export default MainLayout



