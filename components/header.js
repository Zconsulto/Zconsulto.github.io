document.addEventListener("DOMContentLoaded", function () {
	var headerTemplate = `
     <section class="top_bar">

     <div class="row" style=" display: flex;
     flex-wrap: nowrap; ">
          <div class="tob_bar_left_col hidden-xs col-sm-6 col-md-6" style="    display: flex;
          width: 30%;
          align-items: center;
          justify-content: left;
          margin-left: 17px;">

          <div style="
          display: flex;
          justify-content: center;
          align-items: center;">
          <p style="color: #21d0b3;height:auto;font-weight: bold;   margin-top: revert; ">
          <i class="fa-solid fa-phone fa-flip-horizontal fa-2xl"></i>&nbsp;&nbsp;</p>
          <b>
               <a href="tel: 1 (929) 332-7886" style="color: black; font-style: normal;" >(929) 332-7886</a>
          </b>
          </p>
               </div>


          </div>
          <div class="tob_bar_right_col col-xs-12 col-sm-6 col-md-6" style="    display: flex;
          gap: 0.2;
          width: 70%;
          align-items: center;
          justify-content: right;
          margin-right: 1px;">
          <div class="icons no">
               <a class="header-social" href="https://www.linkedin.com/company/zconsulto/" target="_blank">
          <span class="fab fa-linkedin-in"></span>
        </a>
       <!--    <a class="header-social" href="https://www.facebook.com/people/Zconsulto/100094921483542/" target="_blank">
          <span class="fab fa-facebook"></span>
         </a>-->
        <a class="header-social" href="https://open.spotify.com/show/79Tt6w0oa0C2MM9STxD11W?si=lqbXsGOqRIeTJ9uj9gP20Q&nd=1&dlsi=96d1cf23ce8f4f95" target="_blank">
           <span class="fab fa-spotify"></span>
          </a>
           <a class="header-social" href="https://apple.co/3u1iRTf" target="_blank">
    <span class="fas fa-podcast"></span>
  </a>
   </div>
          <a href="blogs.html" style="border:1px;">BLOG</a>

          <a href="trial.html" class="special-link"> FREE TRIAL</a>
          <a href="../index.html#Contact">
          <button class="zBtn no"> Request a Demo</button></a>
          

          </div>
     </div>
     </section>
    `;

	// Find all divs with class "footer-placeholder" and replace them with the footer
	var placeholders = document.querySelectorAll(".header-placeholder");
	placeholders.forEach(function (placeholder) {
		placeholder.outerHTML = headerTemplate;
	});
});
