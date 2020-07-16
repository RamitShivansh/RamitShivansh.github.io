var projects = document.getElementsByClassName("project-card");
var skills = document.getElementsByClassName("skill-card");
var dontClose = false;

var buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", () => {
    dontClose = true;
  });

  buttons[i].addEventListener("mouseout", () => {
    dontClose = false;
  });
}

var rowLen = Math.sqrt(projects.length);
for (var i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseover", hoverStart);
  projects[i].addEventListener("mouseout", hoverEnd);
}

function hoverStart(e) {
  var target = e.target;
  var j;
  for (j = 0; j < projects.length; j++) {
    if (projects[j] === target) {
      break;
    }
  }
  if (j >= projects.length) {
    target =
      target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    for (j = 0; j < projects.length; j++) {
      if (projects[j] === target) {
        break;
      }
    }
  }

  if ((j + 1) % rowLen != 0) {
    projects[j + 1].classList.add("horizontal");
  }
  if (j % rowLen != 0) {
    projects[j - 1].classList.add("horizontal");
  }
  if (j < projects.length - rowLen) {
    projects[j + rowLen].classList.add("vertical");
  }
  if (j >= rowLen) {
    projects[j - rowLen].classList.add("vertical");
  }

  if(window.innerWidth < 500) {
    for (var j = 0; j < projects.length; j++) {
        if (projects[j] !== e.target) {
          projects[j].classList.remove("vertical");
          projects[j].classList.remove("horizontal");
          projects[j].classList.add("not-in-focus");
        }
      }
  }
}

function hoverEnd(e) {
  var target = e.target;
  var j;
  for (j = 0; j < projects.length; j++) {
    if (projects[j] === target) {
      break;
    }
  }

  if ((j + 1) % rowLen != 0) {
    projects[j + 1].classList.remove("horizontal");
  }
  if (j % rowLen != 0) {
    projects[j - 1].classList.remove("horizontal");
  }
  if (j < projects.length - rowLen) {
    projects[j + rowLen].classList.remove("vertical");
  }
  if (j >= rowLen) {
    projects[j - rowLen].classList.remove("vertical");
  }

  if(window.innerWidth < 500) {
    for (var j = 0; j < projects.length; j++) {
        if (projects[j] !== e.target) {
          projects[j].classList.remove("not-in-focus");
        }
      }
  }
}

// if (window.innerWidth < 500) {
//   for (var i = 0; i < projects.length; i++) {
//     projects[i].addEventListener("click", (e) => {
//       for (var j = 0; j < projects.length; j++) {
//         if (projects[j] !== e.target) {
//           projects[j].classList.remove("vertical");
//           projects[j].classList.remove("horizontal");
//           projects[j].classList.add("not-in-focus");
//         }
//       }
//     });
//   }
// }

for (var i = 0; i < skills.length; i++) {
  skills[i].addEventListener("mouseover", skillHoverStart);
  skills[i].addEventListener("mouseout", skillHoverEnd);
}

function skillHoverStart(e) {
  var target = e.target;
  var j;
  for (j = 0; j < skills.length; j++) {
    if (skills[j] === target) {
      break;
    }
  }

  if ((j + 1) % rowLen != 0) {
    skills[j + 1].classList.add("horizontal");
  }
  if (j % rowLen != 0) {
    skills[j - 1].classList.add("horizontal");
  }
  if (j < skills.length - rowLen) {
    skills[j + rowLen].classList.add("vertical");
  }
  if (j >= rowLen) {
    skills[j - rowLen].classList.add("vertical");
  }

  if(window.innerWidth < 500) {
    for (var j = 0; j < skills.length; j++) {
        if (skills[j] !== e.target) {
          skills[j].classList.remove("vertical");
          skills[j].classList.remove("horizontal");
          skills[j].classList.add("not-in-focus");
        }
      }
  }
}

function skillHoverEnd(e) {
  var target = e.target;
  var j;
  for (j = 0; j < skills.length; j++) {
    if (skills[j] === target) {
      break;
    }
  }

  if ((j + 1) % rowLen != 0) {
    skills[j + 1].classList.remove("horizontal");
  }
  if (j % rowLen != 0) {
    skills[j - 1].classList.remove("horizontal");
  }
  if (j < skills.length - rowLen) {
    skills[j + rowLen].classList.remove("vertical");
  }
  if (j >= rowLen) {
    skills[j - rowLen].classList.remove("vertical");
  }

  if(window.innerWidth < 500) {
    for (var j = 0; j < skills.length; j++) {
        if (skills[j] !== e.target) {
          skills[j].classList.remove("not-in-focus");
        }
      }
  }
}
