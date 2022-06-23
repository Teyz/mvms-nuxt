export const disableScroll = (disableScroll: boolean): void => {
  const html = document.querySelector("body");
  if (disableScroll) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    html!.style.overflowY = "hidden";
  } else {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    html!.style.overflowY = "auto";
  }
};
