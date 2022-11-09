import { Star } from "../assets/img/svg/Star"

const Comment = ({ starNumber, comment, name, profile }) => {
    return(
            <div className="durvuljin">
                <div className="star">{new  Array(starNumber).fill(0).map((el, index) => <Star key={index} width={"20px"} height={"20px"} /> )}</div>
                <p className="comment">{comment}</p>
                <div className="hos">
                    <img className="pf" src={profile} />
                    <p className="name">{name}</p>
                </div>
            </div>
    )
}
export default Comment