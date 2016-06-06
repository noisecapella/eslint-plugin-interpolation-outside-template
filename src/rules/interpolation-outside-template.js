export default context => {
  return {
    "Literal": node => {
      if (typeof node.value === typeof "") {
        if (node.value.indexOf("${") !== -1) {
          context.report({
            node: node,
            message: "Unexpected template interpolation."
          });
        }
      }
    }
  };
};

export const schema = [
  {
    "enum": ["always", "never"]
  }
];
