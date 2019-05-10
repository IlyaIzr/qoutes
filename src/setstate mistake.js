import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      allimages: [],
      imageUrl: "https://pp.userapi.com/c837234/v837234578/41a0c/AGJTZoZP4DY.jpg",
      highText: "So, the",
      bottomText: "bottom",
      allMemeImgs: []
    }
  }

componentDidMount(){
  fetch("https://ilyaizr.github.io/qoutes/jsons/imagesurls.json")
            .then(response => response.json())
            .then(response => {
              const {urls} = response

              this.setState({allimages: urls})

                  console.log(this.state.allimages.length)
            }
            )

    console.log(this.state.allimages.length)



    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    let width = window.innerWidth
    let height = window.innerHeight

    img.onload = () => {
          ctx.drawImage(img, 0, 0, (width), (height))

          ctx.textAlign = "center";
          ctx.font = "3rem Courier"
          ctx.fillStyle = 'white'
          ctx.fillText(this.state.highText, (width*0.3), (height*0.1))

          ctx.fillStyle = 'black'
          ctx.fillText(this.state.bottomText, (width*0.65), (height*0.9))
        }

    let elem = document.getElementById('toRemove');
    elem.parentNode.removeChild(elem);

    }



  render(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    //console.log(w)
    //console.log(h)
    return (
      <div className="App">

            <canvas ref="canvas"
            width={w-1}
            height={h-10}
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
