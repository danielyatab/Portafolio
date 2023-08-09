
export const controlTheme = () => {

  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let active = null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //chequea el tema
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      active = true;
      return;
    }
    active = false;
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "ligth");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
  themeCheck();

  return {
    themeSwitch,
    active
  }
}
