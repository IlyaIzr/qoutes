import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      allimages: [],
      imageUrl: "",
      allHtext: [],
      allBtext: [],
      highText: "",
      bottomText: "",
    }
    this.onClick = this.onClick.bind(this)
  }


 componentDidMount(){
  fetch("https://ilyaizr.github.io/qoutes/jsons/imagesurls.json")
          .then(response => response.json())
            .then(response => {
              const {urls} = response

              this.setState({allimages: urls})

              //console.log(this.state.allimages.length)

              const randNum = Math.floor(Math.random() * this.state.allimages.length)
              const randMemeImg = this.state.allimages[randNum]
              this.setState({imageUrl: randMemeImg})
            }
          )

  fetch("https://ilyaizr.github.io/qoutes/jsons/texts.json")
            .then(response => response.json())
              .then(response => {
                const {highText} = response
                const {bottomText} = response
                this.setState({allHtext: highText})
                this.setState({allBtext: bottomText})

                const randHNum = Math.floor(Math.random() * this.state.allHtext.length)
                const randHText = this.state.allHtext[randHNum]
                this.setState({highText: randHText})

                const randBNum = Math.floor(Math.random() * this.state.allBtext.length)
                const randBText = this.state.allBtext[randBNum]
                this.setState({bottomText: randBText})
              }
            )

const canvas = this.refs.canvas
const ctx = canvas.getContext("2d")
const img = this.refs.image
let width = document.body.clientWidth*1.01
let height = window.innerHeight

    img.onload = () => {
          ctx.drawImage(img, 0, 0, (width), (height))

          ctx.textAlign = "center";
          ctx.font = "5rem Courier"
          ctx.fillStyle = 'Pink'
          ctx.fillText(this.state.highText, (width*0.3), (height*0.1), 600)
          ctx.strokeText(this.state.highText, (width*0.3), (height*0.1), 600)

          ctx.fillStyle = 'LightBlue'
          ctx.fillText(this.state.bottomText, (width*0.65), (height*0.9), 500)
          ctx.strokeStyle = 'black';
          ctx.strokeText(this.state.bottomText, (width*0.65), (height*0.9), 500)
        }

    let elem = document.getElementById('toRemove');
    elem.parentNode.removeChild(elem);

    }

  onClick(){
    const randNum = Math.floor(Math.random() * this.state.allimages.length)
    const randImg = this.state.allimages[randNum]
    this.setState({ imageUrl: randImg })

    const randHNum = Math.floor(Math.random() * this.state.allHtext.length)
    const randHText = this.state.allHtext[randHNum]
    this.setState({highText: randHText})

    const randBNum = Math.floor(Math.random() * this.state.allBtext.length)
    const randBText = this.state.allBtext[randBNum]
    this.setState({bottomText: randBText})

    document.getElementById('button').style.opacity=0.2
    console.log("TEST");
  }


  render(){
    let w = document.body.clientWidth
    let h = window.innerHeight*1.01
    //console.log(w)
    //console.log(h)
    return (
      <div className="App">

          <button className="generator" id="button"
            formtarget ="_parent"
            autofocus ="true"
            onClick={this.onClick}
            >
            generate
          </button>

            <canvas ref="canvas"
            width={w}
            height={h}
            id="canvas"
            />

          <img src={this.state.imageUrl}
            width={w}
            height={h}
            ref="image"
            alt="beau"
            id="toRemove"
            />


      </div>
  );
 }
}

export default App;
