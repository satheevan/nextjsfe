import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors:{
        loginbg:"#F2F4F7",
        cardClr:"#E0E5FF80",
        multiCardClr:{
          lightGreen:"#D1FADF",
          lightRed:"#FEE4E2",
          lightYellow:"#FEF0C7",
        },
        greenClr:"#039855",
        redClr:"#D92D20",
        yellowClr:"#EBB12D",
        btnColorProject:"#0040C1",
        btnwhiteColor:"#EAECF0",
        textPrimary:"#0040C1",
        leftSideBar:"#101828",
        textColor:{
          default:"black",
          light:'#475467',
          lightGreen:'#039855',
          lightRed:'#D92D20',
          lightYellow:'#DC6803',
          lightOrange:'#F79009'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes:{
        light:{
          layout:{},
          colors:{}
        },
        dark:{
          layout:{},
          colors:{}
        },
        systemReq:{
          extend:'dark',
          colors:{
            background:'0D001A'
          }
        }
      }
    })],
}
