{
    init: function(elevators, floors) {

        floors.map((floor) => {

            floor.on("up_button_pressed", function(floor) {
                console.log('Up Button Pressed on floor ' + floor.floorNum());
                // elevator.goToFloor(floor.floorNum());
            });

            floor.on("down_button_pressed", function() {
                // elevator.goToFloor(floor.floorNum());
                console.log('Down Button Pressed on floor ' + floor.floorNum());
            });

        });

        elevators.map((elevator) => {

            elevator.on("idle", function() {
                // let's go to all the floors (or did we forget one?)
                console.log('Elevator is idle');
                console.log('Elevator load factor: ' + elevator.loadFactor());

                floors.map();

            });



        })

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
