import { motion } from "framer-motion";
import robot from "../assets/imgaes/undraw_firmware_3fxd.svg"; // Đảm bảo đường dẫn đúng tới ảnh robot
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function NotFoundPage() {
    const localtion = useLocation();
    useEffect(() => {
        document.title = "404 Not Found";
        console.log(`NOT FOUND: ${localtion.pathname}`);
    }, [localtion.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <motion.img
                    src={robot}
                    alt="Floating Robot"
                    className="w-100 h-100"
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
                <motion.h1
                    className="text-6xl font-bold mb-4"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    404
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-600 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Oops! Page not found
                </motion.p>

                <motion.a
                    href="/"
                    className="text-blue-500 hover:text-blue-700 underline inline-block"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Trở lại trang chủ
                </motion.a>
            </div>
        </div>
    );
}
