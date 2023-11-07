import React from "react";
// import { FaSearch, FaRegAddressBook } from "react-icons/fa";
import "./Content.css";

const Content = () => {
  return (
    <div className="container-content">
      <div className="content-img">
        <img src="https://mowgarden.com/wp-content/uploads/2022/08/vuon-cay-trong-nha-mowgarden.jpg" />
      </div>

      <div className="content-card1">
        <div className="content-text">
          <h3>Lý do chọn TREE 247 ?</h3>
        </div>
        <div className="content-card">
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2022/01/soil.png" />
            <p>TUYỂN CHỌN</p>
            <span>Mọi cây xanh đều phải được chọn lọc kỹ lưỡng</span>
          </div>
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2021/04/018-watering.png" />

            <p>ĐA DẠNG</p>
            <span>Dễ dàng tìm được sản phẩm mà bạn mong muốn</span>
          </div>
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardening-1.png" />

            <p>ĐỒNG HÀNH</p>
            <span>Luôn đồng hành và giúp đỡ bạn về mặt kỹ thuật</span>
          </div>
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardener.png" />

            <p>ĐÚNG CHUẨN</p>
            <span>Sử dụng hình ảnh chụp thực tế giúp dễ hình dung</span>
          </div>
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2022/01/gardening-2.png" />

            <p>TIN CẬY</p>
            <span>Gửi ảnh thực tế và cụ thể trước khi giao hàng</span>
          </div>
          <div className="card-element">
            <img src="https://mowgarden.com/wp-content/uploads/2021/04/006-turf.png" />
            <p>CẠNH TRANH</p>

            <span>Tối ưu hóa ngân sách nhờ mức giá cực kì cạnh tranh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

{
  /* <nav className="navbar navbar-dark bg-dark ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Offcanvas dark navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav> */
}
