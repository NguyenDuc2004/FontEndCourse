import React from 'react'
import { motion } from "framer-motion";
import robot from "../../assets/imgaes/undraw_firmware_3fxd.svg"; // Đảm bảo đường dẫn đúng tới ảnh robot
const Home = () => {
    return (
        <>
            <div className="banner-container relative h-[400px] bg-blue-300 bg-center">
                {/* <img src={logo} alt="courseLogo" className='w-full h-120 object-cover relative' />  <img src={logo} alt="courseLogo" className='w-full h-120 object-cover relative' /> */}
                <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className="banner-title text-[40px] font-bold">Chào mừng bạn đến với DH Courses</h1>
                        <p className="banner-description text-[15px]">Nơi mang đến sức khỏe của bạn</p>
                    </div>
                    <motion.img
                        src={robot}
                        alt="Floating Robot"
                        className="w-80 h-100"
                        animate={{
                            y: [0, -30, 0], // bay lên, rồi xuống
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
