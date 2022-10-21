
// basic info
var fullName;
var dob;

// contact info
var emailId;
var phone;
var line1;
var line2;
var city;
var state;
var pincode;
var country;
var linkedIn;

// education info
var university;
var degree;
var classXSchool;
var classXMarks;
var classXYear;
var classXIISchool;
var classXIIMarks;
var classXIIYear;

// occupation info
var currRole;
var currStartYear;
var pastRole1;
var pastRole1StartYear;
var pastRole1EndYear;
var pastRole2;
var pastRole2StartYear;
var pastRole2EndYear;

// skills & achievements
var skill1;
var skill2;
var skill3;
var skill4;
var achievement1;
var achievement2;
var achievement3;
var achievement4;

function ProcessForm() {

    // Basic Info
    fullName = document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    dob = document.getElementById('dateOfBirth').value;

    document.getElementById('name-out').textContent += fullName;
    document.getElementById('dob-out').textContent += dob;

    // Contact Info
    emailId = document.getElementById('eMail').value;
    phone = document.getElementById('phoneNo').value;
    line1 = document.getElementById('addrLine1').value;
    line2 = document.getElementById('addrLine2').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    pincode = document.getElementById('pincode').value;
    country = document.getElementById('country').value;
    linkedIn = document.getElementById('linkedIn').value;

    document.getElementById('email-out').textContent += emailId;
    document.getElementById('phone-out').textContent += phone;
    document.getElementById('address-out').textContent += line1 + "\n" + line2 + "\n" + city + "\n" + state + "\n" + pincode + "\n" + country;
    document.getElementById('linkedin-out').textContent += linkedIn;

    // Education Info
    university = document.getElementById('univ').value;
    degree = document.getElementById('degree').value;
    classXSchool = document.getElementById('xSchool').value;
    classXMarks = document.getElementById('xMarks').value;
    classXYear = document.getElementById('xYear').value;
    classXIISchool = document.getElementById('xiiSchool').value;
    classXIIMarks = document.getElementById('xiiMarks').value;
    classXIIYear = document.getElementById('xiiYear').value;

    document.getElementById('univ-out').textContent += university;
    document.getElementById('degree-out').textContent += degree;
    document.getElementById('xSchool-out').textContent += classXSchool;
    document.getElementById('xMarks-out').textContent += classXMarks;
    document.getElementById('xYear-out').textContent += classXYear;
    document.getElementById('xiiSchool-out').textContent += classXIISchool;
    document.getElementById('xiiMarks-out').textContent += classXIIMarks;
    document.getElementById('xiiYear-out').textContent += classXIIYear;

    // Occupation Info
    currRole = document.getElementById('currentRole').value;
    currStartYear = document.getElementById('currentStart').value;
    pastRole1 = document.getElementById('pastRole1').value;
    pastRole1StartYear = document.getElementById('past1Start').value;
    pastRole1EndYear = document.getElementById('past1End').value;
    pastRole2 = document.getElementById('pastRole2').value;
    pastRole2StartYear = document.getElementById('past2Start').value;
    pastRole2EndYear = document.getElementById('past2End').value;

    document.getElementById('curr-role-out').textContent += currRole;
    document.getElementById('curr-start-out').textContent += currStartYear;
    document.getElementById('past1-role-out').textContent += pastRole1;
    document.getElementById('past1-start-out').textContent += pastRole1StartYear;
    document.getElementById('past1-end-out').textContent += pastRole1EndYear;
    document.getElementById('past2-role-out').textContent += pastRole2;
    document.getElementById('past2-start-out').textContent += pastRole2StartYear;
    document.getElementById('past2-end-out').textContent += pastRole2EndYear;

    // Skills & Achievements Info
    skill1 = document.getElementById('keySkill1').value;
    skill2 = document.getElementById('keySkill2').value;
    skill3 = document.getElementById('keySkill3').value;
    skill4 = document.getElementById('keySkill4').value;

    achievement1 = document.getElementById('achi1').value;
    achievement2 = document.getElementById('achi2').value;
    achievement3 = document.getElementById('achi3').value;
    achievement4 = document.getElementById('achi4').value;

    document.getElementById('skill1-out').textContent += skill1;
    document.getElementById('skill2-out').textContent += skill2;
    document.getElementById('skill3-out').textContent += skill3;
    document.getElementById('skill4-out').textContent += skill4;
    document.getElementById('achivement1-out').textContent += achievement1;
    document.getElementById('achivement2-out').textContent += achievement2;
    document.getElementById('achivement3-out').textContent += achievement3;
    document.getElementById('achivement4-out').textContent += achievement4;

    // Display toggles
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('outputForm').style.display = 'block';
}

function LoadForm() {
    window.location.href = "assgn7B.html";
}