# Difference between Type and Interface in TypeScript

## Introduction
Both of them in typescript are used for defining the data type. They help us to describe what properties and types an object should have. However, they have some important differences.

## Core Differences
**Interface:** It is used to define the structure of objects and classes. Interfaces can be extended using `extends`. It can be reopened through declaration merging.

**Type:** On the other hand, It is used to define objects, unions, intersections, etc. Types cannot be reopened through declaration merging.

### Code Example

```typescript
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    role: string;
}

type Status = "active" | "inactive";

type Employee = User & {
    salary: number;
};
```


## Conclusion
Interface and Type both are helpful for defining types in TypeScript. Based on the situation, have to deside wisely which one to chose.