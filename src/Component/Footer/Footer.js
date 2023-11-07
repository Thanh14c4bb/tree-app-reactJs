import "./Footer.css";


function Footer({category}) {
  return (
    // <li className="dropdown">
    //   <button
    //     className="btn btn-secondary dropdown-toggle"
    //     type="button"
    //     id="dropdownMenuButton"
    //     data-toggle="dropdown"
    //     aria-haspopup="true"
    //     aria-expanded="false"
    //   >
    //     Sản phẩm thuộc danh mục
    //   </button>

    //   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     {category.map((categories) => (
    //       <li key={categories.id} className="dropdown-item">
    //         <div
    //           // onClick={() => onCheckCategoryById(categories.id)}
    //           className="card-textt"
    //         >
    //           <p>{categories.name}</p>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </li>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
  {category.map((categories) => (
          <li key={categories.id} className="dropdown-item">
            <div
              // onClick={() => onCheckCategoryById(categories.id)}
              className="card-textt"
            >
              <p>{categories.name}</p>
            </div>
          </li>
        ))}
  </ul>
</div>
  );
}

export default Footer;
