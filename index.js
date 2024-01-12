const inputName = document.getElementById("input-name")
const inputRole = document.getElementById("input-role")
const inputAvail = document.getElementById("input-availability")
const inputAge = document.getElementById("input-age")
const inputLocation = document.getElementById("input-location")
const inputExp = document.getElementById("input-exp")
const inputEmail = document.getElementById("input-email")
const btnSubmit = document.getElementById("btn-submit")

const profileName = document.getElementById("profile-name")
const profileRole = document.getElementById("profile-role")
const profileAvail = document.getElementById("profile-availability")
const profileAge = document.getElementById("profile-age")
const profileLocation = document.getElementById("profile-location")
const profileExp = document.getElementById("profile-exp")
const profileEmail = document.getElementById("profile-email")

function clrForm() {
    inputName.value = ""
    inputRole.value = ""
    inputAvail.value = ""
    inputAge.value = ""
    inputLocation.value = ""
    inputExp.value = ""
    inputEmail.value = ""
}

function changeProfile(profile) {
    profileName.innerText = profile.name 
    profileRole.innerText = profile.role
    profileAvail.innerText = profile.avail
    profileAge.innerText = profile.age
    profileLocation.innerText = profile.loc
    profileExp.innerText = profile.exp
    profileEmail.innerText = profile.email
}

btnSubmit.addEventListener("click", (e) => {
    const profile = {
        name : inputName.value,
        role : inputRole.value,
        avail : inputAvail.value,
        age : inputAge.value,
        loc : inputLocation.value,
        exp : inputExp.value,
        email : inputEmail.value,
    }
    changeProfile(profile)
    clrForm()
})
