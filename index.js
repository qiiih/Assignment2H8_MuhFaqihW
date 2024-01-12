const inputName = document.getElementById("input-name")
const inputRole = document.getElementById("input-role")
const inputAvail = document.getElementById("input-availability")
const inputAge = document.getElementById("input-age")
const inputLocation = document.getElementById("input-location")
const inputExp = document.getElementById("input-exp")
const inputEmail = document.getElementById("input-email")
const btnSubmit = document.getElementById("btn-submit")
const main = document.getElementById("main")
const formMain = document.getElementById("form-main")

const profileName = document.getElementById("profile-name")
const profileRole = document.getElementById("profile-role")
const profileAvail = document.getElementById("profile-availability")
const profileAge = document.getElementById("profile-age")
const profileLocation = document.getElementById("profile-location")
const profileExp = document.getElementById("profile-exp")
const profileEmail = document.getElementById("profile-email")

function clrForm() {
    main.remove()
}

function changeProfile(profile) {
    profileName.innerText = profile.name.trim() === "" ? profileName.innerText : profile.name
    profileRole.innerText = profile.role.trim() === "" ? profileRole.innerText : profile.role
    profileAvail.innerText = profile.avail.trim() === "" ? profileAvail.innerText : profile.avail
    profileAge.innerText = profile.age.trim() === "" ? profileAge.innerText : profile.age
    profileLocation.innerText = profile.loc.trim() === "" ? profileLocation.innerText : profile.loc
    profileExp.innerText = profile.exp.trim() === "" ? profileExp.innerText : `${profile.exp} Tahun`
    profileEmail.innerText = profile.email.trim() === "" ? profileEmail.innerText : profile.email
}

formMain.addEventListener("submit", (e) => {
    e.preventDefault()

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
