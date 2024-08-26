const DownArrowLogo = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 14 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_2)">
      <path
        d="M1.5799 0.326446L0.399902 1.51311L6.9999 8.10645L13.5999 1.50645L12.4199 0.326446L6.9999 5.74645L1.5799 0.326446Z"
        fill={props?.fill ? props?.fill : "#454F5B"}
      />
    </g>
    <defs>
      <clipPath id="clip0_2_2">
        <rect width={14} height={9} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default DownArrowLogo;
