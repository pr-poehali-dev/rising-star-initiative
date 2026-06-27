export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Wrench icon */}
      <circle cx="20" cy="20" r="16" fill="white" opacity="0.12" />
      <path
        d="M26 10a8 8 0 0 0-8 8c0 1.1.22 2.14.62 3.08L10 29.5 12.5 32l8.42-8.62A8 8 0 1 0 26 10zm0 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
        fill="white"
      />
      {/* ИНОМАРКИН */}
      <text
        x="46"
        y="24"
        fontFamily="monospace"
        fontSize="15"
        fontWeight="700"
        letterSpacing="1.5"
        fill="white"
      >
        ИНОМАРКИН
      </text>
      {/* подпись */}
      <text
        x="47"
        y="35"
        fontFamily="monospace"
        fontSize="7.5"
        letterSpacing="2.5"
        fill="white"
        opacity="0.5"
      >
        АВТОСЕРВИС · КРАСНОЯРСК
      </text>
    </svg>
  );
};
