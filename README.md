# Aiuner's Portfolio Website <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Application Structure](#application-structure)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_This web application is a simple portfolio containing some information on the developer, Aiuner, and their previous projects. The application has been built using React.js and CSS._

<br>

## MVP

_The MVP was to have a functional interface with information on Aiuner's previous coding projects, skills, personal brand statement, contact information, and a section on their background. The portfolio was designed as a desktop-first application with a navigation sidebar and tabs to mitigate the need for scrolling on devices with larger screens. MVP was acheived within 5 days and the application went live on 9/28/2020; the portfolio was rushed._

<br>

### Goals

**For MVP:**
- _Create a portfolio that summarizes who Aiuner is and their current software engineering experience._
- _Have a simple, clean, intuitive and stylish interface with which to explore the portfolio._

**For Post-MVP:**
- _Make the portfolio a more fun and pleasing and stimulating visual experience with animations._
- _Supplement information on Aiuner with images and links where applicable._
- _Embed the Trials of the Gauntlet video to its subsection in the Asset & Art Creation tab in Projects and showcase some of the assets Aiuner created._
- _Provide additional Projects for Asset & Art Creation._
- _Change "Interests" tab in About Me to "Hobbies & Interests" and add information to the tab, with images and links where applicable._
- _Add icons for each of the different libraries, tools, frameworks, languages, etc. to the Skills tab and add these icons to each Project as well to show what was used._
- _Restyle Projects to be more aesthetically appealling and so buttons aren't obtrusive._
- _Add Project summaries._
- _Rework screens to be much DRYer. Convert tabs to a separate component if possible._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _A Javascript framework and library used to quickly build responsive single-page web applications._ |
|   React Router   | _Used to allow React applications to render different React components to the page based on a url pathname._ |

<br>

### Application Structure

#### Component Hierarchy

- src/
  - assets/
    - (Subfolders for different projects' screenshots.)
    - Logo.png
  - components/
    - styles/
      - (CSS style sheets for components.)
    - Nav.jsx
  - layouts/
    - layout.css
    - Layout.jsx
  - screens/
    - styles/ 
      - (CSS style sheets for each screen.)
    - About.jsx
    - ContactMe.jsx
    - Projects.jsx

<br>

#### Component Breakdown

|  Component         |    Type    | state | props | Description                                                      |
| :----------:       | :--------: | :---: | :---: | :--------------------------------------------------------------- |
| About (screen)     | functional |   y   |   n   | _Displays information on Aiuner. Uses tabs to section the information._ |
| ContactMe (screen) | functional |   y   |   n   | _Displays Aiuner's contact information._ |
| Projects (screen)  | functional |   y   |   n   | _Displays information on Aiuner's projects. Uses tabs to separate coding from digital art._ |
| Nav                | functional |   n   |   n   | _Navigation menu. Used to navigate to the different screens of the application._ |
| Layout             | functional |   n   |   y   | _Wraps the entire application so that all screens have mostly uniform styling applied._ |

<br>

#### Time Estimates

| MVP/Post | Task                             | Priority | Estimated Time | Time Invested | Actual Time |
| -------- | :------------------------------: | :------: | :------------: | :-----------: | :---------: |
|   MVP    | Build Application Skeleton       |    H     |   <0.5 hrs     |   <0.5 hrs    |    -----    |
|    "     | Assign Routing Paths             |    H     |   <0.5 hrs     |   <0.5 hrs    |     1 hr    |
|    "     | Create & Style Layout            |    H     |      1 hr      |      1 hr     |    2 hrs    |
|    "     | Create Rudimentary Nav Menu      |    H     |     2 hrs      |      1 hr     |    3 hrs    |
|    "     | Begin initial set-up of Screens  |    H     |      1 hr      |     ~1 hr     |    4 hrs    |
|    "     | Rudimentary styling for Screens  |    M     |     2 hrs      |    ~2 hrs     |    6 hrs    |
|    "     | Construct Tabs for Screens       |    H     |     2 hrs      |     8 hrs     |   14 hrs    |
|    "     | Style Tabs                       |    M     |     1 hrs      |      1 hr     |   16 hrs    |
|    "     | Build out Projects Component     |    H     |     3 hrs      |     2 hrs     |   18 hrs    |
|    "     | Add Info to Coding Projects      |    H     |      1 hr      |     1 hrs     |   19 hrs    |
|    "     | Add Brand Statement to Summary   |    H     |   <0.25 hrs    |   <0.25 hrs   |  19.25 hrs  |
|    "     | Write Up and Add Background      |    H     |     2 hrs      |     8 hrs*    |  27.25 hrs  |
|    "     | Add & Style Skills               |    H     |      1 hr      |   <0.5 hrs    | ~27.75 hrs  |
|  -----   | MVP TOTAL                        |  -----   |   17.25 hrs    |     -----     | ~27.75 hrs  |

*I did not have the Background prepared in advance. Writing about myself is very difficult for me, and ended up taking up the entire time.

<br>

***

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.