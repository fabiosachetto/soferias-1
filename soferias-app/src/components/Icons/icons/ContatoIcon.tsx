export const ContatoIcon = ({ color = "currentColor", className = "float-left mr-2" }) => {
  return (
    <svg className={className} baseProfile="tiny" height="24px" version="1.2" viewBox="0 0 24 24" width="24px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Layer_1">
        <g>
          <path fill={color} d="M19,3H8C6.346,3,5,4.346,5,6v1H4C3.447,7,3,7.448,3,8s0.447,1,1,1h1v2H4c-0.553,0-1,0.448-1,1s0.447,1,1,1h1v2H4    c-0.553,0-1,0.448-1,1s0.447,1,1,1h1v1c0,1.654,1.346,3,3,3h11c1.654,0,3-1.346,3-3V6C22,4.346,20.654,3,19,3z M7,6    c0-0.551,0.449-1,1-1v2H7V6z M7,9h1v2H7V9z M7,13h1v2H7V13z M7,18v-1h1v2C7.449,19,7,18.551,7,18z M20,18c0,0.551-0.449,1-1,1H9V5    h10c0.551,0,1,0.449,1,1V18z" />
          <circle fill={color} cx="14" cy="10.5" r="2" />
          <path fill={color} d="M14,13.356c-1.562,0-2.5,0.715-2.5,1.429c0,0.357,0.938,0.715,2.5,0.715c1.466,0,2.5-0.357,2.5-0.715    C16.5,14.071,15.52,13.356,14,13.356z" />
        </g>
      </g>
    </svg>
  );
};
