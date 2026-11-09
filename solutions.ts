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


const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {
    return items.map(item => item[key]);
};


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


