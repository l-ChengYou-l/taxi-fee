module.exports = function taxiFee(inpuuts) {
    let price = 0
    if(inpuuts.distance <= 2){
        price = 6+inpuuts.parkTime*0.25
    }else if(inpuuts.distance>2&&inpuuts.distance<=8){
        price = 6+(inpuuts.distance-2)*0.8+inpuuts.parkTime*0.25
    }else{
        price = Number((6+6*0.8+(inpuuts.distance-8)*0.8*1.5+inpuuts.parkTime*0.25).toFixed(1))
    }
    console.log(price);
    return price;
};