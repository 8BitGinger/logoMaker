class Shape{
//this is a constructor.  It defines the value of color as nothing.  Then tells it use the color the user selects    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    class Circle extends Shape{
//this class extends shape taking the color and then creating a circle to fit int he 300x200 frame
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
        }
    }
//this class extends shape taking the color and then creating a Square to fit int he 300x200 frame
class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        }
    }
//this class extends shape taking the color and then creating a Triangle to fit int he 300x200 frame
class Triangle extends Shape{
        render(){
            //return `<polygon height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
        }
    };
    

    //exports the templates to be used in the index.js file
    module.exports = {Circle, Square, Triangle}