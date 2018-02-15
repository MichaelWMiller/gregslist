function AutoController() {
    //private
    var autoService = new AutoService()

    //html elements
    var serchElem = document.getElementById('search-query')
    var makeElem = document.getElementById('makes-here')
    var modelsElem = document.getElementById('models-here')



    this.exposeMake = function exposeMake(event) {
        //resultsElem.classList.add('hidden')
        console.log('In exposeMake()')
        var query = event.target.value
        autoService.getMakes(drawMakes)
    }

    function drawMakes(res) {
        var arr = []

        arr = res.Results
        var template = `<select onchange="app.controllers.autoCtrl.findModels(event)>`
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i]
            template += `<option value="${item.Make_ID}">${item.Make_Name}</option>`
        }
        template += `</select>`
        makeElem.innerHTML = template
        modelsElem.classList.remove('hidden')
    }



    function draw() {
        var carArr = autoService.getCars()
        var template = ''
        for (let i = 0; i < carArr.length; i++) {
            const car = carArr[i];
            template += `
          <div class="col-sm-3">
            <img src="${car.img}">
            <p>${car.make}</p>
            <p>${car.model}</p>
            <p>${car.price}</p>
          </div>
          `
        }
        document.getElementById('autoBoard').innerHTML = template
    }


    this.addCar = function addCar(event) {
        event.preventDefault();
        var form = event.target
            //carObj.make, carObj.year, carObj.model, carObj.price, carObj.condition, carObj.img
        var carObj = {
            make: form.make.value,
            year: form.year.value,
            model: form.model.value,
            price: form.price.value,
            condition: form.condition.value,
            img: form.img.value
        }
        autoService.addCar(carObj)
        document.getElementById('car-form').reset()
        draw()
    }

    console.log("Controller is up and running")

    function hideOtherForms() {
        document.getElementById("properties").style.visibility = "hidden"
        document.getElementById("jobs").style.visibility = "hidden"

        document.getElementById("autos").style.visibility = "visible"
    }

    this.goAutos = function goAutos() {
        hideOtherForms()
        draw()
    }


    hideOtherForms()
    draw()

}