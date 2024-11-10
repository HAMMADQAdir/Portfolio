/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        marquee: 'marquee 25s linear infinite',
        marquee2:'marquee2 24s linear infinite',
        marqueevertical: 'marquee-vertical var(--marquee-duration) linear infinite',
      },
      keyframes: {
         marquee: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      marqueevertical: {
        '100%': { transform: 'translateY(-50%)' }
      },
      marquee2: {
        '0%': { transform: 'translateY(100%)' },
        '100%': { transform: 'translateY(0)' },
      },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
        },
      },
      colors: {
      black:{
        DEFAULT:'#000',
        100:'#000319'
      }  
      },
    },
  },
  plugins: [addVariablesForColors,],
};



function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");
  const flattenColors = (colors, prefix = "") =>
    Object.entries(colors).reduce((acc, [key, value]) => {
      if (typeof value === "string") {
        acc[`--${prefix}${key}`] = value;
      } else {
        Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
      }
      return acc;
    }, {});

  const newVars = flattenColors(allColors);

  addBase({
    ":root": newVars,
  });
}
