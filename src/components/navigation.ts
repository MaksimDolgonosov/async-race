export function navigation() {
  const garageBtn = document.querySelector(".garage_btn") as HTMLButtonElement;
  const winnersBtn = document.querySelector(".winners_btn") as HTMLButtonElement;
  const garagePage = document.querySelector(".garage_page") as HTMLDivElement;
  const winnersPage = document.querySelector(".winners_page") as HTMLDivElement;

  garageBtn?.addEventListener("click", () => {
    garagePage.style.display = "block";
    winnersPage.style.display = "none";
    // garagePage.style.opacity = "1";
    // garagePage.style.visibility = "visible";
    // winnersPage.style.opacity = "0";
    // winnersPage.style.visibility = "hidden";
  });

  winnersBtn?.addEventListener("click", () => {
    garagePage.style.display = "none";
    winnersPage.style.display = "block";
    // garagePage.style.opacity = "0";
    // garagePage.style.visibility = "hidden";
    // winnersPage.style.opacity = "1";
    // winnersPage.style.visibility = "visible";
  });
}
