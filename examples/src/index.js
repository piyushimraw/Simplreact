import SimplReact from '../../dist/simplreact.es5';

const element = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", 
        props: { 
          onClick: (e) => console.log(e),
          value: 'hi',
        } 
      },
    ]
  }
};

SimplReact.render(element, document.getElementById("root"));