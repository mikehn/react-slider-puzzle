# React Slider puzzle
React slider puzzle, Developed for use in Workshops/Training for React basics  

![alt text](https://raw.githubusercontent.com/mikehn/react-slider-puzzle/master/public/SliderImage.JPG)

## How to use

### Component usage
install component

```
npm install react-slider-game --save
```
init with size usage exmple:

```jsx
<Slider size={4}/>
```
init with data usage example:

```jsx
<Slider data={[0,1,2,3]}/>
```

### Usage as a work shop
#### Bring up
clone the repo
```
git clone https://github.com/mikehn/react-slider-puzzle.git
```
then install all dependencies

```
npm install
```

To only run and play game you can run

```
npm start
```
#### workshop sections
The code is split into 6 incramental steps (not including starting point), each with its own branch:
* ws-start  : starting point (can also use wp-start-template)
* ws-step-1 : creating the Board with 3 rows
* ws-step-2 : Add state to the board
* ws-step-3 : Add Box component (puzzle tile)
* ws-step-4 : Add Move logic
* ws-step-5 : Add win logic & Step count logic  
* ws-final  : final step Extract game logic and add "new game" logic
 
 to jump to any of the steps simply run:
 ```
 git checkout <step-name>
 ```



## Built With
Using only React !
we only used the project create-react-app 
* [create-react-app](https://github.com/facebookincubator/create-react-app) -Create React apps with no build configuration
no images or canvas were used in project, its only jsx + css


## Authors

* **Michael Hasin** - *developer @intel*  


## License
GNU General Public License v3.0