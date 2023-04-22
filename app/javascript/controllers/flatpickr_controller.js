import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("connected", this.element)

    flatpickr(".start_time", {
      enableTime: true,
      dateFormat: "F j, Y h:i K",
      disable: [
        function (date) {
          return (date.getDay() === 0 || date.getDay() === 6)
        }
      ],
      locale: {
        "firstDayOfWeek": 1
      }
    })
    flatpickr(".end_time", {
      enableTime: true,
      dateFormat: "F j, Y h:i K"
    })
  }
}
