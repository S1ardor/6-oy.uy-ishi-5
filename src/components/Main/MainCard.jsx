import { Fragment } from "react";
import './Main.css'
import { Link } from "react-router-dom";

export const MainCard = (props) => {
  const { flags, name, population, subregion, region } = props.countryData;
  return(
    <Fragment>
        <div className="big_box">
              <img className="flag_img" src={flags.png} alt={name.common} />
            <div className="iteams">
              <h2>{name.common}</h2>
              <h3><span>Region:</span> {region}</h3>
              <h3>{subregion}</h3>
              <h3>{population}</h3>
            </div>
        </div>
    </Fragment>
  )
}

