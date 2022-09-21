const projects = [
    {
      title: "My Pocket Counsel",
      photo: "img/MPC.jpg",
      preview: "https://mpcwebdemo1.web.app/",
      github: "https://github.com/MyPocketCounsel/templatelibrary",
    },
    {
        title: "SHiiP",
        photo: "img/Shiip.JPG",
        preview: "https://app.goshiip.com/",
        github: "https://github.com/MyPocketCounsel/templatelibrary",
      },
      {
        title: "Huntr",
        photo: "img/Huntrhome.JPG",
        preview: "https://huntr.netlify.app/",
        github: "https://github.com/oladetoungee/Huntr",
      },
      {
        title: "ZuriChat",
        photo: "img/zurichat.JPG",
        preview: "https://www.zuri.chat/",
        github: "https://github.com/oladetoungee/zc_plugin_dm",
      },
      {
        title: "The powerstream",
        photo: "img/powerhome.JPG",
        preview: "https://powerstreamweb.netlify.app",
        github: "https://github.com/oladetoungee/Powerstreamweb",
      },
      {
        title: "Geesplash",
        photo: "img/geesplashhome.JPG",
        preview: "https://geesplash.netlify.app/",
        github: "https://github.com/oladetoungee/Geesplash",
      },
      {
        title: "GeeMovies",
        photo: "img/geemovieshome.JPG",
        preview: "https://geemovies.netlify.app",
        github: "https://github.com/oladetoungee/movie-app",
      },
      {
        title: "GbemisBlog",
        photo: "img/Gbemisbloghomepage.JPG",
        preview: "https://gbemiblog.netlify.app",
        github: "https://github.com/oladetoungee/gbemisBlog",
      },
      {
        title: "Countday",
        photo: "img/birthdaycounthome.JPG",
        preview: "https://mybirthdayiscoming.netlify.app",
        github: "https://github.com/oladetoungee/myBirthdayCountdown",
      },
      {
        title: "Secme",
        photo: "img/secret.JPG",
        preview: "https://secmeapp.netlify.app",
        github: "https://github.com/oladetoungee/secret-message",
      },
  ];
  function generateProjects(array) {
    let pro = "";
    for (let i = 0; i < array.length; i++) {
      pro += `<div class="projects__item">`;
      pro += `<img src='${array[i].photo}' class="projects__image" alt='My Project'>`;
      pro += `<div class="projects__btns">`;
      pro += `<a href="${array[i].preview}" class="projects__btn" target="_blank">
      <i class="fas fa-eye"></i> Preview
    </a>`;
      pro += `<a href="${array[i].github}" class="projects__btn" target="_blank">
    <i class="fas fa-eye"></i> Github
  </a>`;
      pro += `</div>`;
      pro += `<h4>${array[i].title}</h4>`;
      pro += `</div>`;
    }
  
    document.getElementById("project").innerHTML = pro;
  }
  generateProjects(projects)