function JobController() {
    //private
    var jobService = new JobService()

    function draw() {
        var jobArr = jobService.getJob()
        var template = ``
        for (var i = 0; i < jobArr.length; i++) {
            var job = jobArr[i]
            template += `
            <div class = "col-sm-3">    
                <img src="$http://www.homemade-preschool.com/images/silhouette-t-rex.png">
                <p>Position: <span>${job.position}</span></p>
                <p>Location:  <span>${job.location}</span></p>
                <p>Salary:  <span>${job.salary}</span></p>
                <p>Description:  <span>${job.description}</span></p>
            </div>
            `
            document.getElementById('jobBoard').innerHTML = template
        }

    }
    //position, location, salary, description, img

    this.addJob = function addJob(event, formId) {
        debugger
        event.preventDefault();
        var form = event.target
        var jobObj = {
            position: form.position.value,
            location: form.location.value,
            salary: form.salary.value,
            description: form.description.value,
            img: form.img.value
        }
        jobService.addJob(jobObj)
        document.getElementById(job - form).reset()
        draw()
    }

    function hideOtherForms() {
        document.getElementById("autos").style.visibility = "hidden"
        document.getElementById("properties").style.visibility = "hidden"

        document.getElementById("jobs").style.visibility = "visible"

    }

    this.goJobs = function goJobs() {
        hideOtherForms()
        draw()
    }
}