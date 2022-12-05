import './App.css';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '@mui/material/Card';
// import { icon } from '@fortawesome/fontawesome-svg-core';

function App() {
  return (
    <div className="App">
      <PricingBoxList />
    </div>
  );
}

function PricingBoxList() {
  const pricingList = [{
    scheme: "FREE",
    price: "$0",
    users: "Single",
    storage: "5 GB",
  },
  {
    scheme: "PLUS",
    price: "$9",
    users: "5",
    storage: "50 GB",
  },
  {
    scheme: "PRO",
    price: "$49",
    users: "Unlimited",
    storage: "150 GB",
  }];
  return (
    <div className='pricing-box-list-container'>
      {pricingList.map((dt) => <PricingBox pricingList={dt} />)}
    </div>
  )
}

function PricingBox({ pricingList }) {
  const styles = {
    color: "grey"
  }
  const priceStyle = {
    fontSize: "40px"
  }

  return (
    <div className='container'>
      <Card variant="outlined" style={{ borderRadius: 20 }}>
        <div className='pricing-scheme-container'>
          <p style={styles}>{pricingList.scheme}</p>
          <p style={priceStyle}>{pricingList.price}<sub>/month</sub></p>
          <hr />
        </div>
        <div className='pricing-list-items'>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} />{" "}{pricingList.users}{" "} Users</li>
            <li><FontAwesomeIcon icon={faCheck} />{" "}{pricingList.storage}{" "}Storage</li>
            <li><FontAwesomeIcon icon={faCheck} />
              {" "}Unlimited Public Projects</li>
            <li><FontAwesomeIcon icon={faCheck} />
              {" "}Community Access</li>
            <li>{pricingList.scheme === "FREE" ? <p style={{ color: 'grey' }}><FontAwesomeIcon icon={faXmark} />
              {" "}Unlimited Private Projects
            </p> : <p>
              <FontAwesomeIcon icon={faCheck} />
              {" "}Unlimited Private Projects</p>}
            </li>
            <li>{pricingList.scheme === "FREE" ? <p style={{ color: 'grey' }}> <FontAwesomeIcon icon={faXmark} /> {" "}Dedicated Phone Support </p> :
              <p> <FontAwesomeIcon icon={faCheck} />{" "}Dedicated Phone Support</p>}</li>
            <li>{pricingList.scheme === "FREE" ? <p style={{ color: 'grey' }}><FontAwesomeIcon icon={faXmark} /> {" "}Free Subdomain </p> :
              <p><FontAwesomeIcon icon={faCheck} />{" "}Free Subdomain</p>}
            </li>
            <li>{pricingList.scheme === "PRO" ? <p ><FontAwesomeIcon icon={faCheck} /> {" "}Monthly Status Report </p> :
              <p style={{ color: 'grey' }}><FontAwesomeIcon icon={faXmark} />{" "}Monthly Status Report</p>}
            </li>
          </ul>
          <div className='button-box'>
            <Button variant="contained" style={{ width: 300, height: 50, borderRadius: 30 }}>Button</Button>
            {/* <Button variant="contained" size="300px" >
            Button
          </Button> */}

          </div>
        </div>
      </Card >
    </div >
  );
}

export default App;
