import { useState } from "react";
import { RiMenuUnfoldFill, RiUserFollowFill, RiAddCircleFill, RiNavigationFill, RiCloseLine, RiSearch2Line, RiArrowDownSLine} from "react-icons/ri";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import Card from "./components/shared/Card";


function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  return <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu ={showMenu}/>
    <Car showOrder = {showOrder} setShowOrder = {setShowOrder}/>
    {/*Menu movil*/}
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8  flex items-center justify-between rounded-tl-xl rounded-tr-xl" >
      <button className="p-2">
        <RiUserFollowFill/>        
      </button>
      <button className="p-2">
        <RiAddCircleFill />
      </button>
      <button onClick={toggleOrders} className="p-2">
        <RiNavigationFill />
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        {showMenu ? <RiCloseLine /> : <RiMenuUnfoldFill />}
        
      </button>
    </nav>
    <main className="lg:pl-32 lg:pr-96 pb-20">
      <div className="md:p-8 p-4">
        {/*header */}
      <Header />
          {/*title content*/}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />Dine in
            </button>
          </div>
          {/*Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/*card*/}
            <Card 
            img="platillo-1.png" 
            description="El Mole" 
            price="2.29" 
            inventory = "20"/>
            {/*card*/}
            <Card 
            img="platillo-2.png" 
            description="Ensalada Griega" 
            price="3.00" 
            inventory = "15"/>
            {/*card*/}
            <Card 
            img="platillo-3.png" 
            description="Salmon a la parrilla" 
            price="4.50" 
            inventory = "23"/>
            {/*card*/}
            <Card 
            img="platillo-4.png" 
            description="Fideos, Arroz y Camarones" 
            price="5.30" 
            inventory = "20"/>
            {/*card*/}
            <Card 
            img="platillo-5.png" 
            description="fideos fritos con camarones y verduras" 
            price="4.19" 
            inventory = "7"/>
            {/*card*/}
            <Card 
            img="platillo-6.png" 
            description="sushi sashimi" 
            price="7.29" 
            inventory = "5"/>
          </div>
      </div>
      
    </main>
  </div>
}

export default App
