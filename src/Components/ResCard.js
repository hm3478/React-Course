import { IMG_URL } from "../utils/constants";
const ResCard=(props)=>{
    const{
            resData
    }=props;

    const{
            name, 
            cuisines,
            costForTwo,
            avgRating,
            sla,
            cloudinaryImageId
    }=resData?.info

    return(
            <div className="Res-Card">
                    
                    {/* `${IMG_URL}${cloudinaryImageId}` */}
                            <img className="card-img" src={IMG_URL+cloudinaryImageId} alt="Meghana"/>
                            <h3>{name}</h3>
                            <h4>{cuisines}</h4>
                            <h4>{costForTwo}</h4>
                            <h4>{avgRating}</h4>
                            <h4>{sla?.deliveryTime} mins</h4>
                    
            </div>
    );
};
export default ResCard;