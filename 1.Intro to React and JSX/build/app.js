
var rootElement = document.getElementById('root');
//console.dir(rootElement)
var root = ReactDOM.createRoot(rootElement);

{} /* const headingElemnt = React.createElement('h1', {}, 'Hello form React!')
   const secondHeadingElement = React.createElement('h2', {}, 'Hello I am here!')
   const headerElement = React.createElement('header', {}, headingElemnt, secondHeadingElement)
   //console.log(JSON.stringify(headingElemnt)) */

//use JSX Syntax

{
    var headerElement = React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            { className: "header-container" },
            React.createElement(
                "h1",
                { className: "heading" },
                "Hello from me!"
            ),
            React.createElement(
                "h2",
                null,
                "I'm here React!"
            ),
            React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda eius cumque corrupti natus illo, modi ad quas! Vero, omnis?"
            )
        ),
        React.createElement(
            "button",
            null,
            "Clkick"
        )
    );

    root.render(headerElement);
}