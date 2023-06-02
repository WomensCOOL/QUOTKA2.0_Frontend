import {
    CommentIc,
    HeartIc,
    ShareIc,
    StarIc,
  } from "../../asset/icon/index";
  
  import styled from "styled-components";
  import tw from "twin.macro";
  
  import { Link } from "react-router-dom";
  
  export default function ReactItemComponent() {
 
  
    return (

              <ReactItem>
                <ReactIcon as={ShareIc} />
                <ReactIcon as={CommentIc} />
                <ReactIcon as={StarIc} />
                <ReactIcon as={HeartIc} />
              </ReactItem>
           
    );
  }
  
  
  const ReactItem = styled.span`
    ${tw`text-gray-400 ml-auto inline-flex items-center leading-none text-sm`}
  `;
  
  const ReactIcon = styled.div`
    ${tw`
      w-6
      h-6
      ml-3 cursor-pointer`}
    fill: #d3d3d3;
  `;
  