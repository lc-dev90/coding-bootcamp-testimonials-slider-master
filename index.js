const data = [
  {
    id: "tanya",
    name: "Tanya Sinclair",
    job: "UX Engineer",
    testimonial:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "',
    photo: "./images/image-tanya.jpg",
  },
  {
    id: "john",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    testimonial:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a  professional developer. "',
    photo: "./images/image-john.jpg",
  },
];

const testimonialElement = document.getElementById("text");
const nameElement = document.getElementById("name");
const jobElement = document.getElementById("job");
const photoElement = document.getElementById("photo");

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("right") ||
    e.target.classList.contains("left")
  ) {
    if (nameElement.textContent === "Tanya Sinclair") {
      nameElement.textContent = data[1].name;
      jobElement.textContent = data[1].job;
      testimonialElement.textContent = data[1].testimonial;
      photoElement.setAttribute("src", `${data[1].photo}`);
    } else {
      nameElement.textContent = data[0].name;
      jobElement.textContent = data[0].job;
      testimonialElement.textContent = data[0].testimonial;
      photoElement.setAttribute("src", `${data[0].photo}`);
    }
  }
});
