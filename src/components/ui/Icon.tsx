import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const Icon = {
  logo: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),

  check: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),

  arrowLeft: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  arrowRight: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),

  mail: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33317 3.3335H16.6665C17.5832 3.3335 18.3332 4.0835 18.3332 5.00016V15.0002C18.3332 15.9168 17.5832 16.6668 16.6665 16.6668H3.33317C2.4165 16.6668 1.6665 15.9168 1.6665 15.0002V5.00016C1.6665 4.0835 2.4165 3.3335 3.33317 3.3335Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3332 5L9.99984 10.8333L1.6665 5"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  phone: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  alert: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  ),

  lock: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  password: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 9.1665H4.16667C3.24619 9.1665 2.5 9.9127 2.5 10.8332V16.6665C2.5 17.587 3.24619 18.3332 4.16667 18.3332H15.8333C16.7538 18.3332 17.5 17.587 17.5 16.6665V10.8332C17.5 9.9127 16.7538 9.1665 15.8333 9.1665Z"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.8335 9.1665V5.83317C5.8335 4.7281 6.27248 3.66829 7.05388 2.88689C7.83529 2.10549 8.89509 1.6665 10.0002 1.6665C11.1052 1.6665 12.165 2.10549 12.9464 2.88689C13.7278 3.66829 14.1668 4.7281 14.1668 5.83317V9.1665"
        stroke="#9CA3AF"
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),

  eye: (props: IconProps) => (
    <svg
      {...base}
      {...props}
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_4899)">
        <path
          d="M0.666504 8.99984C0.666504 8.99984 3.33317 3.6665 7.99984 3.6665C12.6665 3.6665 15.3332 8.99984 15.3332 8.99984C15.3332 8.99984 12.6665 14.3332 7.99984 14.3332C3.33317 14.3332 0.666504 8.99984 0.666504 8.99984Z"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 11C9.10457 11 10 10.1046 10 9C10 7.89543 9.10457 7 8 7C6.89543 7 6 7.89543 6 9C6 10.1046 6.89543 11 8 11Z"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4899">
          <rect width="16" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  showEye: (props: IconProps) => (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1_4902)">
        <path
          d="M11.9598 12.9599C10.8202 13.8285 9.43258 14.3098 7.99984 14.3332C3.33317 14.3332 0.666504 8.99985 0.666504 8.99985C1.49576 7.45445 2.64593 6.10426 4.03984 5.03985M6.59984 3.82652C7.05873 3.71911 7.52855 3.66541 7.99984 3.66652C12.6665 3.66652 15.3332 8.99985 15.3332 8.99985C14.9285 9.75693 14.4459 10.4697 13.8932 11.1265M9.41317 10.4132C9.23007 10.6097 9.00927 10.7673 8.76394 10.8766C8.51861 10.9859 8.25377 11.0447 7.98523 11.0494C7.71669 11.0542 7.44995 11.0048 7.20091 10.9042C6.95188 10.8036 6.72565 10.6539 6.53573 10.464C6.34582 10.274 6.1961 10.0478 6.09551 9.79878C5.99492 9.54975 5.94552 9.283 5.95026 9.01446C5.955 8.74592 6.01378 8.48108 6.12309 8.23575C6.2324 7.99042 6.39001 7.76962 6.5865 7.58652"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.666504 1.6665L15.3332 16.3332"
          stroke="#6B7280"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4902">
          <rect width="16" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  chevronDown: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),

  google: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  ),

  apple: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_3_128)">
        <path
          d="M14.2084 10.0333C14.1834 7.425 16.3334 6.175 16.4334 6.10833C15.2168 4.33333 13.3251 4.09167 12.6584 4.06667C11.0501 3.9 9.52508 5.00833 8.70842 5.00833C7.89175 5.00833 6.63342 4.09167 5.30008 4.11667C3.55008 4.14167 1.93342 5.13333 1.02508 6.7C-0.799916 9.85833 0.558417 14.5333 2.33342 17.1C3.20008 18.35 4.23342 19.7667 5.58342 19.7167C6.89175 19.6583 7.38342 18.875 8.96675 18.875C10.5501 18.875 10.9918 19.7167 12.3751 19.6917C13.7834 19.6667 14.6751 18.4083 15.5334 17.15C16.5251 15.6917 16.9334 14.2833 16.9584 14.2083C16.9251 14.1917 14.2251 13.1583 14.2001 10.05L14.2084 10.0333ZM11.6584 2.91667C12.3751 2.04167 12.8668 0.833333 12.7334 -0.375C11.7001 -0.333333 10.4418 0.316667 9.69175 1.18333C9.02508 1.95 8.44175 3.18333 8.59175 4.375C9.75008 4.46667 10.9334 3.78333 11.6584 2.90833V2.91667Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_128">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),

  star: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  ),

  users: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),

  book: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),

  trending: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m23 6-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  ),

  layers: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m12 2 10 5-10 5L2 7l10-5z" />
      <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),

  chat: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),

  award: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
    </svg>
  ),

  briefcase: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),

  rocket: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),

  location: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),

  send: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),

  user: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),

  settings: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),

  logout: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5M21 12H9" />
    </svg>
  ),

  search: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),

  calendar: (props: IconProps) => (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),

  clock: (props: IconProps) => (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),

  chevronLeft: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),

  chevronRight: (props: IconProps) => (
    <svg {...base} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

export default Icon;
