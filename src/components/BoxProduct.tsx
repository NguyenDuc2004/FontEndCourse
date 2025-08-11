import { Button, Image, Skeleton } from "antd";
import imgProduct from "../assets/imgaes/OIP.webp";
import { EyeOutlined } from "@ant-design/icons";
const BoxProduct = () => {
  return (
    <>
      {false ? (
        <div className="w-full h-[400px] flex flex-col items-center shadow shadow-blue-500 p-4 hover:shadow hover:shadow-amber-500 rounded-2xl hover:scale-105 transition-all duration-200 group">
          <Image
            src={imgProduct}
            alt="Product"
            className="w-full h-[500px] object-cover mb-2 rounded-lg"
          />
          <h2 className="text-xl font-semibold">Tên sản phẩm</h2>
          <p className="text-gray-600">Mô tả ngắn về sản phẩm.</p>
          <p className="text-lg font-bold mt-2">Giá: 100.000đ</p>

          <Button
            className="w-[50px] mt-4 opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            type="default"
          >
            <EyeOutlined />
          </Button>
        </div>
      ) : (
        <div className="w-full h-[400px] flex flex-col items-center shadow shadow-blue-500 p-4 hover:shadow hover:shadow-amber-500 rounded-2xl hover:scale-105 transition-all duration-200 group">
          <Image
            src={imgProduct}
            alt="Product"
            className="w-full h-[200px] object-cover mb-2 rounded-lg"
          />
          <div className="flex justify-center w-[200px] mb-5">
            <Skeleton active paragraph={false} />
          </div>
          <div className="flex justify-center w-[200px] mb-5">
            <Skeleton active paragraph={false} />
          </div>
          <div className="flex justify-center w-[100px] mb-5">
            <Skeleton active paragraph={false} />
          </div>

           <div className="flex justify-center w-[50px] mb-2">
            <Skeleton active paragraph={false} />
          </div>
        </div>
      )}
    </>
  );
};

export default BoxProduct;
