// https://github.com/lzt-upgrade/coloris-lzt-theme/blob/47e2a9ebabfc7172bf188cbc06eba73c88b46b09/src/coloris.js#L14
const colorPickerOptions = {
  theme: "lzt", // theme
  themeMode: "dark", // theme mode
  formatToggle: true, // change the format (RGB, HEX, HSV)
  closeButton: true, // button to close color picker
  clearButton: true, // button to clear color picker
  alpha: true, // alpha channel
  swatches: [], // colors for select
};

// use .xenOverlay for modals
function initColorPickers(parent = ".xenOverlay") {
  const colorPickers = document.querySelectorAll(".LZTUpColorPicker");
  for (const colorPicker of colorPickers) {
    // fix for reopen modal
    if (!document.querySelector(".clr-picker")) {
      try {
        // ! read coloris-lzt-theme init description
        Coloris.init(parent);
      } catch (e) {
        console.error(e);
      }
    }
    try {
      Coloris(
        Object.assign(colorPickerOptions, {
          el: `#${colorPicker.id}`,
          parent: parent,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  }
}

export { initColorPickers };
