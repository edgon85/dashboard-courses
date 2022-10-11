import { IconType } from '../../interfaces';

export const Monitor = ({ size, color }: IconType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6669 2.5H3.33354C2.41306 2.5 1.66687 3.24619 1.66687 4.16667V12.5C1.66687 13.4205 2.41306 14.1667 3.33354 14.1667H16.6669C17.5873 14.1667 18.3335 13.4205 18.3335 12.5V4.16667C18.3335 3.24619 17.5873 2.5 16.6669 2.5Z"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66687 17.5H13.3335"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.1667V17.5001"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
