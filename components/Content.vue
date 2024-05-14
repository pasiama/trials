<template>
  <div class="main">
    

</div>
  
</template>

<style scoped>
.main {
  margin-left: 160px;
  margin-top: 20px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;

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

</style>