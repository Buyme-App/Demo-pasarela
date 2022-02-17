import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendCart } from "./actions";

export default function Form() {
  const [cart, useCart] = useState({});
  const dispatch = useDispatch();

  let one;
  let two;
  let three;
  let four;

  function HandleChange(e) {
    e.preventDefault();

    if (e.target.name === "one") {
      one = {
        id: 1,
        title: "Camiones de jueguete",
        unit_price: 10,
        quantity: e.target.value,
      };
      console.log("one", one);
    }
    if (e.target.name === "two") {
      two = {
        id: 2,
        title: "Autitos Matchbox",
        unit_price: 1500,
        quantity: e.target.value,
      };
    }
    if (e.target.name === "three") {
      three = {
        id: 3,
        title: "Autitos Tomica",
        unit_price: 1500,
        quantity: e.target.value,
      };
    }
    if (e.target.name === "four") {
      four = {
        id: 4,
        title: "Autos Welly",
        unit_price: 1500,
        quantity: e.target.value,
      };
    }
  }

  function OnSubmit(e) {
    e.preventDefault();

    useCart({
      clientId: 1,
      itemsHard: [one, two, three, four],
    });
    console.log("CART>>>>>>>>>>>>>>>>", cart);
    dispatch(sendCart(cart));
  }

  return (
    <div>
      <div>
        <h2>Detalle de producto</h2>
        <div>
          <div>
            <div>
              <div>
                <h3>Remera de Mujer Manga Corta</h3>
              </div>
              <div>
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_843608-MLA46142805280_052021-O.webp"
                  alt="Foto del producto"
                />
                <hr />
                <h4>Descricion</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vero, consequatur, repellat, doloribus consequuntur eum
                  laboriosam distinctio nulla fuga sint esse est. Deleniti
                  distinctio hic aliquam.
                </p>
                <hr />
                <h4>Precio $2500</h4>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* action="https://demo-pasarela-v2.herokuapp.com/mp" */}
      <form onSubmit={(e) => OnSubmit(e)}>
        <label>Camiones de Jueguete </label>
        <input type="number" name="one" min="0" onChange={HandleChange} />
        <br />
        <label>Autitos Matchbox </label>
        <input type="number" name="two" min="0" onChange={HandleChange} />
        <br />
        <label>Autitos Tomica</label>
        <input type="number" name="three" min="0" onChange={HandleChange} />
        <br />
        <label>Autos Welly </label>
        <input type="number" name="four" min="0" onChange={HandleChange} />
        <br />

        <button type="submit">Comprar</button>
      </form>
      <br />
      <br />
    </div>
  );
}
