
import './App.css'
import { Fruit } from './components/Card'
import cucumber from './assets/cucumber.jpg'


const dataPack = [
  {id: 1, size: '02', title: 'Apple', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://thumbs.dreamstime.com/b/red-apple-isolated-white-background-71475088.jpg' },
  {id: 2, size: '02', title: 'Cucumber', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://previews.123rf.com/images/fabrikacrimea/fabrikacrimea2003/fabrikacrimea200304851/141994650-cucumber-isolated-on-white-background.jpg'},
  {id: 4, size: '02', title: 'Banana', uom: '02', unit: '$8.99', total: '$17.89',  img: 'https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg'},
  {id: 3, size: '02', title: 'Tangerine', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://static.vecteezy.com/system/resources/previews/009/037/171/large_2x/tangerine-or-mandarin-fruit-with-leaves-isolated-on-white-background-photo.jpg'},
  {id: 5, size: '02', title: 'Carrot', uom: '02', unit: '$8.99', total: '$17.89',  img: 'https://previews.123rf.com/images/natika/natika1301/natika130100265/17621160-carrot-vegetable-with-leaves-isolated-on-white-background-cutout.jpg'},
  {id: 6, size: '02', title: 'Cherry', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://www.shutterstock.com/image-photo/cherry-isolated-on-white-background-600nw-200523716.jpg'},
  {id: 7, size: '02', title: 'Raspberry', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://t3.ftcdn.net/jpg/03/66/09/44/360_F_366094484_u1mrluXyjFdzC6OXhJ82weQvvMbk47Ho.jpg'},
  {id: 8, size: '02', title: 'Broccolli', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://t3.ftcdn.net/jpg/02/50/29/00/360_F_250290014_4snUMjCdfdy6Jeik0iftCRuNFUUb7rP1.jpg'},
  {id: 9, size: '02', title: 'Melon', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://media.istockphoto.com/id/146890371/photo/honeydew-melon.jpg?s=612x612&w=0&k=20&c=kf4wvD7dHiGx3Vzytu8zy1XrOZzk5hjAABs2V2gKLaA=',},
  {id: 10, size: '02', title:'Lemon', uom: '02', unit: '$8.99', total: '$17.89', img: 'https://media.istockphoto.com/id/1389128157/photo/lemon-fruit-with-leaf-isolated-whole-lemon-and-a-half-with-leaves-on-white-background-lemons.jpg?s=612x612&w=0&k=20&c=Gjyv0Yd0gMG4JZ5iE9e864ilZrurflx1gU6cKHn4E2s=',}
]
function App() {

  return (
    <div className="fruitPage" >
      
      {
        dataPack.map((value, index)=> {
          return(
            <Fruit data = {value} key={index} />
          )
        })
      }
    </div>
  )
}

export default App
