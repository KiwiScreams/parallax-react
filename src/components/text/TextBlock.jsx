import "./TextBlock.css"
import sun from "../../assets/images/sun.png"
function TextBlock() {
    return (
        <>
            <div class="main-container flex">
                <p class="text">Welcome to the heart-pounding world of horror gaming! We are thrilled to invite you to be among the first to test our latest spine-chilling creation. Dive into an immersive experience that will test your courage, challenge your wits, and leave you breathless with anticipation.</p>
                <div className="sun-img">
                    <img src={sun} alt="" />
                </div>
            </div>
        </>
    )
}
export default TextBlock