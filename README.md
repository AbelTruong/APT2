# APT2

Dự án cá nhân

# Initial resource

Đây là một dự án tạo một site bán hàng, sản phẩm đăng bán là quần áo, phụ kiện các thứ

# Mục đích:

    - Áp dụng công nghệ để tạo ra một trang bán hàng đầy đủ chức năng nhất có thể
    - Chứ không phải là chạy đua, sử dụng công nghệ nào
    - Quan trọng là sản phẩm bạn tạo ra. OKE

# Hệ thống:

-   Bao gồm:
    -   Trang admin: quản lý thông tin của sản phẩm, thông tin khách hàng, hóa đơn, ...
    -   Trang Storefront: Hiển thị thông tin sản phẩm, đưa sản phẩm tiếp cận đến khách hàng. Thiên
        hướng về SEO nhiều hơn

# Công nghệ

-   Công nghệ tổng quan: Build dự án bằng html, css, scss, tailwindcss, reactjs, nodejs, remix,
    postgregql + requelize. - Trang Admin: Reactjs, Nodejs, Postgresql + Sequelize. Quản lý hình ảnh bằng cloundary. - Trang storefront: remix hết hợp react, react-router-dom. thiên hướng build SSR. Hỗ trợ SEO, ...

# Database

    - Products:
        + Một product có thể thuộc 1 hoặc nhiều collections
        + Một product có thể có 1 hoặc nhiều variant, tối đa 100 variants và 3 options
    - Collections: 1 Collection có thể có 1 hoặc nhiều products
    - Variant:
        + Mỗi variant chỉ thuộc về một product
        + Mỗi variant chỉ có thể có một image
    - Images:
        + Một image có thể thuộc về nhiều products

    - Customers:
    - Orders:
    - Blogs:
    - Navigation:
