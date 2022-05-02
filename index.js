var arr = [
  {
    guest_type: "crew",
    first_name: "Marco",
    last_name: "Burns",
    guest_booking: {
      room_no: "A0073",
      some_array: [7, 2, 4],
    },
  },
  {
    guest_type: "guest",
    first_name: "John",
    last_name: "Doe",
    guest_booking: {
      room_no: "C73",
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Jane",
    last_name: "Doe",
    guest_booking: {
      room_no: "C73",
      some_array: [1, 3, 5, 2, 4, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Albert",
    last_name: "Einstein",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: "crew",
    first_name: "Jack",
    last_name: "Daniels",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
  {
    guest_type: "guest",
    first_name: "Alan",
    last_name: "Turing",
    guest_booking: {
      room_no: "B15",
      some_array: [2, 5, 6, 3],
    },
  },
];

function flattenBooking(booking) {
  const guestBookingKey = "guest_booking";
  if (guestBookingKey in booking) {
    const someArray = booking[guestBookingKey]["some_array"];
    delete booking[guestBookingKey]["some_array"];
    booking["some_array"] = someArray;
  }
}

function setSumOfSomeArray(booking) {
  const total = booking["some_array"].reduce((acc, curr) => acc + curr);

  booking["sum_total"] = total;
}

function isGuest(booking) {
  return booking["guest_type"] === "guest";
}

// Sorts an array with last name being priority and then first name.
function sortOnLastAndFirst(a, b) {
  const aName = `${a.last_name}, ${a.first_name}`;
  const bName = `${b.last_name}, ${b.first_name}`;
  if (aName > bName) return 1;
  else if (aName < bName) return -1;
  return 0;
}

function mutateArray(a) {
  const resultArray = [];

  for (let index = 0; index < a.length; index++) {
    const booking = a[index];

    flattenBooking(booking);

    setSumOfSomeArray(booking);

    if (isGuest(booking)) {
      resultArray.push(booking);
    }
  }
  resultArray.sort(sortOnLastAndFirst);

  return resultArray;
}

$(document).ready(function () {
  $("#originalArray").html(JSON.stringify(arr, null, 2));
  $("#resultsArray").html(JSON.stringify(mutateArray(arr), null, 2));
});
