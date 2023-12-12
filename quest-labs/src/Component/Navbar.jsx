import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Container } from "@chakra-ui/react";
export default function Navbar() {
  const link = [
    {
      to: "/",
      title: [
        <RiHomeSmile2Fill
          style={{ margin: "auto", width: "30px", height: "30px" }}
        />,
        "Home",
      ],
    },
    {
      to: "/messages",
      title: [
        <BiMessageDetail
          style={{ margin: "auto", width: "30px", height: "30px" }}
        />,
        "Message",
      ],
    },
    {
      to: "/help",
      title: [
        <BiHelpCircle
          style={{ margin: "auto", width: "30px", height: "30px" }}
        />,
        "Help",
      ],
    },
    {
      to: "/news",
      title: [
        <HiOutlineSpeakerphone
          style={{ margin: "auto", width: "30px", height: "30px" }}
        />,
       " News",
      ],
    },
  ];
  return (
    <Container
      className="navbar"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"30px"}
      textAlign={"center"}
    >
      {link.map((ele) => (
        <NavLink
          to={ele.to}
          key={ele.to}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "blue" : "black",
              color: isActive ? "blue" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          {ele.title}
        </NavLink>
      ))}
    </Container>
  );
}