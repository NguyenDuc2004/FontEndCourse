
import { motion } from "framer-motion";
import robot from "../../assets/imgaes/undraw_firmware_3fxd.svg"; // Đảm bảo đường dẫn đúng tới ảnh robot
import vdBanner from "../../assets/videos/Untitled ‑ Made with FlexClip.mp4";
import SanPhamNoiBat from "../../components/SanPhamNoiBat";
const Home = () => {
  return (
    <>
      <div className="banner-container relative  h-[400px] bg-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={vdBanner}
          className="inset-0 w-full  h-[400px]  object-cover"
        />
        <div className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div className="flex flex-col items-center justify-center">
            <h1 className="banner-title text-[40px] font-bold">
              Chào mừng bạn đến với DH Courses
            </h1>
            <p className="banner-description text-[15px]">
              Nơi mang đến sức khỏe của bạn
            </p>
            <button className="h-[50px] mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-950 hover:translate-y-1.5 transition-all duration-300">
              Các khóa học
            </button>
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
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <SanPhamNoiBat />
      <SanPhamNoiBat />
    </>
  );
};

export default Home;
