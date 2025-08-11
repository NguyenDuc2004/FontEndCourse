
import BoxProduct from './BoxProduct'

const SanPhamNoiBat = () => {
  return (
    <div className='mb-8 mx-4'>
    <h1 className='font-bold text-[40px]'>Sản phẩm nổi bật</h1>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  bg-gray-200 rounded-lg shadow-md">
        {[...Array(8)].map((_, index) => (
          <li key={index} className=" p-4  mb-2">
            <BoxProduct/>
          </li>
        ))}
      </ul>
    </div>
      
  )
}

export default SanPhamNoiBat
