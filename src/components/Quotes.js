import { Bullseye, Facebook, Twitter } from 'react-bootstrap-icons'
import { useState } from 'react'



const colors = ["blueviolet", "pink", "red", "green", "blue", "yellow", "purple", "violet"];
const quotes = [
    { text: "The question isn’t who is going to let me; it’s who is going to stop me.", author: "- Ayn Rand" },
    { text: "When I let go of what I am, I become what I might be.", author: "- Lao Tzu" },
    { text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", author: "- Jesse Owens" },
    { text: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", author: "- Vincent Van Gogh" },
    { text: "Life shrinks or expands in proportion to one’s courage.", author: "- Anais Nin" },
    { text: "შური და ბოღმა დიდია, თქვენი კრიტიკა მკიდია.", author: "-ლევან კერესელიძე" },
    { text: "ფორტეპიანინო", author: "-გიუნა" }
];




function Quotes() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentColor, setCurrentColor] = useState("pink")



    const clickHandler = () => {
        const randomNum = Math.floor(Math.random() * 100) % 7
        setCurrentIndex(randomNum)

        const randomNum2 = Math.floor(Math.random() * 100) % 8
        setCurrentColor(colors[randomNum2])
    }







    return (
        <div className="Main" style={{ backgroundColor: currentColor }}>
            <div className="quoteWrapper" id="quote-box">
                <h1 id="text">{quotes[currentIndex].text}</h1>
                <span id="author">{quotes[currentIndex].author}</span>
                <div className="btnWrapper icons">
                    <a href="https://twitter.com/intent/tweet"
                        target="_blank">
                        <Twitter id="tweet-quote"
                            style={{ backgroundColor: currentColor }} /></a>
                    <Facebook style={{ backgroundColor: currentColor }} />
                    <button onClick={clickHandler}
                        id="new-quote"
                        style={{ backgroundColor: currentColor }}>New quote</button>
                </div>

            </div>
            <footer>
                <p>by Tamar</p>
            </footer>
        </div>

    )
}



export default Quotes