import React from "react";

export default function Account() {


    function openName(evt, Name) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(Name).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();



  return (
    <div>
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-4">
          <div class="tab">
            <button
              class="tablinks"
              onclick="openName(event, 'CEA')"
              id="defaultOpen"
            > Home
            </button>
            <button class="tablinks" onclick="openName(event, 'CC')">
              Session
            </button>
            <button class="tablinks" onclick="openName(event, 'sponsor')">
              Download
            </button>
            <button class="tablinks" onclick="openName(event, 'pr')">
              Setting
            </button>
            <button class="tablinks" onclick="openName(event, 'treasurer')">
              About
            </button>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-8">
          <span>
          <div id="CEA" class="tabcontent"></div>
          <div id="CC" class="tabcontent"></div>
          <div id="sponsor" class="tabcontent"></div>
          <div id="pr" class="tabcontent"></div>
          <div id="treasurer" class="tabcontent"></div></span>
        </div>
      </div>
    </div>
  );
}
