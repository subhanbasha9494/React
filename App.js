const heading = React.createElement("div",{id:"heading"},
    [
    React.createElement("div",{id:"child1"},
        [
        React.createElement("h1",{},"I AM an H1 tag"),
        React.createElement("h2",{},"I AM an H2 tag")
        ]),
    React.createElement("div",{id:"child2"},
            [
            React.createElement("h1",{},"I AM an H1 tag"),
            React.createElement("h2",{},"I AM an H2 tag")
            ])
    ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);