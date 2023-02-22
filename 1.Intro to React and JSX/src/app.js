
const rootElement = document.getElementById('root');
//console.dir(rootElement)
const root = ReactDOM.createRoot(rootElement)

{/* const headingElemnt = React.createElement('h1', {}, 'Hello form React!')
const secondHeadingElement = React.createElement('h2', {}, 'Hello I am here!')
const headerElement = React.createElement('header', {}, headingElemnt, secondHeadingElement)
//console.log(JSON.stringify(headingElemnt)) */}

//use JSX Syntax

{
    const headerElement = (
        <div>
            <header className="header-container">
                <h1 className="heading">Hello from me!</h1>
                <h2>I'm here React!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id assumenda eius cumque corrupti natus illo, modi ad quas! Vero, omnis?</p>
            </header>
            <button>Clkick</button>

        </div>
    );

    root.render(headerElement);
}





