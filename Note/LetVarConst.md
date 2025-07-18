# JavaScript Execution Process
- JavaScript Execution Process: Two Phases
    - Compilation Phase
    - Execution Phase
- Phase 1: Compilation Phase
    - Declaration Scanning: var, let, const, function, class
    - Memory Allocation: Each variable and function declaration is allocated memory in the appropriate scope.
    - Scope Creation: JavaScript builds the scope chain during compilation.
        - Global scope created for global code
        - Function scope for each function
        - Block scope for blocks {} using let/const
    - Temporal Dead Zone (TDZ)
        - For let and const, variables are hoisted but not initialized.
        - They exist in the TDZ — a time between hoisting and declaration line — and cannot be accessed.
- Phase 2: Execution Phase
    - Code is executed top to bottom
    - Values are assigned
    - Functions are invoked
    - Scope rules are enforced
    - Control flows (if/else, loops, etc.) are followed
    - Errors like ReferenceError or TypeError may occur
- Always declare variables at the top of their scope using let or const to avoid confusion with hoisting and TDZ.

# `var`, `let` and `const`
- `var`
    - Function Scope
    - Can be redeclared in same scope
    - Can be reassigned
- `let` 
    - Introduced in ES6(2015)
    - Block Scope
    - Must declare before use
    - Connot be redeclared in the same scope
- `const`
    - Block Scope
    - Must initialize when declare 
    - Cannot be redeclared
    - Cannot be reassigned
- Avoid using `var` in Modern JavaScript
    - Function-scoped
    - Hosting with undefined
    - Can be re-declared
    - TDZ not enforced
