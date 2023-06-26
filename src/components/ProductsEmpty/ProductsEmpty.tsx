import classes from './ProductsEmpty.module.scss';

function ProductsEmpty(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <svg
          width="280px"
          height="280px"
          viewBox="0 -0.5 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#403f3f"
          stroke="#403f3f">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.16"></g>
          <g id="SVGRepo_iconCarrier">
            <title>shopping_cart_close_round [#949494]</title>
            <desc>Created with Sketch.</desc>
            <defs> </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -3120.000000)" fill="#949494">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M291.879613,2973.3029 L292.586322,2972.59038 L291.879613,2971.87787 C291.488775,2971.48382 291.488775,2970.84588 291.879613,2970.45284 C292.270452,2970.05878 292.903191,2970.05878 293.29303,2970.45284 L293.999738,2971.16535 L294.706447,2970.45284 C295.097285,2970.05878 295.730024,2970.05878 296.120863,2970.45284 C296.510702,2970.84588 296.510702,2971.48382 296.120863,2971.87787 L295.414155,2972.59038 L296.120863,2973.3029 C296.510702,2973.69695 296.510702,2974.33489 296.120863,2974.72793 C295.730024,2975.12198 295.097285,2975.12198 294.706447,2974.72793 L293.999738,2974.01541 L293.29303,2974.72793 C292.903191,2975.12198 292.270452,2975.12198 291.879613,2974.72793 C291.488775,2974.33489 291.488775,2973.69695 291.879613,2973.3029 L291.879613,2973.3029 Z M299.457486,2976.16405 C299.368523,2976.63973 298.955693,2976.9844 298.475891,2976.9844 L289.543577,2976.9844 C289.054779,2976.9844 288.637951,2976.62864 288.556985,2976.14288 L287.363477,2968.92198 L300.816925,2968.92198 L299.457486,2976.16405 Z M302.996026,2966.90638 L300.996851,2966.90638 L297.475304,2960.57436 C297.199418,2960.09264 296.58767,2959.83665 296.109868,2960.11481 C295.632065,2960.39296 295.468132,2961.14579 295.744019,2961.62752 L298.688803,2966.90638 L289.311673,2966.90638 L292.256458,2961.58217 C292.532344,2961.10044 292.368412,2960.39296 291.890609,2960.11481 C291.412806,2959.83665 290.801058,2960.13799 290.525172,2960.61972 L287.002626,2966.90638 L285.003451,2966.90638 C283.807945,2966.90638 283.412108,2968.92198 285.337313,2968.92198 L286.724741,2977.31596 C286.885674,2978.28748 287.71933,2979 288.696927,2979 L299.30355,2979 C300.281146,2979 301.114802,2978.28748 301.275736,2977.31596 L302.663163,2968.92198 C304.590368,2968.92198 304.189533,2966.90638 302.996026,2966.90638 L302.996026,2966.90638 Z" id="shopping_cart_close_round-[#949494]"> </path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p className={classes.text}>Список товаров пуст</p>
      </div>
    </div>
  );
}

export default ProductsEmpty;