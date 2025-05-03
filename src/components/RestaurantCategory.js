import Itemlist from "./Itemlist";

const RestaurantCategory=({category,showItems,setAccordionValue})=>{
    console.log("categoryData",category);
    const expandAccordion=()=>{
        console.log("clicked accordin",setAccordionValue)
        setAccordionValue();
    }
    return (
      <div className="accordian">
      
        <div className="accordian-text">
        <span>{category?.title}({category?.itemCards?.length})</span>
        
        <span onClick={expandAccordion} className="accordian-click">⬇️</span>      </div>
        {category?.itemCards?.map((item,index)=>{
            const uniqueKey = item?.id || item?.card?.info?.id || index; // Fallback to index if no unique key exists
            return  (
                <div className="item-card " key={index}>
                    {showItems && <Itemlist itemList={item} key={uniqueKey}/>}
                </div>
           )
        })}
  
      </div>
    )
}
export default RestaurantCategory;