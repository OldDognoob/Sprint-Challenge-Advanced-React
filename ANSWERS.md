- [ ] Why would you use class component over function components (removing hooks from the question)?
     
      The reason of using class component over function component, is that class component allows you 
      to use a variety of component lifecycle methods (render, componentDidMount, componentDidUpdate), that have been introduce by React team to give you the control of your components/functions.

- [ ] Name three lifecycle methods and their purposes.

     1.render()
     The render method is the most used lifecycle method. You will see it in all React classes.
     This is beacuse render() is the only method within a Class component in React.
     React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed.
     This means that you can not setState() within a render().

     2.componentDidMount()
     The componentDidMount() is called as soon as the component is mounted and ready.
     For this reason it's very often used to make http requests, because we only want it to fire once.
     Similar to useEffect in functional components.

     3.componentDidUpdate()
     The lifecycle method in invoked as soon as the updating happens.
     The most common use case fro the componentDidUpdate() method is updating the DOM in response to props or state changes. Passing in previous props, compare them to current props and perform network requests if props do not match.

- [ ] What is the purpose of a custom hook?

     The purpose of using custom hooks is to have a reusable and cleaner code.
     It means to create a functional block of code in order to apply a non-visual behavior and stateful logic.
     In other means we need to keep our code DRY(Dont' repeat yourself).
     In an example of many number of inputs we can create a custom hook that will handle all the input fields.

- [ ] Why is it important to test our apps?

     Testing our application is important as:
     -Surface bugs faster
     -Reduce the risk of regressions
     -Allow us to trust the code
     -Make us think about the edge cases
     -Act as a safety net when we making changes or refactoring
     -Act as documentation for the code
     -Encourage us to write more testable (better!) code.