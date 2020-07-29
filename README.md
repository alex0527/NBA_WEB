# NBA
The National Basketball Association (NBA) is a men's professional basketball league in North America; composed of 30 teams (29 in the United States and 1 in Canada). It is widely considered to be the premier men's professional basketball league in the world.
![NBA Logo](https://cdn.mos.cms.futurecdn.net/DFpakzWmfkhQsuU3N6hnd3-650-80.jpg)

# stats.nba.com
The NBA’s Stats API provides data for every single shot attempted during an NBA game since 1996, including location coordinates on the court. [link to stats!](http://stats.nba.com)

# ShotChart
![Image of shotchart](https://github.com/alex0527/NBA_WEB/blob/master/shortchart.png)

# Recap
## Project
NBA project focus on communication between UI interaction while Around Web focus on API integration and presenting data received from API call.
## React
- 2 types of Components
  - Functional Components: Pure function
  - Class Components: State and Lifecycle hooks
- Extract reusable components. Compose components into bigger app
- JSX syntax: Need to be transpiled into valid Javascript code, in order to be executed. A JSX syntax returns a React element.
- React Element: A object that store information to be used to construct node in Virtual DOM
- What is Virtual DOM? A Javascript object that describe DOM tree
- Virtual DOM helps improving rendering performance by minimizing number of DOM operations. It is done by finding difference between current and previous Virtual DOM tree. [Explanation on how it works can be found in previous slide]
- setState is asynchronous
- Two ways to set a new state via parameter:
  - Object: New state is obtained by merging the given object into current state
  - Callback function (prevState): Intermediate state is provided by prevState for further processing
- Data flow: One direction, from parent to children
- State design: Put shared data in lowest common ancestor
- Callback climbs up: Implement callback function that modify the state and pass down to children using props. Children components can then access the callback function from props and update the state of ancestor.
- Lifecycle: During each phase of the lifecycle (mounting, updating and unmounting), there are some function hooks which can be overridden to handle the lifecycle events.
