import React from "react";


export default function Form(){



    return(

        <div>
            <div class="container">
                    <h2 >Detalle de producto</h2>
                    <div >






                        <div >
                            <div >
                                <div >
                                    <h3>Remera de Mujer Manga Corta</h3>
                                </div>
                                <div >
                                    <img src="https://http2.mlstatic.com/D_NQ_NP_843608-MLA46142805280_052021-O.webp" alt="Foto del producto" />
                                    <hr/>
                                    <h4>Descricion</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, consequatur, repellat, doloribus consequuntur eum laboriosam distinctio nulla fuga sint esse est. Deleniti distinctio hic aliquam.</p>
                                    <hr/>
                                    <h4>Precio $2500</h4>
                                    <div>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                
                <form action="https://demo-pasarela.herokuapp.com/home" method="POST"> 
                    <input type="hidden" name="price" value="25" />
                    <input type="hidden" name="cant" value='4' />
                    <input type="hidden" name="title" value="Remera de mujer manga corta" />
                    
                    <input type="submit" value="Comprar ahora"/>
                </form> 

        </div>
    )
};