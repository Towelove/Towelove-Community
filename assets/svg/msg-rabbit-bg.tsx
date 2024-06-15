import * as React from "react"
import Svg, { SvgProps, Mask, Path, G, Ellipse, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const MsgRabbitBg = (props: SvgProps) => (
  <Svg
    width={160}
    height={160}
    fill="none"
    {...props}
  >
    <Mask
      id="b"
      width={160}
      height={160}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Mask id="a" fill="#fff">
        <Path d="M5.121 28.474C7.597 16.576 16.555 7.492 28.453 5.01 40.453 2.507 57.97 0 80 0c22.74 0 40.672 2.67 52.692 5.252 11.224 2.41 19.785 10.792 22.205 22.015C157.431 39.018 160 56.683 160 80c0 22.225-2.334 39.314-4.747 51.043-2.517 12.229-12.151 21.129-24.391 23.6C117.915 157.256 99.644 160 80 160c-19.06 0-36.828-2.583-49.694-5.124-12.914-2.55-22.96-12.172-25.537-25.081C2.349 117.667 0 100.595 0 80c0-21.594 2.582-39.316 5.121-51.526Z" />
      </Mask>
      <Path
        fill="#FFEDE6"
        d="M5.121 28.474C7.597 16.576 16.555 7.492 28.453 5.01 40.453 2.507 57.97 0 80 0c22.74 0 40.672 2.67 52.692 5.252 11.224 2.41 19.785 10.792 22.205 22.015C157.431 39.018 160 56.683 160 80c0 22.225-2.334 39.314-4.747 51.043-2.517 12.229-12.151 21.129-24.391 23.6C117.915 157.256 99.644 160 80 160c-19.06 0-36.828-2.583-49.694-5.124-12.914-2.55-22.96-12.172-25.537-25.081C2.349 117.667 0 100.595 0 80c0-21.594 2.582-39.316 5.121-51.526Z"
      />
      <Path
        fill="#617084"
        d="m30.306 154.876-.194.981.194-.981Zm124.947-23.833.979.201-.979-.201Zm-24.391 23.6-.198-.98.198.98Zm24.035-127.376.977-.21-.977.21ZM5.749 129.599C3.34 117.525 1 100.519 1 80h-2c0 20.67 2.357 37.808 4.788 49.99l1.961-.391ZM1 80c0-21.515 2.572-39.168 5.1-51.322l-1.958-.407C1.591 40.536-1 58.327-1 80h2Zm152.919-52.522C156.439 39.163 159 56.757 159 80h2c0-23.391-2.578-41.127-5.126-52.944l-1.955.422ZM159 80c0 22.154-2.327 39.176-4.727 50.841l1.959.403C158.658 119.452 161 102.295 161 80h-2ZM28.657 5.989C40.598 3.498 58.047 1 80 1v-2C57.895-1 40.31 1.515 28.248 4.031l.409 1.958ZM80 1c22.661 0 40.523 2.662 52.482 5.23l.42-1.956C120.821 1.68 102.818-1 80-1v2Zm50.664 152.663C117.758 156.268 99.556 159 80 159v2c19.731 0 38.073-2.756 51.06-5.377l-.396-1.96ZM80 159c-18.975 0-36.675-2.572-49.5-5.105l-.387 1.962C43.019 158.406 60.855 161 80 161v-2ZM3.788 129.99c2.66 13.325 13.031 23.242 26.325 25.867l.387-1.962c-12.536-2.475-22.257-11.802-24.75-24.296l-1.962.391Zm150.485.851c-2.429 11.805-11.729 20.424-23.609 22.822l.396 1.96c12.599-2.543 22.568-11.724 25.172-24.379l-1.959-.403Zm1.601-103.785c-2.505-11.615-11.372-20.29-22.972-22.782l-.42 1.956c10.849 2.33 19.102 10.418 21.437 21.248l1.955-.422ZM6.101 28.678c2.395-11.515 11.054-20.29 22.556-22.69l-.409-1.957C15.956 6.595 6.698 15.988 4.142 28.271l1.958.407Z"
        mask="url(#a)"
      />
    </Mask>
    <G mask="url(#b)">
      <Path
        fill="#FFD689"
        stroke="#617084"
        strokeLinejoin="round"
        d="M22.167 11.164c.615-.675 1.739-.238 1.738.675l-.003 3.07a1 1 0 0 0 .587.91l2.795 1.27c.832.377.764 1.58-.105 1.862l-2.92.946a1 1 0 0 0-.685.84l-.343 3.05c-.102.907-1.267 1.214-1.803.475l-1.803-2.485a1 1 0 0 0-1.01-.392l-3.007.616c-.895.184-1.547-.83-1.01-1.568l1.807-2.482a1 1 0 0 0 .06-1.082L14.95 14.2c-.45-.794.311-1.727 1.18-1.444l2.918.95a1 1 0 0 0 1.048-.276l2.07-2.266ZM.889 21.15c-.082-.91.998-1.444 1.671-.827l2.264 2.074a1 1 0 0 0 1.068.182l2.823-1.206c.84-.358 1.681.504 1.303 1.335L8.745 25.5a1 1 0 0 0 .156 1.072l2.02 2.312c.6.688.04 1.755-.867 1.652l-3.05-.348a1 1 0 0 0-.971.48l-1.575 2.636c-.469.784-1.656.58-1.838-.314l-.612-3.008a1 1 0 0 0-.758-.775l-2.992-.684c-.89-.203-1.065-1.396-.27-1.845L.66 25.167a1 1 0 0 0 .503-.96L.89 21.15ZM34.72-1.62c.53-.745 1.698-.448 1.808.459l.37 3.047a1 1 0 0 0 .693.833l2.928.92c.872.274.95 1.476.122 1.861l-2.784 1.294a1 1 0 0 0-.578.916l.03 3.07c.009.913-1.11 1.36-1.732.69l-2.091-2.247a1 1 0 0 0-1.05-.267l-2.91.977c-.866.29-1.636-.636-1.193-1.434l1.492-2.683a1 1 0 0 0-.07-1.081l-1.829-2.466c-.544-.734.1-1.753.995-1.577l3.013.59A1 1 0 0 0 32.94.88l1.78-2.5ZM48.439 4.372c-.05-.911 1.05-1.407 1.7-.766l2.188 2.153a1 1 0 0 0 1.061.22l2.864-1.104c.852-.329 1.662.563 1.255 1.38L56.135 9a1 1 0 0 0 .118 1.077l1.936 2.382c.576.71-.022 1.755-.925 1.62l-3.035-.456a1 1 0 0 0-.988.446l-1.668 2.576c-.496.767-1.676.522-1.826-.379l-.505-3.027a1 1 0 0 0-.729-.802l-2.966-.79c-.882-.235-1.014-1.433-.204-1.854l2.724-1.415a1 1 0 0 0 .538-.941l-.166-3.066ZM96.343-2.723c-.049-.912 1.05-1.407 1.7-.767l2.188 2.153a1 1 0 0 0 1.061.22l2.864-1.104c.852-.329 1.663.563 1.255 1.38l-1.372 2.746a1 1 0 0 0 .119 1.077l1.935 2.383c.576.708-.021 1.755-.925 1.62l-3.035-.457a1 1 0 0 0-.988.446L99.477 9.55c-.496.767-1.676.522-1.826-.38l-.504-3.027a1 1 0 0 0-.73-.802l-2.966-.79c-.882-.235-1.014-1.432-.203-1.853l2.723-1.416a1 1 0 0 0 .538-.941l-.166-3.065ZM123.343 7.277c-.049-.912 1.049-1.407 1.7-.767l2.188 2.153a1 1 0 0 0 1.061.22l2.864-1.104c.852-.329 1.663.563 1.255 1.38l-1.372 2.746a1 1 0 0 0 .119 1.077l1.935 2.383c.576.708-.021 1.755-.925 1.62l-3.035-.457a1 1 0 0 0-.988.446l-1.668 2.577c-.496.767-1.676.522-1.826-.38l-.504-3.027c-.065-.387-.35-.7-.729-.802l-2.967-.79c-.882-.235-1.014-1.432-.203-1.853l2.723-1.416a1 1 0 0 0 .538-.941l-.166-3.065ZM143.853 30.985c.598-.69 1.732-.284 1.756.629l.079 3.068a1 1 0 0 0 .611.896l2.828 1.194c.841.355.805 1.56-.056 1.864l-2.894 1.023c-.37.131-.629.467-.663.858l-.261 3.058c-.078.91-1.234 1.248-1.79.524l-1.868-2.436a1 1 0 0 0-1.02-.366l-2.99.696c-.889.208-1.568-.788-1.051-1.54l1.74-2.53a1 1 0 0 0 .032-1.083l-1.586-2.628c-.472-.782.265-1.735 1.141-1.475l2.943.873a1 1 0 0 0 1.04-.304l2.009-2.32ZM160.667 45.645c.771-.49 1.741.225 1.502 1.106l-.804 2.963a1 1 0 0 0 .328 1.033l2.366 1.955c.704.581.324 1.725-.588 1.77l-3.066.15c-.392.02-.736.266-.881.631l-1.128 2.855c-.335.85-1.54.842-1.864-.012l-1.091-2.87a1 1 0 0 0-.873-.642l-3.063-.191c-.912-.057-1.276-1.205-.565-1.777l2.392-1.924a1 1 0 0 0 .342-1.029l-.766-2.972c-.227-.885.752-1.586 1.516-1.086l2.569 1.68a1 1 0 0 0 1.084.007l2.59-1.647ZM84.83 4.33c.428-.807 1.624-.667 1.853.217l.768 2.972a1 1 0 0 0 .796.735l3.024.527c.9.157 1.136 1.338.366 1.829l-2.59 1.649a1 1 0 0 0-.452.984l.433 3.039c.13.904-.921 1.494-1.626.913l-2.368-1.953a1 1 0 0 0-1.076-.127l-2.756 1.352c-.82.402-1.706-.415-1.371-1.265l1.126-2.855a1 1 0 0 0-.213-1.063L78.607 9.08c-.635-.656-.132-1.75.78-1.694l3.063.188a1 1 0 0 0 .945-.53l1.436-2.714Z"
      />
      <Path
        fill="#FFFEFF"
        stroke="#617084"
        strokeWidth={1.2}
        d="M52 11.486c-24 3.2-38 15.333-42 21-4 5.666-21.068 33.36-20.5 57.014.532 22.181 17 65 17 65s45.853 14.567 76 14.5c29.964-.067 74-15.5 74-15.5s13.105-39.51 12-59c-.927-16.345-14-39.514-14-39.514-8-16-21.333-24-27-26-.167-1.166.1-7.3 2.5-22.5 3-19-8.5-27.5-17.5-20.5-7.2 5.601-14.333 23-17 31-3.2-1.6-10-2.333-13-2.5v-15c0-7 1-26-11.5-20.5-10 4.4-16.833 23.5-19 32.5Z"
      />
      <Path
        fill="#FFE8EB"
        d="M115.5-7.773C112-5.773 104 18 104 18s3.4.627 5 2.227c1.6 1.6 9.229-5.028 12.5-10.5 1.929-3.227 2.7-4.7 3.5-11.5 1-8.5-6-8-9.5-6Z"
      />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M108 36.486c-2.8-1.6-2.833-5-2.5-6.5l4.5-2c5 2.167 15.2 6.9 16 8.5 1 2-1.5 4.5-6.5 4-3.282-.328-6-2.333-7-4-.333.667-1.7 1.6-4.5 0Z"
      />
      <Path
        fill="#F4FBDB"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M100.002 18.987c5.6-1.2 8.333.5 9 1.5 0 3.6 1.333 3.833 2 3.5-.334.5-1 1.8-1 3s-3.001 2.5-5.001 3c-7.501-3.5-6-8.834-4.999-11Z"
      />
      <Path
        stroke="#617084"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M109.5 27.486c-1.333-.5-4-2.2-4-5"
      />
      <Path
        stroke="#617084"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M104.5 26.428c.667-.333 2.3-.8 3.5 0"
      />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M137.5 30.986c1.6-4.4-.667-5.833-2-6 0 2-1.667 4.167-2.5 5 0 2-1.333 3.834-2 4.5 1.5.5 4.5 2 6.5-3.5Z"
      />
      <Path
        stroke="#617084"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M30 37.986c7-2.5 13.5-5 15-1s-3.5 8.5-13.5 13.5M140.001 61.987c-6.102-7.016-11.931-11.844-16.001-8.5-4.07 3.343-1.5 10.5 3 17M78.5 37.486c.5 2 2.5 5 6.5 3 .667 1.5 3 4 7 2"
      />
      <G filter="url(#c)">
        <Ellipse
          cx={56.282}
          cy={29.587}
          fill="#FFE3E5"
          rx={5.852}
          ry={7.524}
          transform="rotate(-105 56.282 29.587)"
        />
      </G>
      <G filter="url(#d)">
        <Ellipse
          cx={5.852}
          cy={7.524}
          fill="#FFE3E5"
          rx={5.852}
          ry={7.524}
          transform="scale(1 -1) rotate(55.867 110.898 81.287)"
        />
      </G>
      <Path
        stroke="#617084"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M58.5 27.986c2-2 8-5.5 14 3.5M111.668 44.283c-.581-2.768-3.688-8.98-13.634-4.73"
      />
      <Ellipse
        cx={86}
        cy={37.486}
        fill="#617084"
        rx={2.5}
        ry={1.5}
        transform="rotate(19.667 86 37.486)"
      />
      <Path stroke="#617084" strokeWidth={1.2} d="m86 37.986-1 2.5" />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M117 13.485c2.8.4 4.167 2.5 4.5 3.5l-7.5 3.501-3.5 3.5c-1.6 0-1.333-3-1-4.5.333-1.501 1.5-2.5 3-2.5 0-2 2.853-3.736 4.5-3.5Z"
      />
      <Ellipse cx={120} cy={26.486} fill="#FFF6F0" rx={6.5} ry={5.5} />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M114 20.987c.333-1.5 2.3-4.3 7.5-3.5 5.2.8 6.167 2.333 6 3l-1.5 6.5c-1.632.163-4.957-.377-5.471-3.778.01.66-.665 1.493-3.529.777.167-.833-.2-2.6-3-3Z"
      />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M126 26.986c-.8-3.6 1-5.833 2-6.5 1.5 0 4.6 1.3 5 6.5.5 6.5-3 8.5-7 9.5-3.2.8-6-.333-7-1 0-4.4 2.667-4.833 4-4.5 0-2.8 2-3.833 3-4Z"
      />
      <Path
        fill="#FFF6F0"
        stroke="#617084"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M133.5 19.487c-3-4-7.5-3-9.5-1.5 1.6.4 3.333 1.833 4 2.5.5 0 1.9.4 3.5 2s2 5 2 6.5c2.5-2 3-5.5 0-9.5ZM111.5 31.986c1.6 3.2 5.667 4 7.5 4l.5-4.5c.833-.5 2.3-1.9 1.5-3.5-.8-1.6-3-1.333-4-1 .5-.833 1-3-1-5-2.5-2.5-4.5 1-5 2s-1.5 4 .5 8Z"
      />
      <Path
        fill="#FFE8EB"
        d="M65.5-12.5C65-10 59.5 2 61 9.5c2.8 5.6 9.5 3.667 12.5 2C78 6 77.665-10.167 78-14l-12.5 1.5Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default MsgRabbitBg
