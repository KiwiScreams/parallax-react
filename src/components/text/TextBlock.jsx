import "./TextBlock.css"
import sun from "../../assets/images/sun.png"
function TextBlock() {
    return (
        <>
            <div class="main-container flex">
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusantium reiciendis enim? Perspiciatis fugit modi unde nisi quisquam impedit, molestias quaerat adipisci amet sunt libero suscipit aperiam minus, commodi in!</p>
                <div className="sun-img">
                    <img src={sun} alt="" />
                </div>
            </div>
        </>
    )
}
export default TextBlock