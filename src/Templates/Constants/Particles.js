export const Snowing = {
  particles: {
    color: { value: "#fff" },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 400
    },
    opacity: {
      value: 0.7
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 5
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10
    },
    zIndex: {
      value: { min: 0, max: 100 }
    }
  }
};
