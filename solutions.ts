const multiplyValue =(value: number, multiplier?: number): number=>{
    if(multiplier !== undefined){
        return value * multiplier;
    }
    return value*2;
}
multiplyValue(10);