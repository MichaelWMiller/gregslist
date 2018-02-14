function PropertyController() {
    //private
    var propertyService = new PropertyService()

    function draw() {
        var propArr = propertyService.getProperty()
        var template = ``
        for (var i = 0; i < propArr.length; i++) {
            var prop = propArr[i]
            template += `
    <div class="col-sm-3">
        <img src="http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png">
        <p>   Location:  <span>${prop.location}</span></p>
        <p>      Price:  <span>${prop.price}</span></p>
        <p>Square Feet:  <span>${prop.sqfeet}</span></p>
        <p>      Acres:  <span>${prop.acres}</span></p>
    </div>
        `
        }
        document.getElementById('propertyBoard').innerHTML = template
    }

    this.addProperty = function addProperty(event, formId) {
        event.preventDefault();
        var form = event.target
            //<!--   location, price, sqfeet, acres, img -->
        var propertyObj = {
            location: form.location.value,
            price: form.price.value,
            sqfeet: form.sqfeet.value,
            acres: form.acres.value,
            img: form.img.value
        }
        propertyService.addProperty(propertyObj)
        document.getElementById('property-form').reset()
        draw()

    }


    function hideOtherForms() {
        document.getElementById("autos").style.visibility = "hidden"
        document.getElementById("jobs").style.visibility = "hidden"

        document.getElementById("properties").style.visibility = "visible"

    }

    this.goProperties = function goProperties() {
        hideOtherForms()
        draw()
    }

}