import React from 'react'

type Props = {}

const AppFooter = (props: Props) => {
  return (
    <footer>
      <div className="col-12 d-flex container  mt-5 mb-3">
        <div className="col-3 text-start d-flex flex-column p-3">
          <h6 className=' mb-2'>Tìm cửa hàng</h6>
          <span className=' mb-2'>Tìm cửa hàng gần nhất</span>
          <span className=' mb-2'>Mua hàng từ xa</span>
          <span className='text-danger mb-2 '>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</span>
          <span className=' mb-2'>Phương thức thanh toán</span>
          <div><img className='mx-2' src="https://res.cloudinary.com/vulong/image/upload/v1659661475/uploadimg/siqt2petd2f6h5smrl8r.png" alt="" /> <img className='mx-2' src="https://res.cloudinary.com/vulong/image/upload/v1659661477/uploadimg/rda26jozlm4oyehxjf6x.png" alt="" /><img className='mx-2' src="https://res.cloudinary.com/vulong/image/upload/v1659661474/uploadimg/h8owmcannuknrnztlyee.png" alt="" /></div>
        </div>
        <div className="col-3 text-start d-flex flex-column p-3">
          <span className=' mb-2'>Gọi mua hàng: 1800.2044  (8h00 - 22h00)</span>
          <span className=' mb-2'>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</span>
          <span className=' mb-2'>Gọi bảo hành: 1800.2063 (8h00 - 21h30)</span>
          <span className=' mb-2'></span>
          <p className=' mb-2 fs-6'>Đối tác dịch vụ bảo hành</p>
          <span className=' mb-2'>Điện Thoại - Máy tính</span>
          <p className=' mb-2 fs-6'>Trung tâm bảo hành uỷ quyền Apple</p>
          <img src="https://res.cloudinary.com/vulong/image/upload/v1659661943/uploadimg/gfufmzn9mzdympmhtpyv.png" alt="" className='w-50' />
        </div>
        <div className="col-3 text-start d-flex flex-column p-3">
          <span className=' mb-2'>Mua hàng và thanh toán Online</span>
          <span className=' mb-2'>Mua hàng trả góp Online</span>
          <span className=' mb-2'>Tra điểm Smember</span>
          <span className=' mb-2'>Tra thông tin bảo hành</span>
          <span className=' mb-2'>Tra cứu hoá đơn VAT điện tử</span>
          <span className=' mb-2'>Trung tâm bảo hành chính hãng</span>
          <span className=' mb-2'>Quy định về việc sao lưu dữ liệu</span>
          <span className=' mb-2 text-danger'>Dịch vụ bảo hành điện thoại</span>
        </div>
        <div className="col-3 text-start d-flex flex-column p-3">
          <span className=' mb-2'>Quy chế hoạt động</span>
          <span className=' mb-2'>Chính sách Bảo hành</span>
          <span className=' mb-2'>Chính sách Bảo hành</span>
          <span className=' mb-2'>Khách hàng doanh nghiệp (B2B)</span>
          <span className=' mb-2 text-danger'>Ưu đãi thanh toán</span>
          <span className=' mb-2'>Tuyển dụng</span>
        </div>
      </div>

      <div className="container">
        <span className='my-3 bg-light'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</span>

      </div>

    </footer>
  )
}

export default AppFooter