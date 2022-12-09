<template>

  <main>
    <div class="heading">
    <h2>Admin Portal</h2>
    <v-spacer></v-spacer>
    <v-btn class=" text--white" >
    <router-link to="/officerpanel">Go to Officer Portal</router-link>

  </v-btn>
  <v-btn class=" text--white" >
    <router-link to="/userdetail">User Details</router-link>

  </v-btn>
  </div>

  <v-data-table :headers="headers" :items="studentTable"   class="elevation-1 rounded-lg">
  </v-data-table>
</main>
  
</template>

<script>
import { addDatas } from "../service";
 
  export default {

    
    data: () => ({
      headers: [
        {
          text: 'S No',
          align: 'start',
          sortable: false,
          value: 'sno',
        },
        {
          text: 'First Name',
          value: 'firstname'
        },
        {
          text: 'Last Name',
          value: 'lastname'
        },
        {
          text: 'Aadhar No',
          value: 'aadharno'
        },
        {
          text: 'Address',
          value: 'address'
        },
        {
          text: 'Crime Place',
          value: 'crimeplace'
        },
        {
          text: 'Crime Type',
          value: 'crimetype'
        },
        {
          text: 'Crime Time',
          value: 'crimetime'
        },
        {
          text: 'Crime evidance',
          value: 'crimeevidance'
        },
      ],
      studentTable: [],

      firstname:null,
      lastname:null,
      aadharno:null,
      address:null,
      crimeplace:null,
      crimetype:null,
      crimetime:null,
      crimeevidance:null,
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
         this.studentTable = await addDatas.get();

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

<style scoped lang="scss">

main{
  margin: 25px;
}
.v-data-table{
  margin-top: 15px;
}
.heading{
  display: flex;
  
}
  
</style>