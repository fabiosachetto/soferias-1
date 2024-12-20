export const SuitesIcon = ({ color = "currentColor", className = "float-left mr-2" }) => {
  return (
    <svg className={className} baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g>
        <circle fill={color} cx="8.5" cy="8.501" r="2.5" />
        <path fill={color} d="M16,10c-2,0-3,3-4.5,3s-1.499-1-3.5-1c-2,0-3.001,4-3.001,4H19C19,16,18,10,16,10z" />
        <path fill={color} d="M20,3H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M20,17H4V5h16V17z" />
      </g>
    </svg>

  );
};
