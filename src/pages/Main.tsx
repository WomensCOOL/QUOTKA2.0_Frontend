import Trending from "../components/Main/Trending";
import Quote from "../components/Quote/Quote";
import Write from "./Write";
import { useRecoilState } from "recoil";
import { showPopup } from "../recoil/showPopup";

export default function Main() {
  const [show, setShow] = useRecoilState(showPopup);
  function hideShow() {
    setShow(!show);
  }
  return (
    <div onClick={hideShow}>
      <Trending />
      <Quote />
      {show && <Write />}
    </div>
  );
}
