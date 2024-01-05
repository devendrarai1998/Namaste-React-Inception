/*
 *<div id="parent">
 *   <div id="child">
 *      <h1>I'm child's h1 tag</h1>
 *      <h2>I'm child's h2 tag</h2>
 *   </div>
 * </div> 
 * 
 * React.createElement(object) => HTML(Browser understands)
 */

const heading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I'm child1's h1 tag"),
        React.createElement("h1", {}, "I'm child1's h2 tag"),
    ]),
    React.createElement("div", {id: "child1"}, [
        React.createElement("h1", {}, "I'm child2's h1 tag"),
        React.createElement("h1", {}, "I'm child2's h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
