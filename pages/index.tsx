import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Visual from "../components/main/Visual";
import Introduce from "../components/main/Introduce";
import Process from "../components/main/Process";
import Review from "../components/main/Review";
import Contact from "../components/main/Contact";
import { useEffect , useRef } from "react";

const Home: NextPage = () => {
  const bodyRef = useRef<any>();
  const pageAnimate = (page:any) => {
    // introduce
    if (page >= 1) {
      const item1 = document.querySelector(".actionItem1");
      const item2 = document.querySelector(".actionItem2");
      const item3 = document.querySelector(".actionItem3");
      const item4 = document.querySelector(".actionItem4");
      const item5 = document.querySelector(".actionItem5");

      setTimeout(() => {
        item1?.classList.add("contentItem");
        item2?.classList.add("contentItem");
        item3?.classList.add("contentItem");
        item4?.classList.add("contentItem");
        item5?.classList.add("contentItem");
      }, 300);
    }
    // process title
    if (page >= 2) {
      const item = document.querySelector("#process .title");
      setTimeout(() => {
        item?.classList.add("showTitle");
      }, 300);
    }

    // process one
    if (page >= 3) {
      const text:any = document.querySelector("#process .item1 .text");
      const img:any = document.querySelector("#process .item1 .img");
      setTimeout(() => {
        text.classList.add("showTitle");
        img.classList.add("showTitle");
      }, 300);
    }

    if (page >= 4) {
      const text:any = document.querySelector("#process .item2 .text");
      const img: any = document.querySelector("#process .item2 .img");
      setTimeout(() => {
        text.classList.add("showTitle");
        img.classList.add("showTitle");
      }, 300);
    }

    if (page >= 5) {
      const text:any = document.querySelector("#process .item3 .text");
      const img: any = document.querySelector("#process .item3 .img");
      setTimeout(() => {
        text.classList.add("showTitle");
        img.classList.add("showTitle");
      }, 300);
    }
  };

  const fullPage = () => {
    if (typeof window !== "object") return;
    const scrollItem: any =
      document.getElementsByClassName("pageItem");
    let globalVal: boolean = false;
    const scrollVal: Array<number> = [];
    let pageNum = 0;
    const footerVal: number =
      document.getElementsByTagName("footer")[0].offsetTop;
    for (let i = 0; i < scrollItem.length; i++) {
      const item: HTMLElement = scrollItem[i];
      const classCheck: boolean =
        item.classList.contains("item") || item.classList.contains("title");
      const pageScrollVal: number = classCheck
        ? item.offsetTop - item.offsetHeight + 100
        : item.offsetTop;
      scrollVal.push(pageScrollVal);
      if (scrollItem.length - 1 === i) scrollVal.push(footerVal);
    }
    bodyRef.current.addEventListener(
      "wheel",
      function (e:any) {
        const delta = e.deltaY;
        e.preventDefault();
        if (globalVal) return;
        globalVal = true;
        pageNum = delta > 0 ? (pageNum += 1) : (pageNum -= 1);
        if (pageNum < 0) pageNum = 0;
        if (pageNum >= scrollVal.length) pageNum = scrollVal.length - 1;
        setTimeout(() => {
          globalVal = false;
        }, 400);
        window.scrollTo({ top: scrollVal[pageNum], behavior: "smooth" });
        pageAnimate(pageNum);
      },
      { passive: false }
    );
  };

  useEffect(() => {
    fullPage();
  }, []);

  return (
    <div ref={bodyRef}>
      <Visual />
      <Introduce />
      <Process />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
