<template>
	<div class="about">
		<h1>测试Vuex</h1>
		<div :class="className">
			<el-table :data="userData" stripe border fit>
				<el-table-column v-for="item in userHeader" :key="item.id" :prop="item.prop" :label="item.label" show-overflow-tooltip align="center"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import { userHeader } from './interface';

@Component
export default class About extends Vue {
	private userHeader: userHeader[] = [
		{ label: 'name', prop: 'name' },
		{ label: 'username', prop: 'username' },
		{ label: 'email', prop: 'email' },
		{ label: 'phone', prop: 'phone' },
		{ label: 'website', prop: 'website' }
	];

	@State('userData') userData!: any[];

	get className() {
		return 'w-50 flex j-center a-center m-auto mt-3';
	}
}
</script>
