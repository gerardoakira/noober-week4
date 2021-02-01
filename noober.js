async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  console.log(json.length)
  
  function fullName(rideLeg){
    return `${rideLeg.passengerDetails.first} ${rideLeg.passengerDetails.last}`
  }
  function numberOfPassengers(rideLeg){
    if(rideLeg.numberOfPassengers==1) {
      return `${rideLeg.numberOfPassengers} Passenger`
    } else {
      return `${rideLeg.numberOfPassengers} Passengers`
    }
  }
  function levelOfService(ride){
    if (ride.length > 1) {
      return `Noober Pool`
    } else if (ride[0].purpleRequested==true) {
      return `Noober Purple`
    } else if (ride[0].numberOfPassengers > 3) {
      return `Noober XL`
    } else {
      return `Noober X`
    }
  }

  function rideDisplay(ride) {
    
    let outputElement = document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService(ride)}</span>
      </h1> 
      `)

    for (let i = 0; i < ride.length; i++) {

      if(levelOfService(ride)=='Noober Purple'){
      let outputElement = document.querySelector('.rides')
      outputElement.insertAdjacentHTML('beforeend', `
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${fullName(ride[0])}</h2>
            <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
              ${numberOfPassengers(ride[0])}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[0].pickupLocation.address}</p>
            <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[0].dropoffLocation.address}</p>
            <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
      `)
      } else {
        let outputElement = document.querySelector('.rides')
        outputElement.insertAdjacentHTML('beforeend', `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${fullName(ride[0])}</h2>
              <p class="font-bold text-gray-600">${ride[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${numberOfPassengers(ride[0])}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${ride[0].pickupLocation.address}</p>
              <p>${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${ride[0].dropoffLocation.address}</p>
              <p>${ride[0].dropoffLocation.city}, ${ride[0].dropoffLocation.state} ${ride[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        `)
      }
  
    }
  }


  for (let i = 0; i < json.length; i++) {
    ride=json[i]
    rideDisplay(ride)
  }
}

window.addEventListener('DOMContentLoaded', pageLoaded)
