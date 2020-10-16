<template>
	<h2>Money Manager</h2>
	<form @submit.prevent="onSubmit">
		<div>
			<label>บันทึก : </label>
			<input
				v-model="note"
				type="text"
				placeholder="ข้าวไข่เจียว, ผงซักฟอก, อื่นๆ"
			/>
		</div>

		<div>
			<label>ราคา: </label>
			<input v-model="price" type="number" placeholder="100, 200" />
			บาท
		</div>

		<button :disabled="buttonDisabled">เพิ่มบันทึก</button>
	</form>

  <p>ราคารวม: {{ total }} บาท</p>

  <div v-if='$store.state.items.length > 0'>
    <div v-for='(item, index) in $store.state.items' :key='index'>
      {{ item.note }} | {{ item.price }} บาท
    </div>
  </div>

  <div v-else>
    ไม่มีรายการที่บันทึกไว้!
  </div>
  
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			note: '',
			price: '',
		};
	},
	computed: {
    total() {
      let _price = 0;
      for (let item of this.$store.state.items) {
        // เนื่องจาก price ถูกเก็บเป็นสตริง จึงจำเป็นตรงแปลงค่าเป็น int ก่อน 
        // สามารถแปลงได้โดยใช้ parseInt()
        // https://www.w3schools.com/jsref/jsref_parseint.asp
        _price += parseInt(item.price);
      }
      return _price;
    },
		buttonDisabled() {
			if (this.note === '' || this.price === '') {
				return true;
			}
			return false;
		},
	},
	methods: {
		onSubmit() {
			this.$store.dispatch('addItem', {
				note: this.note,
				price: this.price,
      });
			this.note = '';
			this.price = '';
		},
  }
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
