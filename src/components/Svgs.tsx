import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Rect,
  Stop,
  Use,
  Image,
  Ellipse,
  Text,
  TSpan,
} from 'react-native-svg';

export const HomeIconTab = ({props, fill}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill={fill}
      d="M10.553 2.675a2.25 2.25 0 0 1 2.894 0l6.75 5.676A2.249 2.249 0 0 1 21 10.073v9.428a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V14h-4v5.5A1.5 1.5 0 0 1 8.5 21h-4A1.5 1.5 0 0 1 3 19.5v-9.429a2.25 2.25 0 0 1 .803-1.721l6.75-5.676Zm1.93 1.501a.75.75 0 0 0-.966 0l-6.25 5.252A.75.75 0 0 0 5 10v9h3v-5c0-.398 0-1 .5-1.5S9.602 12 10 12h4c.398 0 1 0 1.5.5s.5 1.102.5 1.5v5h3v-9a.75.75 0 0 0-.267-.574l-6.25-5.25Z"
    />
  </Svg>
);

export const SearchIconTab = ({props, fill}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill={fill}
      d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
    />
  </Svg>
);

export const MailIconTab = ({props, fill}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.8 5h14.4c.99 0 1.8.787 1.8 1.75v10.5c0 .962-.81 1.75-1.8 1.75H4.8c-.99 0-1.8-.788-1.8-1.75V6.75C3 5.787 3.81 5 4.8 5Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 6.75-9 6.125L3 6.75"
    />
  </Svg>
);

export const ProfileTabIcon = ({props, fill}: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"
    />
  </Svg>
);

export const HeaderIconSettings = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Mask id="a" fill="#fff">
      <Path d="M13.82 22h-3.64a1 1 0 0 1-.978-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.622 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5.253-.142.513-.271.78-.386l.407-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a7.994 7.994 0 0 1 1.534.887l1.838-.585a1 1 0 0 1 1.17.453l1.82 3.153c.231.407.151.922-.194 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.985 7.985 0 0 1-1.534.886l-.412 1.879a1 1 0 0 1-.976.786Zm-6.2-5.771.82.6c.184.136.376.261.576.375.188.109.38.207.58.296l.932.409.457 2.091h2.03l.457-2.092.933-.409c.407-.18.794-.403 1.153-.666l.82-.6 2.042.65 1.015-1.758-1.583-1.443.112-1.012c.05-.443.05-.89 0-1.332l-.112-1.012 1.584-1.446-1.016-1.759-2.04.65-.822-.6a6.229 6.229 0 0 0-1.153-.671l-.933-.409L13.015 4h-2.03l-.46 2.092-.93.408a6.01 6.01 0 0 0-1.153.666l-.82.6-2.04-.65L4.563 8.88l1.583 1.441-.112 1.013c-.05.443-.05.89 0 1.332l.112 1.012-1.583 1.443 1.015 1.758 2.04-.65ZM11.994 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2.09v.4V12a2 2 0 0 0-2-2Z" />
    </Mask>
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={2}
      d="M13.82 22h-3.64a1 1 0 0 1-.978-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.622 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5.253-.142.513-.271.78-.386l.407-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a7.994 7.994 0 0 1 1.534.887l1.838-.585a1 1 0 0 1 1.17.453l1.82 3.153c.231.407.151.922-.194 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.985 7.985 0 0 1-1.534.886l-.412 1.879a1 1 0 0 1-.976.786Zm-6.2-5.771.82.6c.184.136.376.261.576.375.188.109.38.207.58.296l.932.409.457 2.091h2.03l.457-2.092.933-.409c.407-.18.794-.403 1.153-.666l.82-.6 2.042.65 1.015-1.758-1.583-1.443.112-1.012c.05-.443.05-.89 0-1.332l-.112-1.012 1.584-1.446-1.016-1.759-2.04.65-.822-.6a6.229 6.229 0 0 0-1.153-.671l-.933-.409L13.015 4h-2.03l-.46 2.092-.93.408a6.01 6.01 0 0 0-1.153.666l-.82.6-2.04-.65L4.563 8.88l1.583 1.441-.112 1.013c-.05.443-.05.89 0 1.332l.112 1.012-1.583 1.443 1.015 1.758 2.04-.65ZM11.994 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2.09v.4V12a2 2 0 0 0-2-2Z"
      mask="url(#a)"
    />
  </Svg>
);

export const HeaderIconNotification = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      d="M17.5 16v.207l.147.147 1.29 1.29a.5.5 0 0 1-.357.856H5.41a.5.5 0 0 1-.346-.856l1.29-1.29.147-.147V11c0-2.906 1.522-5.22 4.115-5.833L11 5.075V4c0-.554.446-1 1-1 .553 0 1 .446 1 1V5.075l.384.091C15.969 5.781 17.5 8.105 17.5 11v5ZM16 17.5h.5V11c0-1.338-.407-2.583-1.184-3.503C14.532 6.57 13.393 6 12 6c-1.392 0-2.531.57-3.315 1.497C7.908 8.417 7.5 9.662 7.5 11v6.5H16Zm-2.586 3c-.207.58-.765 1-1.413 1a1.5 1.5 0 0 1-1.415-1h2.828Z"
    />
  </Svg>
);

export const VerifyIconProfile = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      d="M12.24.891a1 1 0 0 1 1.52 0l2.19 2.565a1 1 0 0 0 .925.337l3.326-.558a1 1 0 0 1 1.165.978l.028 3.372a1 1 0 0 0 .493.853l2.906 1.71a1 1 0 0 1 .264 1.498l-2.146 2.601a1 1 0 0 0-.171.97l1.127 3.178a1 1 0 0 1-.761 1.318l-3.315.613a1 1 0 0 0-.755.634l-1.18 3.158a1 1 0 0 1-1.43.52l-2.933-1.66a1 1 0 0 0-.986 0l-2.934 1.66a1 1 0 0 1-1.43-.52L6.965 20.96a1 1 0 0 0-.755-.634l-3.315-.613a1 1 0 0 1-.76-1.318l1.126-3.177a1 1 0 0 0-.171-.97L.943 11.646a1 1 0 0 1 .264-1.499l2.906-1.71a1 1 0 0 0 .493-.853l.028-3.372a1 1 0 0 1 1.165-.978l3.326.558a1 1 0 0 0 .926-.337L12.239.891Z"
    />
    <Path
      fill="#fff"
      stroke="#fff"
      d="m12.698 15.739 5.397-6.422a.234.234 0 0 1 .33.003l.002.002a.255.255 0 0 1 .003.353l-.01.01-.01.012-5.905 6.981a.233.233 0 0 1-.071.05l.206.456-.206-.455a.235.235 0 0 1-.263-.05l-3.598-3.645a.257.257 0 0 1 0-.36.233.233 0 0 1 .333 0l.002.001 3.052 3.093.385.39.353-.42Z"
    />
  </Svg>
);

export const USDTIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={24}
    fill="none"
    {...props}>
    <G fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <Path
        fill="#50AF95"
        d="M5.126.118.021 10.684a.202.202 0 0 0 .045.24l13.788 13.018a.212.212 0 0 0 .291 0l13.789-13.018a.204.204 0 0 0 .044-.239L22.873.12A.205.205 0 0 0 22.685 0H5.316a.208.208 0 0 0-.19.118Z"
      />
      <Path
        fill="#fff"
        d="M15.772 11.77c-.099.007-.61.037-1.751.037-.908 0-1.552-.027-1.778-.037-3.507-.152-6.124-.754-6.124-1.474s2.617-1.32 6.124-1.475v2.35c.23.016.886.054 1.793.054 1.09 0 1.635-.045 1.733-.054V8.822c3.499.154 6.11.755 6.11 1.474s-2.61 1.32-6.11 1.473h.003Zm0-3.19V6.476h4.883V3.27H7.36v3.207h4.882v2.101c-3.968.18-6.953.955-6.953 1.883s2.985 1.702 6.953 1.882v6.739h3.53V12.34c3.959-.18 6.938-.953 6.938-1.88 0-.928-2.977-1.702-6.939-1.883l.001.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SushiIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path fill="url(#b)" d="m4.998 2.3 18.6 12.7-4.6 6.8L.398 9l4.6-6.7Z" />
      <Path
        fill="url(#c)"
        d="M23.599 15c-1.6 2.3-7 1.4-12.1-2.2-5.2-3.5-8-8.2-6.5-10.5 1.6-2.3 7-1.4 12.1 2.2 5.2 3.4 8 8.2 6.5 10.5Z"
      />
      <Path
        fill="url(#d)"
        d="M19 21.7c-1.6 2.3-7 1.4-12.1-2.2s-8-8.2-6.4-10.6c1.6-2.3 7-1.4 12.1 2.2s7.9 8.3 6.4 10.6Z"
      />
      <Path
        fill="#0E0F23"
        d="M23.6 15 19 21.8c-1.6 2.3-7 1.3-12.1-2.2-1-.7-1.9-1.4-2.8-2.2.7-.1 1.6-.5 2.5-1.5 1.6-1.7 2.4-2.1 3.1-2 .7 0 1.5.7 2.8 2.4 1.3 1.7 3.1 2.2 4.2 1.3.1-.1.2-.1.3-.2.9-.7 1.2-1 2.9-4.2.4-.8 1.8-2.1 3.7-1.5.5 1.3.5 2.4 0 3.3Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        d="m12.186 11.89-.004-.002c-2.362-1.624-4.21-3.455-5.29-5.1-.541-.824-.875-1.578-1-2.219-.122-.637-.034-1.125.216-1.482.254-.363.688-.624 1.33-.744.646-.12 1.468-.089 2.422.109 1.906.396 4.243 1.437 6.552 3.057 2.312 1.624 4.137 3.456 5.219 5.103.542.825.883 1.582 1.02 2.227.134.64.06 1.127-.167 1.481-.254.36-.687.618-1.325.737-.646.12-1.467.089-2.421-.11-1.906-.395-4.244-1.436-6.552-3.056Zm.527-.98.009.006c1.238.825 2.498 1.383 3.565 1.599.533.108 1.043.136 1.488.051.45-.086.863-.294 1.133-.68.275-.392.318-.86.232-1.31-.085-.448-.3-.915-.596-1.373-.594-.917-1.57-1.886-2.76-2.713l-.008-.006c-1.238-.825-2.498-1.383-3.565-1.6-.533-.107-1.043-.135-1.489-.05-.449.085-.863.294-1.133.68-.274.392-.317.86-.231 1.31.084.448.3.915.596 1.373.594.917 1.57 1.886 2.76 2.713Z"
      />
      <Mask id="e" fill="#fff">
        <Path d="M4.6 4.6c0-.1-.1-.2-.2-.1s-.2.1-.2.2c.1.3.2.5.2.7 0 .1.1.2.2.1.1 0 .2-.1.1-.2 0-.2 0-.4-.1-.7Z" />
      </Mask>
      <Path
        fill="#fff"
        d="M4.6 4.6c0-.1-.1-.2-.2-.1s-.2.1-.2.2c.1.3.2.5.2.7 0 .1.1.2.2.1.1 0 .2-.1.1-.2 0-.2 0-.4-.1-.7Z"
      />
      <Path
        fill="#fff"
        d="M4.6 4.6h-1v.162l.05.154.95-.316Zm-.4.1h-1v.162l.05.154.95-.316Zm.4.8v-1h-.415l-.293.293.707.707Zm.1-.2h-1v.414l.292.293L4.7 5.3Zm.9-.7c0-.341-.159-.724-.509-.957a1.092 1.092 0 0 0-.75-.175 1.128 1.128 0 0 0-.649.325l1.414 1.414a.873.873 0 0 1-.501.244.908.908 0 0 1-.623-.144.847.847 0 0 1-.383-.707h2Zm-1.908-.807c.043-.043.162-.123.015-.025a1.099 1.099 0 0 0-.508.932h2a.886.886 0 0 1-.163.514c-.098.14-.209.21-.22.218-.008.005-.014.01.002 0l.062-.04c.06-.04.141-.1.226-.185L3.692 3.793Zm-.441 1.223c.03.09.059.17.083.235l.054.153c.027.081.011.059.011-.004h2c0-.263-.066-.485-.114-.629-.024-.073-.052-.148-.073-.207a6.486 6.486 0 0 1-.064-.18l-1.897.632Zm.148.384c0 .341.158.724.508.957.195.13.457.214.75.175.29-.039.507-.182.65-.325L3.891 4.793a.873.873 0 0 1 .502-.244.908.908 0 0 1 .622.144.847.847 0 0 1 .383.707h-2Zm1.2 1.1c.342 0 .724-.158.957-.508.13-.194.214-.457.175-.75a1.128 1.128 0 0 0-.325-.65L3.992 6.008a.873.873 0 0 1-.243-.501.908.908 0 0 1 .143-.623A.847.847 0 0 1 4.6 4.5v2Zm1.1-1.2c0-.23.001-.56-.151-1.016l-1.897.632a.855.855 0 0 1 .042.182c.005.05.006.098.006.202h2Z"
        mask="url(#e)"
      />
      <Mask id="f" fill="#fff">
        <Path d="M5.099 6.2c0-.1-.1-.2-.2-.1s-.1.1-.1.2c1.1 2.5 3.4 5.2 6.4 7.2.1.1.2 0 .3 0 .1-.1 0-.2 0-.3-3.1-2-5.3-4.6-6.4-7Z" />
      </Mask>
      <Path
        fill="#fff"
        d="M5.099 6.2c0-.1-.1-.2-.2-.1s-.1.1-.1.2c1.1 2.5 3.4 5.2 6.4 7.2.1.1.2 0 .3 0 .1-.1 0-.2 0-.3-3.1-2-5.3-4.6-6.4-7Z"
      />
      <Path
        fill="#fff"
        d="M5.099 6.2h-1v.218l.09.199.91-.417Zm-.3.1h-1v.21l.085.193.915-.403Zm6.4 7.2.707-.707-.07-.07-.082-.055-.555.832Zm.3 0v1h.414l.293-.293-.707-.707Zm0-.3h1v-.545l-.458-.295-.542.84Zm-5.4-7c0-.341-.158-.724-.508-.957a1.092 1.092 0 0 0-.75-.175 1.128 1.128 0 0 0-.65.325l1.415 1.414a.873.873 0 0 1-.502.244.908.908 0 0 1-.622-.144.847.847 0 0 1-.383-.707h2Zm-1.907-.807c-.018.017-.058.058-.094.097a1.11 1.11 0 0 0-.292.65c-.008.078-.007.153-.007.16h2c0-.044 0-.005-.004.04a.89.89 0 0 1-.09.307c-.052.105-.111.17-.12.181l.02-.02-1.413-1.415Zm-.308 1.31c1.188 2.702 3.628 5.541 6.76 7.629l1.11-1.664c-2.869-1.912-5.029-4.473-6.04-6.77l-1.83.805Zm6.608 7.504a1.141 1.141 0 0 0 1.206.27l.022-.008h.002c-.003 0-.027.008-.062.015a.811.811 0 0 1-.161.016v-2a1.248 1.248 0 0 0-.409.071l-.015.005.031-.009a.86.86 0 0 1 .8.226l-1.414 1.414Zm1.714 0a1.14 1.14 0 0 0 .27-1.206l-.008-.022c-.002-.005-.001-.005 0-.002 0 .003.008.027.015.061a.813.813 0 0 1 .016.162h-2c0 .182.044.325.06.373l.01.036.006.015-.009-.032a.86.86 0 0 1 .226-.8l1.414 1.415Zm-.165-1.847c-2.96-1.91-5.022-4.37-6.033-6.577l-1.818.834c1.189 2.593 3.527 5.333 6.767 7.423l1.084-1.68Z"
        mask="url(#f)"
      />
      <Mask id="g" fill="#fff">
        <Path d="M17.2 16c-.1 0-.2 0-.2.1s0 .2.1.2c.3.1.7.2 1 .3.1 0 .2 0 .2-.1s0-.2-.1-.2c-.3-.1-.7-.2-1-.3Z" />
      </Mask>
      <Path
        fill="#fff"
        d="M17.2 16c-.1 0-.2 0-.2.1s0 .2.1.2c.3.1.7.2 1 .3.1 0 .2 0 .2-.1s0-.2-.1-.2c-.3-.1-.7-.2-1-.3Z"
      />
      <Path
        fill="#fff"
        d="m17.2 16 .316-.949-.154-.051H17.2v1Zm-.1.3.316-.949-.154-.051H17.1v1Zm1 .3-.316.949.154.051h.162v-1Zm.1-.3-.316.949.154.051h.162v-1Zm-1-1.3c-.018 0-.077 0-.14.004-.06.004-.178.015-.314.06-.14.047-.35.148-.518.364A1.09 1.09 0 0 0 16 16.1h2a.91.91 0 0 1-.194.556.908.908 0 0 1-.427.305.742.742 0 0 1-.186.038c-.016.001-.025.001.007.001v-2ZM16 16.1c0 .018 0 .077.004.14.004.06.015.179.06.314.047.14.148.35.364.518.225.175.474.228.672.228v-2c.148 0 .36.04.556.193.188.147.27.325.305.428a.742.742 0 0 1 .038.186c.001.016.001.025.001-.007h-2Zm.784 1.149c.175.058.372.114.541.163.18.051.334.095.459.137l.632-1.898c-.175-.058-.372-.114-.541-.162-.18-.052-.334-.096-.459-.138l-.632 1.898Zm1.316.351c.018 0 .077 0 .14-.004.06-.004.179-.015.314-.06.14-.047.35-.148.518-.364a1.09 1.09 0 0 0 .228-.672h-2c0-.148.04-.36.194-.556a.909.909 0 0 1 .427-.305.742.742 0 0 1 .186-.038c.016-.001.025-.001-.007-.001v2Zm1.2-1.1c0-.018 0-.077-.004-.14a1.252 1.252 0 0 0-.06-.314 1.092 1.092 0 0 0-.364-.518 1.09 1.09 0 0 0-.672-.228v2a.91.91 0 0 1-.556-.194.908.908 0 0 1-.305-.427.742.742 0 0 1-.038-.186c-.001-.016-.001-.025-.001.007h2Zm-.784-1.149c-.174-.058-.372-.114-.541-.163-.18-.051-.334-.095-.459-.137l-.632 1.898c.174.058.372.114.541.162.18.052.334.096.459.138l.632-1.898Z"
        mask="url(#g)"
      />
      <Mask id="h" fill="#fff">
        <Path d="M18.999 16.4c-.1 0-.2.1-.2.2s.1.2.2.2c.8.1 1.7.2 2.4.1.1 0 .2-.1.2-.2s-.1-.2-.2-.2c-.8.1-1.6 0-2.4-.1Z" />
      </Mask>
      <Path
        fill="#fff"
        d="M18.999 16.4c-.1 0-.2.1-.2.2s.1.2.2.2c.8.1 1.7.2 2.4.1.1 0 .2-.1.2-.2s-.1-.2-.2-.2c-.8.1-1.6 0-2.4-.1Z"
      />
      <Path
        fill="#fff"
        d="m18.999 16.4.124-.992-.062-.008H19v1Zm0 .4.124-.992-.062-.008H19v1Zm2.4.1v-1h-.071l-.07.01.14.99Zm0-.4v-1h-.062l-.062.008.124.992Zm-2.4-1.1a1.2 1.2 0 0 0-.845.355 1.2 1.2 0 0 0-.355.845h2a.8.8 0 0 1-.23.57.8.8 0 0 1-.57.23v-2Zm-1.2 1.2c0 .375.177.667.355.845A1.2 1.2 0 0 0 19 17.8v-2a.8.8 0 0 1 .57.23.8.8 0 0 1 .23.57h-2Zm1.076 1.192c.772.097 1.809.22 2.665.098l-.283-1.98c-.543.078-1.306.001-2.134-.102l-.248 1.984Zm2.524.108a1.2 1.2 0 0 0 .844-.355 1.2 1.2 0 0 0 .356-.845h-2a.8.8 0 0 1 .23-.57.8.8 0 0 1 .57-.23v2Zm1.2-1.2a1.2 1.2 0 0 0-.356-.845 1.2 1.2 0 0 0-.844-.355v2a.801.801 0 0 1-.57-.23.801.801 0 0 1-.23-.57h2Zm-1.324-1.192c-.655.082-1.33.002-2.152-.1l-.248 1.984c.778.098 1.703.218 2.648.1l-.248-1.984Z"
        mask="url(#h)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={8.643}
        x2={12.331}
        y1={0.494}
        y2={13.161}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#03B8FF" />
        <Stop offset={1} stopColor="#FA52A0" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={11.681}
        x2={15.369}
        y1={-0.39}
        y2={12.276}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#03B8FF" />
        <Stop offset={1} stopColor="#FA52A0" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={5.615}
        x2={9.304}
        y1={1.376}
        y2={14.042}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#03B8FF" />
        <Stop offset={1} stopColor="#FA52A0" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CurrencyUp = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#27BC6A"
      d="M4.89 10h6.22c.187 0 .291-.196.176-.33l-3.11-3.593a.238.238 0 0 0-.35 0L4.715 9.67c-.116.134-.012.33.175.33Z"
    />
  </Svg>
);

export const CurrencyDown = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#FF1818"
      d="M11.11 6H4.89c-.187 0-.291.196-.176.33l3.11 3.593c.09.103.26.103.35 0l3.11-3.593c.116-.134.012-.33-.175-.33Z"
    />
  </Svg>
);

export const AddIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      d="M7.826 8.326h.5V1.174a.674.674 0 0 1 1.348 0v7.152h7.152a.674.674 0 0 1 0 1.348H9.674v7.152a.674.674 0 0 1-1.348 0V9.674H1.174a.674.674 0 0 1 0-1.348h6.652Z"
    />
  </Svg>
);

export const MoreIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#687684"
      stroke="#687684"
      d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
    <Path
      fill="#687684"
      d="M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
);

export const LikeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#687684"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.95 5C5.216 5 3 7.152 3 9.807 3 14.614 8.85 18.984 12 20c3.15-1.016 9-5.386 9-10.193C21 7.152 18.784 5 16.05 5A4.988 4.988 0 0 0 12 7.042a4.903 4.903 0 0 0-1.768-1.502A5.063 5.063 0 0 0 7.95 5Z"
    />
  </Svg>
);

export const DislikeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#687684"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 15.147-1.35-2.206 3.15-2.647-4.05-2.206.45-2.559A5.003 5.003 0 0 0 7.95 5C5.216 5 3 7.173 3 9.853 3 14.706 8.85 19.118 12 20c3.15-.882 9-5.294 9-10.147C21 7.173 18.784 5 16.05 5c-.81 0-1.575.191-2.25.53"
    />
  </Svg>
);

export const ShareIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#687684"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684 6.632 3.316m-6.632-6 6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684Zm0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684Z"
    />
  </Svg>
);

export const TrashIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#687684"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.889 7.556H19.11m-.889 0-.77 10.792A1.778 1.778 0 0 1 15.677 20H8.322a1.778 1.778 0 0 1-1.774-1.652l-.77-10.792h12.444Zm-8 3.555v5.333-5.333Zm3.556 0v5.333-5.333Zm.888-3.555V4.889A.889.889 0 0 0 13.778 4h-3.556a.889.889 0 0 0-.889.889v2.667h5.333Z"
    />
  </Svg>
);

export const AudioPlay = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <Circle cx={20} cy={20} r={19.5} fill="#1886FF" stroke="#1886FF" />
    <Path
      fill="#fff"
      stroke="#fff"
      d="m29.167 19.792.023.014a.249.249 0 0 1-.024.405v.001L14.637 29.46a.254.254 0 0 1-.135.04.232.232 0 0 1-.115-.029l-.004-.002a.251.251 0 0 1-.131-.219v-18.5c0-.09.05-.174.13-.219l.005-.002a.242.242 0 0 1 .248.01l14.532 9.254Z"
    />
  </Svg>
);

export const AudioTime = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={199}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#687684"
      d="M0 0h2.625v20H0zM5.775 7.368H8.4V20H5.775zM34.654 7.368h2.625V20h-2.625zM17.328 3.684h2.625V20h-2.625zM46.207 3.684h2.625V20h-2.625zM28.879.526h2.625V20h-2.625zM11.551 12.105h2.625V20h-2.625zM40.43 12.105h2.625V20H40.43zM23.102 12.105h2.625V20h-2.625zM51.98 12.105h2.625V20H51.98zM57.758 16.842h2.625V20h-2.625zM150.168 16.842h2.625V20h-2.625zM103.963 16.842h2.625V20h-2.625zM80.859 16.842h2.625V20h-2.625zM173.271 16.842h2.625V20h-2.625zM127.066 16.842h2.625V20h-2.625zM69.309 16.842h2.625V20h-2.625zM161.721 16.842h2.625V20h-2.625zM115.516 16.842h2.625V20h-2.625zM92.41 16.842h2.625V20H92.41zM184.824 16.842h2.625V20h-2.625zM138.617 16.842h2.625V20h-2.625zM63.533 16.842h2.625V20h-2.625zM155.945 16.842h2.625V20h-2.625zM109.738 16.842h2.625V20h-2.625zM86.637 16.842h2.625V20h-2.625zM179.047 16.842h2.625V20h-2.625zM132.842 16.842h2.625V20h-2.625zM75.084 16.842h2.625V20h-2.625zM167.496 16.842h2.625V20h-2.625zM121.289 16.842h2.625V20h-2.625zM98.188 16.842h2.625V20h-2.625zM190.598 16.842h2.625V20h-2.625zM196.375 16.842H199V20h-2.625zM144.395 16.842h2.625V20h-2.625z"
    />
  </Svg>
);

export const FinanceLeftIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#FF1818"
      d="m5.708 10.607 11.134-7.383C17.787 2.598 19 3.356 19 4.618v14.766c0 1.26-1.21 2.02-2.158 1.391L5.708 13.392a1.518 1.518 0 0 1-.518-.587A1.783 1.783 0 0 1 5 12c0-.283.065-.561.19-.806.124-.244.303-.447.518-.587Z"
    />
  </Svg>
);

export const FinanceRightIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      d="M18.292 13.393 7.158 20.776C6.213 21.402 5 20.644 5 19.382V4.616c0-1.26 1.21-2.02 2.158-1.391l11.134 7.383c.215.14.394.343.518.587.125.245.19.523.19.805 0 .283-.066.561-.19.806a1.517 1.517 0 0 1-.518.587Z"
    />
  </Svg>
);

export const ModalMailIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.8 5h14.4c.99 0 1.8.787 1.8 1.75v10.5c0 .962-.81 1.75-1.8 1.75H4.8c-.99 0-1.8-.788-1.8-1.75V6.75C3 5.787 3.81 5 4.8 5Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 6.75-9 6.125L3 6.75"
    />
  </Svg>
);

export const ModalAddIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      d="M.344 9.83a1.174 1.174 0 0 1 .83-2.004h6.652V1.174A1.174 1.174 0 0 1 9.83.344L.344 9.83Zm0 0c.22.22.519.344.83.344m-.83-.344.83.344m0 0h6.152-6.152Zm6.652-1.848h.5V1.174a.674.674 0 0 1 1.15-.477l.352-.35-.351.35a.674.674 0 0 1 .197.477v7.152h7.152a.674.674 0 0 1 0 1.348H9.674v7.152a.674.674 0 0 1-1.348 0V9.674H1.174a.674.674 0 0 1-.477-.197l-.35.35.35-.35a.674.674 0 0 1 .477-1.15h6.652Z"
    />
  </Svg>
);

export const ModalCloseIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      d="M8.057 6.646 7.702 7l.355.354 4.3 4.29v.001a.5.5 0 0 1 0 .71l-.002.003a.496.496 0 0 1-.547.11.498.498 0 0 1-.163-.11l-.001-.001-4.29-4.3L7 7.702l-.354.355-4.29 4.3h-.001a.498.498 0 0 1-.71 0l-.003-.002a.5.5 0 0 1 0-.71l.001-.001 4.3-4.29L6.298 7l-.355-.354-4.3-4.29a.504.504 0 0 1 .713-.712l4.29 4.3.354.354.354-.355 4.29-4.3a.504.504 0 0 1 .713.713l-4.3 4.29Z"
    />
  </Svg>
);

export const CommentInputLike = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      stroke="#1886FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.95 5C5.216 5 3 7.152 3 9.807 3 14.614 8.85 18.984 12 20c3.15-1.016 9-5.386 9-10.193C21 7.152 18.784 5 16.05 5A4.988 4.988 0 0 0 12 7.042a4.903 4.903 0 0 0-1.768-1.502A5.063 5.063 0 0 0 7.95 5Z"
    />
  </Svg>
);

export const CommentInputSendIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#1886FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.145 12H4.89L3.132 5.009a.588.588 0 0 1-.02-.125c-.02-.64.686-1.085 1.298-.792L20.89 12 4.41 19.908c-.605.29-1.302-.142-1.298-.77a.587.587 0 0 1 .03-.166l1.303-4.305"
    />
  </Svg>
);

export const ExportIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#687684"
      stroke="#687684"
      d="m13.115 6.72-.865-.922V15.5h-.5V5.798l-.865.922-2.067 2.206-.375-.4L12 4.73l3.557 3.795-.375.4-2.067-2.206ZM17 18.4v-2.7h.5v2.7c0 .635-.481 1.1-1 1.1h-9c-.51 0-1-.505-1-1.1v-2.7H7v3.2h10v-.5Z"
    />
  </Svg>
);

export const HeaderGoBackIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12H4M11 5l-7 7 7 7"
    />
  </Svg>
);

export const CommentLike = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      stroke="#1886FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.95 5C5.216 5 3 7.152 3 9.807 3 14.614 8.85 18.984 12 20c3.15-1.016 9-5.386 9-10.193C21 7.152 18.784 5 16.05 5A4.988 4.988 0 0 0 12 7.042a4.903 4.903 0 0 0-1.768-1.502A5.063 5.063 0 0 0 7.95 5Z"
    />
  </Svg>
);

export const CommentDislike = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#FF1818"
      stroke="#FF1818"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.95 5C5.216 5 3 7.152 3 9.807 3 14.614 8.85 18.984 12 20c3.15-1.016 9-5.386 9-10.193C21 7.152 18.784 5 16.05 5A4.988 4.988 0 0 0 12 7.042a4.903 4.903 0 0 0-1.768-1.502A5.063 5.063 0 0 0 7.95 5Z"
    />
  </Svg>
);

export const SettingsCopyIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      d="M19.2 3h-9c-.993 0-1.8.807-1.8 1.8v3.6H4.8c-.993 0-1.8.807-1.8 1.8v9c0 .993.807 1.8 1.8 1.8h9c.993 0 1.8-.807 1.8-1.8v-3.6h3.6c.993 0 1.8-.807 1.8-1.8v-9c0-.993-.807-1.8-1.8-1.8ZM4.8 19.2v-9h9l.002 9H4.8Zm14.4-5.4h-3.6v-3.6c0-.993-.807-1.8-1.8-1.8h-3.6V4.8h9v9Z"
    />
    <Path fill="#1886FF" d="M7 12h5v1.667H7V12Zm0 3.333h5V17H7v-1.667Z" />
  </Svg>
);

export const SettingsEditIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      d="M6.04 17.625a.953.953 0 0 0 .14-.012l3.943-.691a.23.23 0 0 0 .124-.066l9.935-9.935a.233.233 0 0 0 0-.33l-3.895-3.898a.232.232 0 0 0-.167-.068.232.232 0 0 0-.166.068l-9.935 9.935a.238.238 0 0 0-.066.124l-.691 3.943a.785.785 0 0 0 .22.698c.155.15.35.232.558.232Zm1.58-4.088 8.5-8.498 1.718 1.718-8.5 8.498-2.084.368.366-2.085Zm13.005 6.057H3.375a.75.75 0 0 0-.75.75v.843c0 .104.084.188.188.188h18.375a.188.188 0 0 0 .187-.188v-.843a.75.75 0 0 0-.75-.75Z"
    />
  </Svg>
);

export const SettingsWalletIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path fill="#1886FF" d="M16 12h2v4h-2v-4Z" />
    <Path
      fill="#1886FF"
      d="M19.2 7.556V5.778A1.79 1.79 0 0 0 17.4 4H5.7C4.211 4 3 5.196 3 6.667v10.666C3 19.29 4.615 20 5.7 20h13.5c.993 0 1.8-.797 1.8-1.778V9.333a1.79 1.79 0 0 0-1.8-1.777ZM5.7 5.778h11.7v1.778H5.7a.906.906 0 0 1-.61-.274.884.884 0 0 1 0-1.23.906.906 0 0 1 .61-.274Zm13.5 12.444H5.71c-.415-.01-.91-.173-.91-.889V9.17c.283.1.582.164.9.164h13.5v8.89Z"
    />
  </Svg>
);

export const SettingsColorThemeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#1886FF"
      d="M20 13.998c-.092.065-2 2.083-2 3.5 0 1.494.95 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.435-2-3.5Zm-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586.534 0 1.036-.208 1.414-.586l7-7-.707-.707L11 4.584 8.707 2.291 7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414ZM11 7.412l5.586 5.586L11 18.584h.001v1-1l-5.587-5.586L11 7.412Z"
    />
  </Svg>
);

export const SettingsDisconnectIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#FF1818"
      d="M19.513 4.486a5.067 5.067 0 0 0-7.172 0l-2.27 2.271 1.195 1.195 2.27-2.27c1.262-1.262 3.39-1.395 4.782 0 1.394 1.394 1.26 3.52 0 4.78l-2.271 2.272 1.197 1.197 2.272-2.27a5.076 5.076 0 0 0-.003-7.175Zm-9.049 13.833c-1.26 1.26-3.389 1.394-4.781 0-1.395-1.395-1.261-3.52 0-4.781l2.27-2.272-1.197-1.197-2.27 2.27a5.067 5.067 0 0 0 0 7.173 5.07 5.07 0 0 0 7.171 0l2.271-2.271-1.195-1.196-2.269 2.274ZM6.1 4.908a.188.188 0 0 0-.265 0l-.928.928a.188.188 0 0 0 0 .265l12.994 12.994a.188.188 0 0 0 .265 0l.928-.929a.188.188 0 0 0 0-.264L6.1 4.908Z"
    />
  </Svg>
);

export const ChevronRightSettingsIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 17 5-5-5-5"
    />
  </Svg>
);

export const SettingsAddPhotoIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      stroke="#fff"
      d="m17.687 7.1.148.162H21.087c.778 0 1.413.635 1.413 1.405v11.428c0 .77-.635 1.405-1.413 1.405H5.783a1.415 1.415 0 0 1-1.413-1.405v-8.071h.913v8.571H21.587V8.167h-4.154L15.83 6.424l-.149-.162h-4.617v-.905h5.02L17.687 7.1ZM5.783 6.262h-.5v2.857H4.37V6.262H1.5v-.905h2.87V2.5h.913v2.857h2.87v.905h-2.37Zm7.652 12.38c-2.366 0-4.283-1.91-4.283-4.261 0-2.35 1.917-4.262 4.283-4.262 2.366 0 4.282 1.912 4.282 4.262 0 2.35-1.916 4.262-4.282 4.262Zm3.37-4.261c0-1.85-1.518-3.357-3.37-3.357-1.853 0-3.37 1.507-3.37 3.357 0 1.85 1.517 3.357 3.37 3.357 1.852 0 3.37-1.507 3.37-3.357Z"
    />
  </Svg>
);