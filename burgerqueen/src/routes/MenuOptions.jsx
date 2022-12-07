
import Header from "../components/Header";


export function MenuOptions() {

 
  return (
    <div>     
      <Header/>
      <section className="options-container">
        <section 
          className= "optionsListContainer">
          <select className="optionMenu">
            <option value="Seleccione Desayuno/Almuerzo y Cena">
              Seleccione una opción
            </option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo y Cena</option>
          </select> 
                           
        </section>
      </section>    
    </div>
  );
} 


/* export function MenuOptions() {
  const navigate = useNavigate();
  return (
    <div>     
      <Header/>
      <div className="options-container">
        <section 
          className="options-block"
          onClick={() => navigate(Products)}
        >
          <h3>Desayuno</h3>
        </section>
        <section
          className="options-block"
          onClick={() => navigate(Products)}
        >
          <h3>Almuerzo y Cena</h3>
        </section>
        <section
          className="options-block"
          onClick={() => navigate(OrderState)}
        >
          <h3>Pedido</h3>
        </section>
      </div>

      <section className="breakfastMenu">
        <button className="botonBreakfas">Café americano</button>
        <button className="botonBreakfas">Café con leche</button>
        <button className="botonBreakfas">Sandwich de jampon y queso</button>
        <button className="botonBreakfas">Jugo de frutas natural</button>
      </section>

      <section className="lunchDinnerMenu">
        <h5>Hamburguesas</h5>
        <button className="botonLunchDinner">Hamburguesa simple</button>
        <button className="botonLunchDinner">Hamburguesa doble</button>
        <h5>Acompañamientos</h5>
        <button className="botonLunchDinner">Papas fritas</button>
        <button className="botonLunchDinner">Aros de cebolla</button>
        <h5>Para tomar</h5>
        <button className="botonLunchDinner">Agua 500ml</button>
        <button className="botonLunchDinner">Agua 700ml</button>
        <button className="botonLunchDinner">Bebida/gaseosa 500ml</button>
        <button className="botonLunchDinner">Bebida/gaseosa 700ml</button>
      </section>
    </div>
  );
}  */