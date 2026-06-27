export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Truck/arrow icon */}
      <path d="M20 4L36 36H4L20 4Z" fill="white" />
      <path d="M20 13L29 31H11L20 13Z" fill="#0a0a0a" />
      {/* CARGO text */}
      <text
        x="48"
        y="22"
        fontFamily="monospace"
        fontSize="16"
        fontWeight="700"
        letterSpacing="1"
        fill="white"
      >
        CARGO
      </text>
      {/* LINE text */}
      <text
        x="48"
        y="34"
        fontFamily="monospace"
        fontSize="9"
        letterSpacing="3"
        fill="white"
        opacity="0.6"
      >
        LINE RU
      </text>
    </svg>
  );
};
