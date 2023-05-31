import { LogoIc, HomeIc, UserIc, PencilIc } from "../../asset/icon/index";
import styled from "styled-components";
import tw from "twin.macro";
import { Link, useMatch } from "react-router-dom";

export default function Header() {
  const homeMatch = useMatch("/");
  const userMatch = useMatch("/user");

  return (
    <div className="flex justify-center ">
      <nav className="self-center top-0 w-full ">
        <div className="flex justify-between items-center text-white">
          <ul className=" md:flex items-center text-[18px] font-semibold pr-10 space-x-1">
            <li className="hover:bg-[#212121] py-3 rounded-sm px-5">
              <a href="#">요즘 뜨는</a>
            </li>
            <li className="hover:bg-[#212121] py-3 rounded-sm px-5">
              <a href="#">인용구</a>
            </li>
            <li className="hover:bg-[#212121] py-3 rounded-sm px-5">
              <a href="#">텍스트</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
