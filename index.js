const container = document.getElementById("container");

let watchId = navigator.geolocation.watchPosition(
  (position) => {
    container.textContent = `Latitude: ${position.coords.latitude}\n
    Longitude: ${position.coords.longitude}\n
    Accuracy: ${position.coords.accuracy}`;
  },
  (error) => {
    console.log(`Error Occured: ${error.message}`);
  },
  { enableHighAccuracy: true, maximumAge: 0 }
);

const btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Clear Watch";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchId);
});
