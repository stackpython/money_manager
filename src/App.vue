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
  <div v-for='(item, index) in $store.state.items' :key='index'>
    {{ item.note }}
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
