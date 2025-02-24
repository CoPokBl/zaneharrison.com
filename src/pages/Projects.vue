<script setup>
// Functions
import Project from "@/components/Projects/Project.vue";

function httpGetAsync(theUrl, verb, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState !== 4) {
      return;
    }
    callback(xmlHttp.responseText, xmlHttp.status);
  }
  xmlHttp.open(verb, theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function checkApi(elementId, url) {
  httpGetAsync(url, "GET", function callback(responseText, status) {
    let element = document.getElementById(elementId);

    if (status === 200) {
      // Ok
      element.innerHTML = "Online";
      return;
    }
    if (status === 0) {
      // Failed
      element.innerHTML = "Offline (Connection Failed)";
      return;
    }
    if (status === 500) {
      // Internal Server Error
      element.innerHTML = "Broken (Internal Server Error)";
      return;
    }
    // Unknown error
    element.innerHTML = "Error (" + status + ")";
  });

}


// Load HomeworkTrackerServer status
checkApi("homeworkServerStatus", "https://homeworktrack.serble.net:9897/api/");
checkApi("serbleApiStatus", "https://api.serble.net/swagger/index.html");
</script>

<template>
  <main>
    <div class="starter-template">
      <h1>My Projects</h1>
      <p class="lead">
        Here are some projects that I have created. Most are open source and can be found on my GitHub.
        Keep in mind that some of these projects are old and aren't maintained are not an accurate representation of my current skill level.
        Feel free to check any of them out and submit a pull request if you want to contribute, or just try them out if you feel like it.
      </p>

    </div>

    <div class="container">
      <div class="row projects-container">
        <project title="Serble API" link_name="GitHub" link="https://github.com/Serble/SerbleAPI" img_url="/projects/serble_logo.png">
          <p>
            Serble is my project where I make a tonne of services and online things. It is where I experiment with new things.
            The API contains payment login with Stripe and an account system I made from scratch.
            It's live at <a href="https://api.serble.net">api.serble.net</a> and is being used by <a href="https://serble.net">serble.net</a>
            among other things. It is currently <b id="serbleApiStatus">Loading Server Status...</b>.
          </p>
        </project>

        <project title="Ancraophobia" link_name="Website" link="https://ancraophobia.net" img_url="/projects/logo_with_background.png">
          <p>
            Ancraophobia is a game I made in Godot, it is a 3D investigation horror game where you investigate
            a haunted house to try and trap the ghost inside.
          </p>
        </project>

        <project title="Mouse Moves Food: The Game" link_name="Itch Page" link="https://calcilator.itch.io/mouse-moves-food-the-game" img_url="/projects/mousemovesfood.png">
          <p>
            This game is a game that me and 2 other friends made for a game jam over the course of 2 days.
            I'm quite proud of it but keep in mind that everything you see was produced in 48 hours,
            including every assets and sound.
          </p>
        </project>

        <project title="Democracy Discord Bot" link_name="GitHub" link="https://github.com/CoPokBl/DemocracyBot" img_url="/projects/no_icon.png">
          <p>
            The democracy bot is designed to have one instance per guild. It allows users to vote on who should get guild permissions to
            do things like add/remove channels and add/remove roles.
          </p>
        </project>

        <project title="EsTools" link_name="GitHub" link="https://github.com/CoPokBl/EsTools" img_url="/projects/estools.png">
          <p>
            A general purpose Minecraft Spigot/CraftBukkit plugin inspired by EssentialsX but is designed to not override any default Minecraft commands
            and is more lightweight and simple. It supports every version from 1.0 to 1.21 which is every single downloadable Bukkit version. This is my
            project but had a lot of work done by <a href="https://github.com/Calcilore">a friend of mine</a>.
          </p>
        </project>

        <project title="Ultimate UHC" link_name="GitHub" link="https://github.com/CoPokBl/UltimateUHC" img_url="/projects/no_icon.png">
          <p>
            Ultimate UHC is an Ultra Hardcore competition plugin for Minecraft Spigot/CraftBukkit, it was one of my first plugins, at one point I came back
            to it and completely refactored it (Literally all the code was in one class). This plugin allows you to host UHC games in 1.8-1.18.
          </p>
        </project>

        <project title="Better Combat" link_name="GitHub" link="https://github.com/CoPokBl/BetterCombat" img_url="/projects/no_icon.png">
          <p>
            Better Combat is a Minecraft Spigot/CraftBukkit plugin designed to improve 1.16 combat (although it works on most modern versions).
            This plugin is very old and is badly made but due to me losing interest in the latest version combat so I stopped updating it.
            It adds a very weird push mechanic as well as changing damage amounts, but I enjoyed it.
          </p>
        </project>

        <project title="Homework Tracker Server" link_name="GitHub" link="https://github.com/CoPokBl/HomeworkTrackerServer" img_url="/projects/no_icon.png">
          <p>
            This is an ASP.NET API project designed to allow users to save homework tasks on a server and access it on any device.
            This is just the server part of the project, I also made a client in Unity (I know it sounds really scuffed). This project
            was important because it was how I learned a lot about HTTP and ASP.NET, it was originally made using the TcpListener object
            in C#. This project is also when I learned a bit more about git and started using it better.
            I am hosting an instance of the server at
            <a href="https://homeworktrack.serble.net:9897/">homeworktrack.serble.net:9897</a> and it is currently <b id="homeworkServerStatus">Loading Server Status...</b>.
          </p>
        </project>

      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
