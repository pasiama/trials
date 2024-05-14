<template>
  <div class="main">
    <div >
        <h3 class="title">
            NOTIFY ME
        </h3>
    </div>
     <div class="card">
         <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Importance</div>
      Due today
    </div>
    <span class="badge bg-primary rounded-pill">4</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Importance</div>
      Due Next week
    </div>
    <span class="badge bg-primary rounded-pill">10</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Missed</div>
      Overdue deadline
    </div>
    <span class="badge bg-primary rounded-pill">24</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Missed</div>
      Overdue deadline
    </div>
    <span class="badge bg-primary rounded-pill">24</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Importance</div>
      Due Next week
    </div>
    <span class="badge bg-primary rounded-pill">10</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Missed</div>
      Overdue deadline
    </div>
    <span class="badge bg-primary rounded-pill">24</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Missed</div>
      Overdue deadline
    </div>
    <span class="badge bg-primary rounded-pill">24</span>
  </li>
</ol>
     </div>
  
</div>
  
</template>

<style scoped>
.main {
  width: 1138px;
  margin-right: 200px; 
  font-size: 20px; /* Increased text to enable scrolling */
  padding-left:100px;
  background-color: white;
}
.card{
  border-radius: 15px;
  margin-left: 200px;
}
.row {
  display: -webkit-flex;
  display: flex;
}

/* Create three unequal columns that sits next to each other */
.column {
  padding: 10px;
  
}
/* Left and right column */
.column.side {
   -webkit-flex: 1;
   -ms-flex: 1;
   flex: 1;
}

/* Middle column */
.column.middle {
  -webkit-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

.details{
    padding: 1rem;
    width: 1138px;
  margin-right: 100px; 
  font-size: 20px; /* Increased text to enable scrolling */
  padding-left:100px;
  background-color: white;
}
.title{
    padding-left: 50px;
    margin-left: 200px;
}

</style>