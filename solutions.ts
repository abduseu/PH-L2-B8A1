const multiplyValue =(value: number, multiplier?: number): number=>{
    if(multiplier !== undefined){
        return value * multiplier;
    }
    return value*2;
}


type TValue = string | number | boolean;
const processInput = (value: TValue): string | number=>{
    if(typeof value === 'string'){
        return value.trim().toLowerCase()
    }else if(typeof value === 'number'){
        return value * 10
    }else if(typeof value === 'boolean'){
        if(value){
            return "Active"
        }
        return "Inactive"
    }else{
        return "";
    }
}

