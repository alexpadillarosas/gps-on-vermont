
export function headerScrolling() {
  document.body.classList.add("landing-page");
  document.body.classList.add("sidebar-collapse");
  document.documentElement.classList.remove("nav-open");
  return function cleanup() {
    document.body.classList.remove("landing-page");
    document.body.classList.remove("sidebar-collapse");
  };
}

 