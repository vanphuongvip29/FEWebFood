import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

import logo from "../image/logo.jpg";
import Image from "react-bootstrap/Image";
import Api, { endpoints } from "../Api";
import { useEffect, useState } from "react";

import "../css/header.css";
import "../js/header.js";

const Header = () => {
  // const [cate, setCate] = useState([])

  // useEffect( ()=>{
  //     const LoadCategory = async () =>{
  //         const res = await Api.get(endpoints["categorys"])
  //         console.info(res)
  //         setCate(res.data.results)
  //     }
  //     LoadCategory()
  // },[])

  return (
    <>
      <Navbar
        id="header"
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary-header"
      >
        <Image className="logo" src={logo} alt="logo" rounded />
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Trang chủ</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Giới Thiệu</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Sản Phẩm</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Tin Tức</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Cửa Hàng</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Tuyển Dụng</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Nhượng Quyền</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <Nav>
          <Nav.Link href="/login">Đăng nhập</Nav.Link>
          <Nav.Link href="/register">Đăng Ký</Nav.Link>
        </Nav> */}
      </Navbar>
    </>
  );
};
export default Header;
