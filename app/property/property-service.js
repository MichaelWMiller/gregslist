function PropertyService() {

    //PRIVATE

    var properties = []

    function Property(location, price, sqfeet, acres, img) {
        this.location = location
        this.price = price
        this.sqfeet = sqfeet
        this.acres = acres
        this.img = img
    }
    //PUBLIC

    this.getProperty = function getProperty() {
        return JSON.parse(JSON.stringify(properties))
    }

    this.addProperty = function addProperty(propertyObj) {
        var newProperty = new Property(propertyObj.location,
            propertyObj.price, propertyObj.sqfeet,
            propertyObj.acres, propertyObj.img)
    }

    properties.push(new Property('Dallas, OR', 22000, 1400, 1.5, 'http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png'))
    properties.push(new Property('Payette, ID', 58000, 1800, 2.5, 'http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png'))
    properties.push(new Property('Weiser, ID', 147000, 3200, 10, 'http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png'))
    properties.push(new Property('Kuna, ID', 85000, 2700, 5, 'http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png'))
    properties.push(new Property('Boise, ID', 380000, 4200, .25, 'http://visor-ar.com/wp-content/uploads/2016/03/pojo-placeholder-2.png'))



}