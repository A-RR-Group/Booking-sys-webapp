import ResizeIcon from "../../assets/Icons/resize.png";
import "../../assets/css/other/UpScaleScreen.css"

export default function Upscale() {
  return (
    <>
    <div className="UpScaleScreenContainer">
        <img src={ResizeIcon} alt="" />
        <div>Browser size it too small, upscale browser too keep using this page while logged in.</div>
    </div>
    </>
  )
}