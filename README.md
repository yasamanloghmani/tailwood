<h1><a href="https://tailwood.vercel.app/">Cool Tailwood CSS Project</a></h1>

* [See the Project](https://tailwood.vercel.app/)


<h2 id='fun'>About my Cool Tailwood</h2>


*  A UI component system is one of the cornerstones of modern web application development. Complex websites, software applications and SaaS platforms often have their own "design language", and a UI component system expresses that language in a standardized way.
* Tailwind is a low-level CSS library that lets you create your own UI components from scratch. It is a powerful building block rather than a full component library. In this challenge, I built, refined and explained my own design system!

<h1 id='planning-presentation'>Planning & Presentation Requirements</h1>
    A design language is the core of your UI component system. It has the following categories:

* Color

* Typography

* Spacing

* Imagery

For this prohect I designed these components: 
* Header

* Footer

* Anchor tag / Link styling

* Buttons (few different styles )

* Cards

* Plain text styling (a few different styles

* h1/h2/h3/h4/h5/h6 tag styling

* Image

* Ordered & unordered lists

* Sections with image

* Team
<h1>ALL THE ABOVE COMPONENTS ARE MODULAR SO YOU CAN PASS PROPS AND CHANGE THE HEADER OF THE COMPONENTS< PARAGRAPH OF THE COMPONENTS < IMAGES AND ALSO APPLY MORE CLASSES!</h1>

* Examples:
```Bash
      <Services
                hclass="mb-8 font-bold text-3xl mb-2 text-center text-cyan-med"
                pclass="font-medium text-xl mb-2  text-cyan-dark text-base"
                btnclass="bg-cyan-light hover:bg-cyan-dark text-falling-gray font-bold py-4 p-6 border border-falling-gray rounded my-8" 
                h="Service" 
                p='paragraph'/>
   ```
   ```Bash
      <Team teamimg={teamimg} p="Mission-driven full stack developer with a passion for thoughtful UI design. I have more than 5 years of experience in web design and development" h="Yasaman Loghmani"/>
   ```

<h2 id='used'>Used Packages</h2>
I used React and Tailwood CSS for this project and 

   ```Bash
      npx create-react-app
      npm i
      npm i tailwindcss
      npm i postcss
      npm i postcss-cli
      npm i postcss-import
   ```
<h2 id='used'>CSS Configuration</h2>
Here are a few examples of Tailwood CSS configuration
* Colors:

   ```Bash
      colors: {
      purples :{
        dark: '#300030',
        med:'#580838',
        light: '#680840',
      },
      cyan: {
        dark: '#003333',
        med: '	#003f3f',
        light: '	#009090'
      },
      falling: {
        dark: '#24527b',
        med: '#2d72a2',
        light: '#6a92bb',
        gray: '#b5c9dd',
      },
      blue: {
        dark: '#001B3A',
        med: '#00224B',
        light: '#00316E',
        toolight: '#ebf8ff',
        header: '#a2d5f2'
      },
      logo: {
        green: '#84bca4',
        blue: '#07073a',
      }, 
      board: '#333',
      
    }
   ```
* Font Sizes:
 ```Bash
      fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
   ```
* Font Wights:

 ```Bash
      fontWeight: {
      thin : 200,
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 900
    },
   ```


<a href="https://ibb.co/zRrPjqM"><img src="https://i.ibb.co/fp2rBjg/Screen-Shot-2020-09-03-at-11-07-40-AM.png" alt="Screen-Shot-2020-09-03-at-11-07-40-AM" border="0"></a>
<a href="https://ibb.co/6FrPjSc"><img src="https://i.ibb.co/0rmMHLp/Screen-Shot-2020-09-03-at-11-08-01-AM.png" alt="Screen-Shot-2020-09-03-at-11-08-01-AM" border="0"></a>
<a href="https://ibb.co/1zfT3k4"><img src="https://i.ibb.co/WVWfQLR/Screen-Shot-2020-09-03-at-11-08-10-AM.png" alt="Screen-Shot-2020-09-03-at-11-08-10-AM" border="0"></a>
<a href="https://ibb.co/vmjR01P"><img src="https://i.ibb.co/S03GFNn/Screen-Shot-2020-09-03-at-11-08-21-AM.png" alt="Screen-Shot-2020-09-03-at-11-08-21-AM" border="0"></a>
<a href="https://ibb.co/qx45dLM"><img src="https://i.ibb.co/kMr1xVg/Screen-Shot-2020-09-03-at-11-08-35-AM.png" alt="Screen-Shot-2020-09-03-at-11-08-35-AM" border="0"></a>
<a href="https://ibb.co/MPQHDxL"><img src="https://i.ibb.co/yg7CncJ/Screen-Shot-2020-09-03-at-11-08-46-AM.png" alt="Screen-Shot-2020-09-03-at-11-08-46-AM" border="0"></a>

<!-- <img width="40%" height="50%" alt="Getting Started" src="./public/images/IMG_5483.png"><img width="40%" height="50%" alt="Getting Started" src="./public/images/IMG_5484.png">
<img width="40%" height="50%" alt="Getting Started" src="./public/images/Screen Shot 2020-03-26 at 6.05.52 PM.png"><img width="40%" height="50%" alt="Getting Started" src="./public/images/Screen Shot 2020-03-26 at 6.05.52 PM.png"> -->
