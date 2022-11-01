<template>
  <main>

    <div class="personal-data-table">
        <h2>Personal Details</h2>
    <v-data-table
    :headers="pdetails"
    :items="pcont"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
    </div>

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
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Sn No',
            align: 'start',
            sortable: false,
            value: 'snno',
          },
          { text: 'Crime Place', value: 'crimeplace' },
          { text: 'Crime Type', value: 'crimetype' },
          { text: 'Crime Time', value: 'crimetime' },
          { text: 'Crime Evidance', value: 'crimeevi' },
        ],
        desserts: [
          {
            snno: '01',
            crimeplace: "Salem",
            crimetype: "murder",
            crimetime: "6.00am",
            crimeevi: "eye witness",
          },
          {
            snno: '02',
            crimeplace: "Salem",
            crimetype: "murder",
            crimetime: "6.00am",
            crimeevi: "eye witness",
          },
          {
            snno: '03',
            crimeplace: "Salem",
            crimetype: "murder",
            crimetime: "6.00am",
            crimeevi: "eye witness",
          },
          {
            snno: '04',
            crimeplace: "Salem",
            crimetype: "murder",
            crimetime: "6.00am",
            crimeevi: "eye witness",
          },
          {
            snno: '05',
            crimeplace: "Salem",
            crimetype: "murder",
            crimetime: "6.00am",
            crimeevi: "eye witness",
          },
          
         
          
        ],
        pdetails: [
          {
            text: 'Sn No',
            align: 'start',
            sortable: false,
            value: 'snno',
          },
          { text: 'First Name', value: 'fname' },
          { text: 'Last Name', value: 'lname' },
          { text: 'Aadhar No', value: 'aadharno' },
          { text: 'Address', value: 'address' },
        ],
        pcont: [
          {
            snno: '01',
            fname: "vicky",
            lname: "vignesh",
            aadharno: 123456789012,
            address: "salem-tamilnadu",
          },
          {
            snno: '02',
            fname: "vicky",
            lname: "vignesh",
            aadharno: 123456789012,
            address: "salem-tamilnadu",
          },
          {
            snno: '03',
            fname: "vicky",
            lname: "vignesh",
            aadharno: 123456789012,
            address: "salem-tamilnadu",
          },
          {
            snno: '04',
            fname: "vicky",
            lname: "vignesh",
            aadharno: 123456789012,
            address: "salem-tamilnadu",
          },
          
          {
            snno: '05',
            fname: "vicky",
            lname: "vignesh",
            aadharno: 123456789012,
            address: "salem-tamilnadu",
          },
          
          
          
        ],
      }
    },
  }
</script>

<style scoped>
main{
    display: flex;
    margin: 100px;
}
.crime-data-table{
    margin-left: 15px;
}
</style>