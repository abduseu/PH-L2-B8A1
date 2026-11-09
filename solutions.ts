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


type TLocation = readonly[number, number, string]
const formatCoordinate =(location: TLocation ) : string=>{
    const [latitude, longitude, locationName] = location;

    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (
    courses: Course[],
    minStudents: number
): Course[] => {
    return courses.filter(course =>
        course.isPublished === true &&
        course.students >= minStudents
    );
};

