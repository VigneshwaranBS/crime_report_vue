<template>
  <main>
    <!-- <div class="personal-data-table">
     <h2>Personal Details</h2>
    <v-data-table
    :headers="pdetails"
    :items="pcont"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </div> -->
    <div class="crime-data-table">
        <h2>Register Details</h2>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:[`item.actions`]>
     <div >
    <v-menu
     offset-y>
        <template v-slot:activator="{ attrs, on }">
        <v-btn
        :key="text"
      :rounded="rounded"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Assign 
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </template>
</v-data-table>

</div>
  </main>
</template>

<script>
import { addDatas } from "../service";
  export default {
    data: () => ({
        items: [
        { title: 'Admin' },
        { title: 'Officer' },
      ],
      
        headers: [
          {
            text: 'Sn No',
            align: 'start',
            sortable: false,
            value: 'sno',
          },
          { text: 'Name', value: 'name' },
          { text: ' Email', value: 'email' },
          { text: 'Employee ID', value: 'emp' },
          { text: 'Phone Number', value: 'phnnum' },
          { text: 'Station ID', value: 'stationid' },
          { text: 'Position', value: 'actions', sortable: false },

        ],
      desserts:[],

      email:null,
      name:null,
      phnnum:null,
      stationid:null,
      address:null,
      empid:null,
    }),
    created() {
      this.initialize()
    },
    computed: {
      studentTable() {
      return this.studentTable.map((d, index) => ({ ...d, sno: index + 1 }))
    }
    },
    
    methods: {
      async initialize() {
         this.desserts= await addDatas.getdet();

        // this.studentTable = [{
        //     firstname: "Webi",
        //     lastname:"EAFA65",
        //     aadharno: "2022",
        //     address: "20/01/2023",
        //     crimeplace: "svfsd",
        //     crimetime: "10/10/2022",
        //     crimeevidance: "15/12/2022",
        //     crimetype:"csd",
        //   },
        // ]
      },
     





    },
  }
</script>

<style scoped>

main{
    margin: 20px;
    
}
</style>