import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CartList = () => {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getitems")
      .then((response) => {
        console.log(response.data.cart);
        setCart(response.data.cart);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (cartId) => {
    if (cartId) {
      axios.delete(`http://localhost:5000/deleteitem/${cartId}`)
        .then(() => {
          alert('Deleted Successfully');
          setCart(carts.filter(cart => cart._id !== cartId));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  
  const blk = (v) => {
    v.target.style.backgroundColor = 'red'
    v.target.style.color = 'black'
    v.target.style.fontWeight = 'bold'
    v.target.style.border = 'none'
  }

  const lkb = (v) => {
    v.target.style.backgroundColor = 'black'
    v.target.style.color = 'white'
    v.target.style.fontWeight = 'normal'
  }
  
  return (
    <div style={{backgroundColor:'#CCC8AA'}}>
      <div className='row'>
            <div className='col-md-3'>
                <Link to={'/'}><img style={{cursor:'pointer', width:'100%', borderRadius:'0px 60px 60px 0px'}} href="" src="Logo.png" alt="Logo" /></Link>
            </div>
            <div className="col-md-6 mt-5">
              <h1>Cart</h1>
            </div>
            <div className="col-md-3 mt-5">
              <Link to={'/spares'}><button onMouseOver={blk} onMouseLeave={lkb} className="btn0">Spares</button></Link>
            </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
        <table border="1" style={{ width: "100%" }}>
          <thead style={{ backgroundColor: 'black', color: 'white', fontSize: '20px' }}>
            <tr>
              <th>Sl.no</th>
              <th>Product</th>
              <th>Price</th>
              <th>Remove from cart</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '15px' }}>
  {carts && carts.map((item, index) => (
    <tr key={index}>
      <td><b>{index + 1}.</b></td>
      <td><b>{item.title}</b></td>
      <td><b>{item.price}</b></td>
      <td>
        <button
          style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '8px', borderRadius: '8px' }}
          onClick={() => handleDelete(item._id)}>Remove</button>
      </td>
    </tr>
  ))}
</tbody>

      </table>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <button onMouseOver={blk} onMouseLeave={lkb} className="btn0">Checkout</button>

        </div>
      </div>
      <footer className="bg-dark text-center text-white mt-5">
                
                <div className="container p-4 pb-0">
                    <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i>
                    </a>


                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i>
                    </a>

                    
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i>
                    </a>
                    </section>
                </div>

                
                <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    
                    <h6 className="text-white">© 2020 Copyright: Dyno Car Care™</h6>
                </div>
                </footer>
    </div>
  );
};

export default CartList;