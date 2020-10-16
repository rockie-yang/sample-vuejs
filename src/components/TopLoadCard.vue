<template>
  <div class="col-lg-6 mb-4">
    <!-- Project Card Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">New Projects Progress</h6>
      </div>
      <div class="card-body">
        <h4 class="small font-weight-bold">
          Server Migration <span class="float-right">20%</span>
        </h4>
        <div class="progress mb-4">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style="width: 20%"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h4 class="small font-weight-bold">
          Churn Prevention <span class="float-right">40%</span>
        </h4>
        <div class="progress mb-4">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style="width: 40%"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h4 class="small font-weight-bold">
          Customer Database <span class="float-right">60%</span>
        </h4>
        <div class="progress mb-4">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 60%"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h4 class="small font-weight-bold">
          Anti Money Laundry<span class="float-right">80%</span>
        </h4>
        <div class="progress mb-4">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 80%"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <h4 class="small font-weight-bold">
          Next Best Action <span class="float-right">Complete!</span>
        </h4>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>