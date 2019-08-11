import SimplReact from '../../dist/simplreact.es5';

const element = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", props: { value: "foo", type: "text" } },
      { type: "a", props: { href: "/bar" } },
      { type: "span", props: {} }
    ]
  }
};

SimplReact.render(element, document.getElementById("root"));

console.log("hi Hello");