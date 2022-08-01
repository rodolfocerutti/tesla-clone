import React from "react"
import Button from "./Button"
import './Item.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Item = ({title, desc, backgroundImg, leftBtnText, leftBtnlink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">
                        <Button imp='primary' text={leftBtnlink} link={leftBtnlink}/>
                        
                        {twoButtons && (
                           <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} /> 
                        )}
                    </div>
                    {first && (
                        <div className="item__expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Item