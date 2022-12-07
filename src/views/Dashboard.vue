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
        <h2>Crime Data Details</h2>
    <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</div>
  </main>
</template>

<script>
import { addDatas } from "../service";
  export default {
    data: () => ({
      pdetails: [
          {
            text: 'Sn No',
            align: 'start',
            sortable: false,
            value: 'sno',
          },
          { text: 'First Name', value: 'firstname' },
          { text: 'Last Name', value: 'lastname' },
          { text: 'Aadhar No', value: 'aadharno' },
          { text: 'Address', value: 'address' },
        ],
        headers: [
          {
            text: 'Sn No',
            align: 'start',
            sortable: false,
            value: 'sno',
          },
          { text: 'Crime Place', value: 'crimeplace' },
          { text: 'Crime Type', value: 'crimetype' },
          { text: 'Crime Time', value: 'crimetime' },
          { text: 'Crime Evidance', value: 'crimeevidance' },
        ],
      pcont: [],
      desserts:[],

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
         this.pcont = await addDatas.get();
         this.desserts= await addDatas.get();

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