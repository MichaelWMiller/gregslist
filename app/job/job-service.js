function JobService() {
    //PRIVATE

    var jobs = []

    function Job(position, location, salary, description, img) {
        this.position = position
        this.location = location
        this.salary = salary
        this.description = description
        this.img = img
    }

    //PUBLIC

    this.getJob = function getJob() {
        return JSON.parse(JSON.stringify(jobs))
    }

    //position, location, salary, description, img
    this.addJob = function addJob(jobObj) {
        var newJob = new Job(jobObj.position, jobObj.location, jobObj.salary, jobObj.description, jobObj.img)
        jobs.push(newJob)
    }

    jobs.push(new Job('Developer', 'Boise, ID', 33000, 'lorem ipsum pollywolly doodle, kid', 'http://www.homemade-preschool.com/images/silhouette-t-rex.png'))
    jobs.push(new Job('Donkey Breeder', 'Idaho Falls, ID', 10400, 'lorem ipsum pollywolly doodle, kid', 'http://www.homemade-preschool.com/images/silhouette-t-rex.png'))
    jobs.push(new Job('Hay Stacker', 'Great Falls, MT', 26120, 'lorem ipsum pollywolly doodle, kid', 'http://www.homemade-preschool.com/images/silhouette-t-rex.png'))
    jobs.push(new Job('Zoo Servicer', 'Tahiti', 175000, 'lorem ipsum pollywolly doodle, kid', 'http://www.homemade-preschool.com/images/silhouette-t-rex.png'))
    jobs.push(new Job('Banana Picker', 'Juneau, AK', 33000, 'lorem ipsum pollywolly doodle, kid', 'http://www.homemade-preschool.com/images/silhouette-t-rex.png'))

}