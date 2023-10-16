export const  currencyFormatter=(price)=>{
  if(!price) return;
  return price.toLocaleString("bn-bd",{
    style:"currency",
    currency:"BDT"
  })
}