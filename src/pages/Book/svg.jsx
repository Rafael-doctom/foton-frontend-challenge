import React from "react";

export default function Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="375"
      height="282"
      fill="none"
      viewBox="0 0 375 282"
    >
      <path
        fill="#FFF6E5"
        d="M-1 0h376v182c0 55.228-44.772 100-100 100H-1V0z"
      ></path>
      <mask
        id="mask0"
        style={{ maskType: "alpha" }}
        width="376"
        height="282"
        x="-1"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M-1 0h376v282H-1V0z"></path>
      </mask>
      <g mask="url(#mask0)">
        <circle
          cx="254"
          cy="250"
          r="24"
          fill="url(#pattern0)"
          transform="rotate(25 254 250)"
        ></circle>
        <circle cx="104.5" cy="146.5" r="31.5" fill="#00173D"></circle>
        <circle cx="53.5" cy="132.5" r="7.5" fill="#FF6978"></circle>
        <circle
          cx="260"
          cy="98"
          r="12"
          stroke="#4550A7"
          strokeWidth="2"
        ></circle>
        <circle
          cx="364"
          cy="32"
          r="50"
          fill="url(#pattern1)"
          transform="rotate(25 364 32)"
        ></circle>
      </g>
      <defs>
        <pattern
          id="pattern0"
          width="0.846"
          height="0.149"
          patternContentUnits="objectBoundingBox"
        >
          <use href="#image0" transform="scale(.02488)"></use>
        </pattern>
        <pattern
          id="pattern1"
          width="0.406"
          height="0.072"
          patternContentUnits="objectBoundingBox"
        >
          <use href="#image0" transform="scale(.01194)"></use>
        </pattern>
        <image
          id="image0"
          width="34"
          height="6"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAGCAYAAACmekziAAAABGdBTUEAALGOfPtRkwAAAY5JREFUKBW9Uj1IQlEUPuf6pCQofI9+CLMhaynInwyKfrYgGgxRCyEICpyaImh0aomaJKjFagjhUVRDRJNNDv61tLokgRROiZV6T/cFwitsKjpwOYfvnPN9H/deA/xjdM4stTS19W81dw+VN0OBfDwep7o81gt9DofDTByux35bK3afh4BHAPGMgKYByIKElwjswmTCmy9G2p1+G6fqOgHaEPGItbLzp7j68pMJ2+xaU7Hw6AGiVTFTIYQ7JMhKzJgtpGI5wUFml98KvBZBogGGUug5q95qfBrOeHVeaGn77k8jst03LtxuANIkAu4hwwyv8RVEmALAK4Z40ovKdTp9UNFIlBH/KK/VloFgQcxkBLSPxCqCw05IDrHjEMJmIZISvWHGcLerj23fq+q7tv89rBNBM8oOb4IIOhjAjslkiOYTark+aBnzy6VXHgDgQSAcFKJR0ZsTDysJc4dkMB4Xk7GH+rw+a+Sl0ptLkiBXSJ7m9L2GteL0ebU/0bCpA2X3Yo/s9Ia129PBf1Z+AO3ViTcdfWOLAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}
