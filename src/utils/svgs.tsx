interface ISvg {
  icon: "chevron-down";
  size?: number;
}

export default function Svg({ icon, size = 12 }: ISvg) {
  switch (icon) {
    case "chevron-down":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 -0.5 17 17"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="si-glyph si-glyph-triangle-down"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path
              d="M10.106,12.69 C9.525,13.27 8.584,13.27 8.002,12.69 L1.561,6.246 C0.979,5.665 0.722,4.143 2.561,4.143 L15.549,4.143 C17.45,4.143 17.131,5.664 16.549,6.246 L10.106,12.69 L10.106,12.69 Z"
              fill="#00FF96"
              className="si-glyph-fill"
            ></path>
          </g>
        </svg>
      );
    default:
      return <></>;
  }
}
