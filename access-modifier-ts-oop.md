# Access Modifiers in TypeScript OOP

## Introduction

With the help of Access modifiers we can control who can access properties and methods inside a TypeScript class. access modifier protect data and make code easier to manage.

## Role of Access Modifiers

**Public:** Its the default access modifier, and can be accessed from .
**Private:** Its the most restricted access modifier that can be accessed within its own class.
**Protected:** Its like privet but can be accessed inside its class and its child classes.
**Readonly:** It can be assigned only once during declaration but cannot be reassigned later.

### Code Example

```typescript
class User {
    public name = "Abdus";
    private password = "12345";
    protected role = "Developer";
    readonly id = 101;
}

const user = new User();

console.log(user.name); // Allowed
// console.log(user.password); // Error
// user.id = 102; // Error
```

## Conclusion

Access modifiers help us to encapsulate the class members. Use `public` for general access, `private` for internal data, `protected` for inheritance, and `readonly` for values that should not change.