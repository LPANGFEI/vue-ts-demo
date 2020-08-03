<template>
	<div class="about">
		<el-button type="primary" @click="handleClick">测试请求</el-button>
		<div :class="className">
			<el-table :data="userData" stripe border fit>
				<el-table-column v-for="item in userHeader" :key="item.id" :prop="item.prop" :label="item.label" show-overflow-tooltip align="center"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { SET_USER } from '@/store/mutation-types';
import { getUser } from '@/api/Test/index';
import { userHeader } from './interface';

@Component
export default class Test extends Vue {
	@Mutation(SET_USER) SET_USER: any;

	private userData: any[] = [];
	private userHeader: userHeader[] = [
		{ label: 'name', prop: 'name' },
		{ label: 'username', prop: 'username' },
		{ label: 'email', prop: 'email' },
		{ label: 'phone', prop: 'phone' },
		{ label: 'website', prop: 'website' }
	];

	get className() {
		return 'w-50 flex j-center a-center m-auto mt-3';
	}

	async handleClick() {
		const res: any = await getUser();
		const { status, data } = res;
		if (status === 200) {
			this.userData = data;
			this.SET_USER(this.userData);
		}
	}
}
</script>
