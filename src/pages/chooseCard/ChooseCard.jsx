import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Login } from '../index';
import "./chooseCard.css";

const ChooseCard = () => {
  let navigate = useNavigate();
  return (
    <div className="big-container">
      <div className="button-container">
        <button className="btn1"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Go to Sign Up Page
        </button>
        <br></br>
      </div>

      <section>
        <div class="container">
          <div class="left">
            {" "}
            <h1>Display Pricing Option</h1>
          </div>
          {/* <div class="right">
            <div class="content">
              <h1>Duocard Branded Card</h1>
              <p>
                <ul>
                  <li>NFC Enabled</li>
                  <li>QR Code for older phones</li>
                  <li>Works with Apple and Android</li>
                  <li>No monthly Fees</li>
                  <li>Ships within 48hrs</li>
                </ul>
              </p>
              <a href="#" class="btn">
                Add to Cart
              </a>
            </div>
          </div> */}
        </div>

        <div class="container">
          <div class="left">
            {" "}
            <h1>Display Pricing Option</h1>
          </div>
          {/* <div class="right">
            <div class="content">
              <h1>Duocard Branded Card</h1>
              <p>
                <ul>
                  <li>NFC Enabled</li>
                  <li>QR Code for older phones</li>
                  <li>Works with Apple and Android</li>
                  <li>No monthly Fees</li>
                  <li>Ships within 48hrs</li>
                </ul>
              </p>
              <a href="#" class="btn">
                Add to Cart
              </a>
            </div>
          </div> */}
        </div>

        <div class="container">
          <div class="left">
            {" "}
            <h1>Display Pricing Option</h1>
          </div>
          {/* <div class="right">
            <div class="content">
              <h1>Duocard Branded Card</h1>
              <p>
                <ul>
                  <li>NFC Enabled</li>
                  <li>QR Code for older phones</li>
                  <li>Works with Apple and Android</li>
                  <li>No monthly Fees</li>
                  <li>Ships within 48hrs</li>
                </ul>
              </p>
              <a href="#" class="btn">
                Add to Cart
              </a>
            </div>
          </div> */}
        </div>
      </section>

      

      <section className="section">
        <div class="container">
          <div class="left">
            {" "}
            <h1>Display Card Here</h1>
          </div>
          <div class="right">
            <div class="content">
              <h1>Custom Designed Card</h1>
              <p>
                <ul>
                  <li>Custom designed with your logo and branding</li>
                  <li>NFC Enabled</li>
                  <li>QR Code for older phones</li>
                  <li>Works with Apple and Android</li>
                  <li>Ships within 72hrs</li>
                  <li>No monthly Fees</li>
                </ul>
              </p>
              <a href="#" class="btn">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="log_box">
        <Login/>
      </div>
      
    </div>
  );
};

export default ChooseCard;

/* <main>
  <div class="container">
    <div class="cover"><img src="./images/prd_img_temp.svg" alt="img" /></div>
    <div class="content">
      <div class="content-body">
        <div class="duo-label">
          <span class="title"><b>Duocard Branded Card</b></span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tenetur corporis modi aliquam, quis laborum a nam fugit ducimus?
            Molestiae repellendus adipisci ea aut eligendi nemo velit
            itaque, illum placeat? Velit.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tenetur corporis modi aliquam, quis laborum a nam fugit ducimus?
            Molestiae repellendus adipisci ea aut eligendi nemo velit
            itaque, illum placeat? Velit. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit.
          </p>

          <div class="prix">
            <span><b>$12.00</b></span>
            <span class="crt">Add to card</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</main> */
