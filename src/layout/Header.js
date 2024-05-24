import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

import logo from "../image/logo.jpg";
import Image from "react-bootstrap/Image";
import Api, { endpoints } from "../Api";
import { useEffect, useState } from "react";

import "../css/header.css";

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
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Image className="logo" src={logo} alt="logo" rounded />
        <Container>
          <Navbar.Brand href="/">BIG FOOD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
                        {cate.map((c)=>(<Nav.Link key={c.id} href="#features">{c.name}</Nav.Link>))}                 
                    </Nav> */}
            <Nav className="me-auto">
              <Nav.Link href="#features">Trang chủ</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Giới Thiệu</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Sản Phẩm</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Khuyến Mãi</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Tin Tức</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <Nav.Link href="#features">Liên Hệ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav>
          <Nav.Link href="#deets">Đăng nhập</Nav.Link>
          <Nav.Link href="#deets">Đăng Ký</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
export default Header;
