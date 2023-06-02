import {
    ExamIc
  } from "../../asset/icon/index";
  
  import React, { useEffect,useState, useRef } from 'react';
  import styled from "styled-components";
  import tw from "twin.macro";
  
  import { Link } from "react-router-dom";
  
  export default function ProfileImg() {
  /*   const componentRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    function handleScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    useEffect(() => {
      const element = componentRef.current;
      const rect = element?.getBoundingClientRect();
      console.log( rect?.y);
      console.log(element);
     
    }, [Element, scrollPosition]);
     */
  
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [initialOffset, setInitialOffset] = useState<number>(0);
  
    function handleScroll() {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    }
  
    useEffect(() => {
      const wrapperElement = wrapperRef.current;
      const wrapperRect = wrapperElement?.getBoundingClientRect();
      if (wrapperRect && wrapperElement) {
        if (initialOffset === 0) {
          setInitialOffset(wrapperRect.top);
        }
        const yOffset = scrollPosition - initialOffset;
        wrapperElement.style.transform = `translateY(${scrollPosition}px)`;
       
      }
    }, [scrollPosition, initialOffset, Element]);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  
    return (
     
        <div ref={wrapperRef} style={{ position: 'relative', transition: 'transform 0.3s' }}>
          <UserWrapper>
            <ExamIc />
          </UserWrapper>
          </div>
        
    );
  }
  
  const UserWrapper = styled.div`
    ${tw`flex h-12 w-16 items-center justify-center rounded-sm bg-indigo-500 md:h-14 md:w-20 md:rounded-sm`}
  `;
  