import { navigation } from "./components/navigation";
import { carField } from "./components/carField";
const garage = document.querySelector(".car_wrapper");

export function app() {
  navigation();
  garage!.innerHTML += carField({ name: "Mitsubishi", color: "#fede00", id: 2 });
  // garage?.appendChild(carField({ name: "Mitsubishi", color: "#fede00", id: 2 }));
}
