import icons from "../../utils/icons"
import React from "react"
import "../../assets/css/other/UpScaleScreen.css"

export default function Upscale() {
  return (
    <>
    <div className="UpScaleScreenContainer">
        <img src={icons.ResizeIcon} alt="" />
        <div>Browser size it too small, upscale browser too keep using this page while logged in.</div>
    </div>
    </>
  )
}