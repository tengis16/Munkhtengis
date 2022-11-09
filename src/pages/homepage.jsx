import HomeContainer from '../components/HomeContainer';
import Teamwork from '../components/Teamwork';
import SimpleComp from '../components/SimpleComp';
import Actually from '../components/Actually';
import Comment from '../components/Comment';
import Footer from '../components/Footer'

const datas = [
  {
     "star": 5,
     "comment":"Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
     "person":{
      "name":"Amy Klassen"
     },
     profile:"https://www.americanpost.news/wp-content/uploads/2022/06/SPY-x-FAMILY-Fans-canceled-this-drawing-of-Anya-and.jpeg"
  },
  {
      "star": 5,
      "comment":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      "person":{
       "name":"Jane Cooper"
      },
      profile:"https://i.pinimg.com/736x/3e/90/18/3e90181cc67d3650ad9de822e0cabd4d.jpg"
  },
  {
      "star": 5,
      "comment":"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      "person":{
          "name":"Eleanor Pena"
      },
      profile: "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1656473044.0987_Y3UVY8_n.jpg"
  },
  {
    "star": 5,
    "comment":"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ",
    "person":{
        "name":"Tengis"
    },
    profile: "https://i.pinimg.com/736x/0f/5e/5a/0f5e5a4e6bae453d59f8770f6f1a434d.jpg"
}
]


const HomePage = ()=>{
    return(
      <div className='main'>
        <HomeContainer/>
        <Teamwork />
        <SimpleComp/>
        <Actually/>
        <div className="commentContainer"> 
          {datas.map((el, index) => <Comment key={index} starNumber={el.star} comment={el.comment} name={el.person.name} profile={el.profile}/> )}
        </div>
        <Footer/>
      </div>
    )
}
export default HomePage;