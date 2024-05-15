import React, {useState} from 'react'
import Herobanner from '../Components/Herobanner/Herobanner'
import Exploremenu from '../Components/ExploreMenu/Exploremenu'
import menu_1 from '../frontend_assets/menu_1.png'
import menu_2 from '../frontend_assets/menu_2.png'
import menu_3 from '../frontend_assets/menu_3.png'
import menu_4 from '../frontend_assets/menu_4.png'
import menu_5 from '../frontend_assets/menu_5.png'
import menu_6 from '../frontend_assets/menu_6.png'
import menu_7 from '../frontend_assets/menu_7.png'
import menu_8 from '../frontend_assets/menu_8.png'
import FoodDisplay from '../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../Components/AppDownload/AppDownload'

const Home = () => {

  const[category, setCategory] = useState('All');

 const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

  return (
     <div>
          <Herobanner />
          <Exploremenu  menu_list={menu_list} category={category} setCategory={setCategory}/>
          <FoodDisplay  category={category}/>
          <AppDownload />
     </div>
  )
}

export default Home