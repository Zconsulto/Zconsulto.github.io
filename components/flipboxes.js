document.addEventListener("DOMContentLoaded", function () {
  var flipBoxesTemplate = `

    <div class="unique_services-box">

    <!-- Accounting and Finance -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-dollar-sign"></i>
            <h2>Accounting & Finance</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One streamlines financial tasks, automates accounting, supports tax and multi-currency operations, manages banking, and offers real-time visibility into cash flow</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sales and Customer Management -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-handshake"></i>
            <h2>Sales & Customer Management</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One manages the sales process and customer lifecycle. It offers a unified view of customers, improving sales, profitability, and customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Purchasing and Operations -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-shopping-cart"></i>
            <h2>Purchasing & Operations</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One manages procurement, from vendor quotes to payments. It offers tools for comparing suppliers, optimizing costs, and ensuring timely payments</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Inventory and Distribution -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-boxes"></i>
            <h2>Inventory & Distribution</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One offers insights into shipments, inventory, and item locations. It provides real-time inventory updates, pricing management, and stock monitoring</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Reporting and Analytics -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-chart-bar"></i>
            <h2>Reporting & Analytics</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One for SAP HANA offers real-time business intelligence, analytics, and reporting, enhancing decision-making and process efficiency</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Integration Solutions -->
    <div class="unique_service">
      <div class="unique_flip-box">
        <div class="unique_flip-box-inner">
          <div class="unique_flip-box-front">
            <i class="fas fa-link"></i>
            <h2>Integration Solutions</h2>
          </div>
          <div class="unique_flip-box-back">
            <p>SAP Business One ensures seamless integration with headquarters, partners, and other platforms, ideal for expanding businesses.</p>
          </div>
        </div>
      </div>
    </div>

</div>
      `;

  // Find all divs with class "footer-placeholder" and replace them with the footer
  var placeholders = document.querySelectorAll(".flipBoxes-placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.outerHTML = flipBoxesTemplate;
  });
});
