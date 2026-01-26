const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Frontend Developer",
    description: "Passionate frontend developer who loves building clean and interactive UI with HTML, CSS and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "UI"]
  },
  {
    fullName: "Priya Verma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-centered design and smooth digital experiences.",
    tags: ["UI", "UX", "Figma", "Design"]
  },
  {
    fullName: "Rohan Mehta",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Backend Developer",
    description: "Backend developer experienced in building scalable APIs and server-side applications.",
    tags: ["Node.js", "API", "Database", "Backend"]
  },
  {
    fullName: "Neha Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Digital marketing expert specializing in SEO, content strategy and social media growth.",
    tags: ["SEO", "Marketing", "Content", "Social Media"]
  }
];

var sum  = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
});

var main = document.querySelector("main");

main.innerHTML = sum
